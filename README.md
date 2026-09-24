# Blueprint visitor counter

1. Open `index.html` and copy the block between `<!-- ===== SITE COUNTER -->` and `<!-- ===== END SITE COUNTER -->`.
2. Paste it just before `</body>` on every page of The Blueprint / El Plano.
3. In the badge `src`, change `blueprint` in `url=https%3A%2F%2Fradan55.github.io%2Fblueprint%2F` to the real repo name once, and leave it the same on every page so the whole site counts as one.
4. Publish with GitHub Pages (Settings → Pages → Deploy from branch → main / root).

The badge is served by hitscounter.dev; if that service is ever unreachable the footer shows a plain label instead of a broken image.
