# Putting it on the server

Two parts: **v1** (the game as it is now, §A), and the older plan for **v0** (the `v0` tag,
§B), for friends meanwhile. Nothing on a server changes without the owner's word
([access.md §6](access.md#6-still-the-owners-call)). There is no CI: deploys are run by hand
([decision 0011](decisions/0011-server-stack.md)).

## A. v1: the server stack

Everything the server runs is `api-geo-shafaq/docker-compose.yml`: Caddy (HTTPS), the API,
the worker, Postgres + PostGIS with pgBackRest backups, Valkey, and the watch tools
(Prometheus, Loki, Alloy, Grafana, GlitchTip). Built and rehearsed on the laptop on
2026-10-26; waiting for a server.

**From the owner first:** the server (address, SSH as root once), and the DNS records below.
Later, for backups off the server: an S3-compatible bucket **in Uzbekistan**
([decision 0011](decisions/0011-server-stack.md)).

| Name (A record → the server) | What |
|---|---|
| `geo.shafaq.uz` | the game |
| `api.geo.shafaq.uz` | the API |
| `stats.geo.shafaq.uz` | Grafana: the dashboard, logs (login `admin`) |
| `errors.geo.shafaq.uz` | GlitchTip: errors from the API and from players' browsers |

The names live only in the server's `.env` (`deploy/env.example`); renaming is a change there
plus DNS and the Yandex key's allowed sites.

**Once, on the server** (Ubuntu/Debian, as root):

```bash
apt update && apt install -y docker.io docker-compose-v2 git rsync
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw enable
adduser --disabled-password deploy && usermod -aG docker deploy   # the owner's SSH key into ~deploy/.ssh
mkdir -p /srv/shafaq/web && chown -R deploy: /srv/shafaq
su - deploy -c 'git clone https://github.com/hakim-134/api-geo-shafaq.git /srv/shafaq/api-geo-shafaq'
cp /srv/shafaq/api-geo-shafaq/deploy/env.example /srv/shafaq/api-geo-shafaq/.env   # fill it in
```

Passwords: `openssl rand -hex 24` each. Keep `BACKUP_PASSWORD` somewhere off the server too:
without it the backups cannot be read.

**Deploy** (the first time and every time after a push):

| What | Where | Command |
|---|---|---|
| the server | on the server, as `deploy` | `/srv/shafaq/api-geo-shafaq/deploy/deploy.sh` |
| the game | on the laptop, in `geo-shafaq` | `DEPLOY_TARGET=deploy@<server> scripts/deploy.sh` |

The game's build takes `PUBLIC_YANDEX_KEY` and `PUBLIC_GLITCHTIP_DSN` from `.env.local`.
Add the game's address to the Yandex key's allowed sites (owner's to-do).

**GlitchTip, once:** make the owner's account with
`docker compose exec glitchtip ./manage.py createsuperuser`, sign in at `https://errors.…`,
create the organisation "Shafaq Geo" and two projects, `api` (Go) and `web` (JavaScript). Put the `api` DSN in the server's `.env` as
`GLITCHTIP_DSN=http://<key>@glitchtip:8000/<id>` (the internal address), the `web` DSN in
`geo-shafaq/.env.local` as `PUBLIC_GLITCHTIP_DSN` (the public one), and deploy both.

**Check:** `/v1/ready` (deploy.sh prints it), the game opens, Grafana's "Shafaq Geo" dashboard
fills, and in the db logs `backup: full backup done`. A restore test by hand:
`docker compose exec -u postgres db restore-test.sh` (the last line says `restore OK`).

**Backups** run by themselves: WAL all the time, full on Sundays, differential the other
nights at 03:00 Tashkent, a checked restore every Sunday. A failure, and the weekly "restore
OK", come to the owner on Telegram (`TELEGRAM_ALERT_*`).

## B. v0, for friends (plan only)

**This part deploys v0** (the git tag `v0` in both repos), for friends, while v1 waits for its
server. **Status: plan only, nothing done yet** (2026-10-21). IP and access come from the owner.
v0 and v1 cannot both hold ports 80/443 on one VPS: v1 replaces v0 there.

One HostKey VPS (6 GB RAM) runs both halves: nginx serves the pages and proxies the API,
which runs in Docker on `127.0.0.1:8131`. The API needs a few tens of MB; RAM is not a
concern. Assumes Ubuntu/Debian; adjust package names otherwise.

```text
browser ──https──▶ nginx :443 ─┬─ geo.shafaq.uz      → /srv/geo-shafaq (static files)
                               └─ api.geo.shafaq.uz  → 127.0.0.1:8131 (Docker, /ws + /api/health)
```

The checkouts follow `main` ([decision 0002](decisions/0002-deploy-branches.md)).

### 1. DNS (at the `shafaq.uz` registrar)

| Name | Type | Value |
|---|---|---|
| `geo` | A | VPS IP |
| `api.geo` | A | VPS IP |

Check: `dig +short geo.shafaq.uz api.geo.shafaq.uz` gives the IP twice.

### 2. Server setup (once)

```bash
apt update && apt install -y nginx certbot python3-certbot-nginx git docker.io
ufw allow OpenSSH && ufw allow 'Nginx Full' && ufw enable    # 22, 80, 443 only
```

### 3. API

```bash
git clone https://github.com/hakim-134/api-geo-shafaq.git /srv/api-geo-shafaq
cd /srv/api-geo-shafaq
git checkout v0            # main now holds v1, which needs Postgres; the tag must be pushed first
docker build -t api-geo-shafaq .
docker run -d --name api-geo-shafaq --restart unless-stopped -p 127.0.0.1:8131:8131 api-geo-shafaq
curl -s 127.0.0.1:8131/api/health     # {"ok":true,"rooms":true}
```

The allowed page origin `https://geo.shafaq.uz` is built in (`main.go`); no flags needed.

### 4. Frontend

```bash
git clone https://github.com/hakim-134/geo-shafaq.git /srv/geo-shafaq
cd /srv/geo-shafaq && git checkout v0
# config.js is gitignored: copy it from the owner's machine (scp), never through git
```

### 5. nginx

`/etc/nginx/sites-available/geo-shafaq`, linked into `sites-enabled`:

```nginx
server {
    listen 80;
    server_name geo.shafaq.uz;
    root /srv/geo-shafaq;
    add_header Cache-Control "no-cache";     # files carry ?v=N; always revalidate

    # Only the game files; not .git, tools/, serve.py or the READMEs.
    location = / { try_files /index.html =404; }
    location ~ ^/(index|game)\.html$ { }
    location = /config.js { }
    location ^~ /css/ { }
    location ^~ /js/ { }
    location ^~ /img/ { }
    location / { return 404; }
}

server {
    listen 80;
    server_name api.geo.shafaq.uz;
    location / {
        proxy_pass http://127.0.0.1:8131;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 120s;             # the API pings every 25 s
    }
}
```

`nginx -t && systemctl reload nginx`

### 6. HTTPS

```bash
certbot --nginx -d geo.shafaq.uz -d api.geo.shafaq.uz    # adds 443 + redirect, renews itself
```

HTTPS is required: phones need it for the share sheet, and an `https://` page can only
open `wss://`.

### 7. Yandex key

developer.tech.yandex.ru → the key → HTTP Referer: add `geo.shafaq.uz`. Without it the
panoramas do not load on the site. **Owner's to-do.**

v0 does not count its Yandex views; Yandex does. Watch the cabinet's statistics for the
key, or run v1's worker anywhere with `YANDEX_CABINET_KEY` set: it reads Yandex's count and
warns at 80% of the free limit ([before-launch.md](before-launch.md)).

### 8. Check

- `https://geo.shafaq.uz` opens, a solo round loads a panorama.
- The menu's "With friends" block is active (it read `/api/health`).
- A room created on a laptop can be joined from a phone on mobile data.

### Updating later

```bash
cd /srv/geo-shafaq && git pull                     # frontend: live at once
cd /srv/api-geo-shafaq && git pull && docker build -t api-geo-shafaq . \
  && docker rm -f api-geo-shafaq \
  && docker run -d --name api-geo-shafaq --restart unless-stopped -p 127.0.0.1:8131:8131 api-geo-shafaq
```

Rooms live in memory, so an API restart ends every running game. Update when nobody is
playing. A deploy script or CI can come later.

### Changing the domain later

`geo-shafaq/js/api.js` (`WEB_HOST`, `API_URL`), `api-geo-shafaq/main.go` (`webOrigin`),
DNS, both nginx `server_name`s, a new certbot run, the Yandex referrer.
