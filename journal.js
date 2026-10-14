// Renders journal posts (journal page) and featured posts (home page).
// Re-renders whenever main.js switches language.
(() => {
  const posts = [...window.POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const ui = {
    en: { featured: "Featured", all: "All", star: "Featured", empty: "No posts yet.", read: "Read" },
    zh: { featured: "精選", all: "全部", star: "精選", empty: "目前還沒有文章。", read: "閱讀" },
  };
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (d, lang, opts) => new Intl.DateTimeFormat(lang === "zh" ? "zh-TW" : "en-GB", { timeZone: "UTC", ...opts })
    .format(new Date(d + "T00:00:00Z"));
  const img = src => "assets/journal/" + src;

  let lang = "en";
  let filter = "all";

  const list = document.getElementById("journalList");
  const featured = document.getElementById("featuredPosts");

  function renderList() {
    const shown = posts.filter(p => filter === "all" || p.featured);
    let month = "";
    list.innerHTML = shown.map(p => {
      const t = p[lang];
      const m = fmt(p.date, lang, { year: "numeric", month: "long" });
      const head = m !== month ? `<h2 class="month">${(month = m)}</h2>` : "";
      const pics = p.images.map(i =>
        `<button class="pic" data-full="${img(i.src)}" aria-label="${esc(i[lang])}"><img src="${img(i.src)}" alt="${esc(i[lang])}" width="${i.w}" height="${i.h}" loading="lazy"></button>`).join("");
      return `${head}
        <article class="post${p.featured ? " is-featured" : ""}" id="${p.date}">
          <div class="post-meta">
            <time datetime="${p.date}">${fmt(p.date, lang, { day: "numeric", month: "short" })}</time>
            ${p.featured ? `<span class="star">★ ${ui[lang].star}</span>` : ""}
          </div>
          <div class="post-body">
            <h3><a href="#${p.date}">${esc(t.title)}</a></h3>
            <p>${esc(t.text)}</p>
            ${pics ? `<div class="pics n${p.images.length}">${pics}</div>` : ""}
          </div>
        </article>`;
    }).join("") || `<p class="lede">${ui[lang].empty}</p>`;
    document.querySelectorAll(".filter button").forEach(b => {
      b.textContent = ui[lang][b.dataset.f];
      b.classList.toggle("on", b.dataset.f === filter);
    });
  }

  function renderFeatured() {
    featured.innerHTML = posts.filter(p => p.featured).slice(0, 3).map(p => {
      const t = p[lang], cover = p.images[0];
      return `<a class="fpost" href="journal.html#${p.date}">
          ${cover ? `<img src="${img(cover.src)}" alt="${esc(cover[lang])}" width="${cover.w}" height="${cover.h}" loading="lazy">` : ""}
          <time datetime="${p.date}">${fmt(p.date, lang, { day: "numeric", month: "long", year: "numeric" })}</time>
          <h3>${esc(t.title)}</h3>
        </a>`;
    }).join("");
  }

  function render() {
    if (list) renderList();
    if (featured) renderFeatured();
  }

  addEventListener("langchange", e => { lang = e.detail; render(); });

  if (list) {
    document.querySelector(".filter").addEventListener("click", e => {
      const f = e.target.dataset.f;
      if (f) { filter = f; renderList(); }
    });

    // Lightbox
    const box = document.getElementById("lightbox");
    const boxImg = box.querySelector("img");
    list.addEventListener("click", e => {
      const b = e.target.closest(".pic");
      if (!b) return;
      boxImg.src = b.dataset.full;
      boxImg.alt = b.getAttribute("aria-label");
      box.showModal();
    });
    box.addEventListener("click", () => box.close());

    // Jump to a linked post once it has rendered
    addEventListener("langchange", () => {
      const target = location.hash && document.getElementById(location.hash.slice(1));
      if (target && !target.dataset.jumped) { target.dataset.jumped = 1; target.scrollIntoView(); target.classList.add("flash"); }
    }, { once: true });
  }
})();
