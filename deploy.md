# Deploy to the VPS — plan

**This page deploys v0** (the git tag `v0` in both repos), for friends, while v1 is built.
v1 is a different stack (Docker Compose with Postgres, see `api-geo-shafaq/README.md` and
[decision 0007](decisions/0007-hosting.md)); its deploy page gets written when its server is
ready.

**Status: plan only, nothing done yet** (2026-10-21). Nothing on the VPS changes without
the owner's order. IP and access come from the owner.

One HostKey VPS (6 GB RAM) runs both halves: nginx serves the pages and proxies the API,
which runs in Docker on `127.0.0.1:8131`. The API needs a few tens of MB; RAM is not a
concern. Assumes Ubuntu/Debian; adjust package names otherwise.

```text
browser ──https──▶ nginx :443 ─┬─ geo.shafaq.uz      → /srv/geo-shafaq (static files)
                               └─ api.geo.shafaq.uz  → 127.0.0.1:8131 (Docker, /ws + /api/health)
```

The checkouts follow `main` ([decision 0002](decisions/0002-deploy-branches.md)).

## 1. DNS (at the `shafaq.uz` registrar)

| Name | Type | Value |
|---|---|---|
| `geo` | A | VPS IP |
| `api.geo` | A | VPS IP |

Check: `dig +short geo.shafaq.uz api.geo.shafaq.uz` gives the IP twice.

## 2. Server setup (once)

```bash
apt update && apt install -y nginx certbot python3-certbot-nginx git docker.io
ufw allow OpenSSH && ufw allow 'Nginx Full' && ufw enable    # 22, 80, 443 only
```

## 3. API

```bash
git clone https://github.com/hakim-134/api-geo-shafaq.git /srv/api-geo-shafaq
cd /srv/api-geo-shafaq
git checkout v0            # main now holds v1, which needs Postgres; the tag must be pushed first
docker build -t api-geo-shafaq .
docker run -d --name api-geo-shafaq --restart unless-stopped -p 127.0.0.1:8131:8131 api-geo-shafaq
curl -s 127.0.0.1:8131/api/health     # {"ok":true,"rooms":true}
```

The allowed page origin `https://geo.shafaq.uz` is built in (`main.go`); no flags needed.

## 4. Frontend

```bash
git clone https://github.com/hakim-134/geo-shafaq.git /srv/geo-shafaq
cd /srv/geo-shafaq && git checkout v0
# config.js is gitignored: copy it from the owner's machine (scp), never through chat or git
```

## 5. nginx

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

## 6. HTTPS

```bash
certbot --nginx -d geo.shafaq.uz -d api.geo.shafaq.uz    # adds 443 + redirect, renews itself
```

HTTPS is required: phones need it for the share sheet, and an `https://` page can only
open `wss://`.

## 7. Yandex key

developer.tech.yandex.ru → the key → HTTP Referer: add `geo.shafaq.uz`. Without it the
panoramas do not load on the site. **Owner's to-do.**

## 8. Check

- `https://geo.shafaq.uz` opens, a solo round loads a panorama.
- The menu's "With friends" block is active (it read `/api/health`).
- A room created on a laptop can be joined from a phone on mobile data.

## Updating later

```bash
cd /srv/geo-shafaq && git pull                     # frontend: live at once
cd /srv/api-geo-shafaq && git pull && docker build -t api-geo-shafaq . \
  && docker rm -f api-geo-shafaq \
  && docker run -d --name api-geo-shafaq --restart unless-stopped -p 127.0.0.1:8131:8131 api-geo-shafaq
```

Rooms live in memory, so an API restart ends every running game. Update when nobody is
playing. A deploy script or CI can come later.

## Changing the domain later

`geo-shafaq/js/api.js` (`WEB_HOST`, `API_URL`), `api-geo-shafaq/main.go` (`webOrigin`),
DNS, both nginx `server_name`s, a new certbot run, the Yandex referrer.
