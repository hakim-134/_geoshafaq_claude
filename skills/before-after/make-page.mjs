// The before & after page: one HTML file with every picture inside it, so it opens anywhere
// and can be sent to the owner's phone. See SKILL.md for changes.json.
//
//   node make-page.mjs <folder>     reads <folder>/changes.json, writes <folder>/before-after.html

import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const folder = resolve(process.argv[2] ?? '');
const data = JSON.parse(readFileSync(join(folder, 'changes.json'), 'utf8'));
const changes = data.changes ?? [];
const noPicture = data.noPicture ?? [];

const esc = (s) =>
	String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function picture(file, side, empty) {
	const label = `<h3 class="${side}">${side === 'before' ? 'Before' : 'After'}</h3>`;
	if (!file) return { html: `<figure>${label}<div class="empty">${esc(empty)}</div></figure>`, wide: false };
	const bytes = readFileSync(join(folder, file));
	const wide = bytes.readUInt32BE(16) > bytes.readUInt32BE(20); // a PNG's width and height
	const src = `data:image/png;base64,${bytes.toString('base64')}`;
	return { html: `<figure>${label}<img src="${src}" alt="${side}" loading="lazy"></figure>`, wide };
}

const cards = changes.map((c, i) => {
	if (!c.before && !c.after) throw new Error(`change ${i + 1} (${c.page}): no picture at all`);
	const before = picture(c.before, 'before', 'This did not exist yet');
	const after = picture(c.after, 'after', 'This is gone now');
	return `<section>
<h2><span class="n">${i + 1}</span> ${esc(c.page)} <small>${esc(c.view ?? '')}</small></h2>
<ul>${(c.what ?? []).map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
<div class="pair${before.wide || after.wide ? ' wide' : ''}">${before.html}${after.html}</div>
</section>`;
});

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Before &amp; after: ${esc(data.task)}</title>
<style>
:root { color-scheme: light dark; --bg: #f6f7f5; --card: #fff; --ink: #1b211d; --soft: #646e68; --line: #dfe3df; --green: #16824a; }
@media (prefers-color-scheme: dark) { :root { --bg: #131714; --card: #1c211e; --ink: #edf0ed; --soft: #a0aaa3; --line: #323935; --green: #4cc785; } }
* { box-sizing: border-box; }
body { margin: 0 auto; padding: 20px 14px 60px; max-width: 1180px; background: var(--bg); color: var(--ink); font: 16px/1.45 system-ui, sans-serif; }
h1 { margin: 0 0 4px; font-size: 24px; line-height: 1.2; }
.meta, small { color: var(--soft); font-size: 14px; font-weight: 400; }
.asked { margin: 14px 0; padding: 10px 14px; border-left: 4px solid var(--green); background: var(--card); white-space: pre-wrap; }
.asked b { display: block; color: var(--soft); font-size: 13px; font-weight: 600; }
section, .plain { margin-top: 18px; padding: 16px; border: 1px solid var(--line); border-radius: 12px; background: var(--card); }
h2 { margin: 0; font-size: 19px; }
.n { display: inline-block; min-width: 28px; margin-right: 4px; border-radius: 14px; background: var(--green); color: var(--card); text-align: center; }
ul { margin: 8px 0 14px; padding-left: 22px; }
.pair { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
@media (max-width: 800px) { .pair.wide { grid-template-columns: 1fr; } }
figure { margin: 0; min-width: 0; }
h3 { margin: 0 0 6px; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: var(--soft); }
h3.after { color: var(--green); }
img { display: block; width: 100%; max-height: 86vh; object-fit: contain; object-position: top; border: 1px solid var(--line); border-radius: 8px; cursor: zoom-in; }
.empty { display: grid; place-items: center; min-height: 200px; padding: 12px; border: 1px dashed var(--line); border-radius: 8px; color: var(--soft); text-align: center; }
#big { position: fixed; inset: 0; display: none; flex-direction: column; background: #000; color: #fff; cursor: pointer; }
#big.on { display: flex; }
#big p { margin: 0; padding: 8px; text-align: center; font-size: 14px; }
#big img { flex: 1; min-height: 0; max-height: none; border: 0; border-radius: 0; cursor: pointer; }
</style>
</head>
<body>
<h1>${esc(data.task)}</h1>
<div class="meta">${esc(data.date ?? '')} · ${changes.length} ${changes.length === 1 ? 'picture pair' : 'picture pairs'}. Tap a picture to see it big and flip between before and after.</div>
${data.asked ? `<div class="asked"><b>What you asked</b>${esc(data.asked)}</div>` : ''}
${data.demo === false ? '' : '<div class="meta">The streets here are our drawn test streets; players see Yandex. Each game is random, so streets, scores and guest names differ by chance: that is not a change.</div>'}
${cards.join('\n')}
${noPicture.length ? `<div class="plain"><h2>Changes with no picture</h2><ul>${noPicture.map((w) => `<li>${esc(w)}</li>`).join('')}</ul></div>` : ''}
<div id="big"><p></p><img alt=""></div>
<script>
const big = document.getElementById('big');
const bigImg = big.querySelector('img');
const bigLabel = big.querySelector('p');
let pair = [];
let at = 0;
function show() {
	bigImg.src = pair[at].src;
	const other = pair.length > 1 ? ' · tap to flip · Esc or the top bar to close' : ' · tap to close';
	bigLabel.textContent = pair[at].alt.toUpperCase() + other;
}
document.querySelectorAll('.pair img').forEach((img) => {
	img.addEventListener('click', () => {
		pair = [...img.closest('.pair').querySelectorAll('img')];
		at = pair.indexOf(img);
		show();
		big.classList.add('on');
	});
});
big.addEventListener('click', (e) => {
	if (e.target === bigLabel || pair.length < 2) return big.classList.remove('on');
	at = (at + 1) % pair.length;
	show();
});
addEventListener('keydown', (e) => {
	if (e.key === 'Escape') big.classList.remove('on');
});
</script>
</body>
</html>
`;

const out = join(folder, 'before-after.html');
writeFileSync(out, html);
console.log(`${out} (${changes.length} pairs, ${(html.length / 1048576).toFixed(1)} MB)`);
