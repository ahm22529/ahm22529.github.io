(() => {
  const LANG_KEY = "ao-lang";

  const $ = (sel, root = document) => root.querySelector(sel);

  const getLang = () => {
    const query = new URLSearchParams(location.search).get("lang");
    if (query === "ar" || query === "en") return query;
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "ar" || saved === "en") return saved;
    return "en";
  };

  let lang = getLang();

  const t = (path) => {
    const parts = path.split(".");
    let node = I18N[lang];
    for (const part of parts) node = node?.[part];
    return node ?? path;
  };

  const applyStatic = () => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title =
      lang === "ar"
        ? "أحمد أسامة — موبايل ديفلوبر"
        : "Ahmed Osama — Mobile Developer";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
      const items = t(el.dataset.i18nList);
      el.innerHTML = "";
      if (!Array.isArray(items)) return;
      items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "stat";
        card.innerHTML = `<b>${item.n}</b><span>${item.l}</span>`;
        el.appendChild(card);
      });
    });

    document.querySelectorAll("[data-name]").forEach((el) => {
      el.textContent = lang === "ar" ? PROFILE.nameAr : PROFILE.name;
    });

    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  };

  const renderApps = () => {
    const featured = $("#featured-work");
    const grid = $("#app-grid");
    if (!featured || !grid) return;
    featured.innerHTML = "";
    grid.innerHTML = "";

    APPS.forEach((app) => {
      const copy = app[lang];
      const playLabel = I18N[lang].play;
      const soonLabel = I18N[lang].soon;
      const tags = app.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
      const link = app.play
        ? `<a class="btn btn-ghost" href="${app.play}" target="_blank" rel="noreferrer">${playLabel}</a>`
        : `<span class="soon">${soonLabel}</span>`;

      if (app.featured) {
        const card = document.createElement("article");
        card.className = "feature-card";
        card.style.setProperty("--accent", app.tint);
        card.innerHTML = `
          <img class="app-icon" src="${app.icon}" alt="${copy.name}">
          <div>
            <h3>${copy.name}</h3>
            <div class="role">${copy.role}</div>
            <p>${copy.blurb}</p>
            <div class="tags">${tags}</div>
            <div class="play-link">${link}</div>
          </div>
        `;
        featured.appendChild(card);
      } else {
        const card = document.createElement("article");
        card.className = "mini-card";
        card.innerHTML = `
          <img class="app-icon" src="${app.icon}" alt="${copy.name}" style="width:52px;height:52px;border-radius:16px">
          <h3>${copy.name}</h3>
          <div class="role">${copy.role}</div>
          <p>${copy.blurb}</p>
          <div class="tags">${tags}</div>
          <div style="margin-top:14px">${link}</div>
        `;
        grid.appendChild(card);
      }
    });
  };

  const renderExperience = () => {
    const root = $("#timeline");
    if (!root) return;
    root.innerHTML = "";
    EXPERIENCE.forEach((job) => {
      const copy = job[lang];
      const item = document.createElement("article");
      item.className = "job";
      item.innerHTML = `
        <div class="job-top">
          <h3>${copy.company}</h3>
          <span class="dates">${copy.dates}</span>
        </div>
        <div class="role">${copy.role}</div>
        <ul>${copy.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      `;
      root.appendChild(item);
    });
  };

  const renderSkills = () => {
    const root = $("#skills-grid");
    if (!root) return;
    root.innerHTML = "";
    SKILL_GROUPS.forEach((group) => {
      const copy = group[lang];
      const card = document.createElement("article");
      card.className = "skill-card";
      card.innerHTML = `
        <h3>${copy.title}</h3>
        <ul>${copy.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      `;
      root.appendChild(card);
    });
  };

  const renderPhones = () => {
    const phones = [
      { slug: "rawa", icon: "assets/apps/rawa.svg" },
      { slug: "otcha", icon: "assets/apps/otcha.svg" },
      { slug: "myfawry", icon: "assets/apps/myfawry.svg" },
    ];
    phones.forEach((item, i) => {
      const app = APPS.find((a) => a.slug === item.slug);
      const node = $(`.phone-${i + 1} .screen`);
      if (!app || !node) return;
      node.innerHTML = `
        <img src="${item.icon}" alt="">
        <strong>${app[lang].name.split(" ")[0]}</strong>
        <small>${app.tags[0]} · ${app.tags[1] || ""}</small>
      `;
    });
  };

  const bind = () => {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        lang = btn.dataset.lang;
        localStorage.setItem(LANG_KEY, lang);
        render();
      });
    });

    const copyBtn = $("#copy-email");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(PROFILE.email);
          copyBtn.textContent = t("contact.copied");
          setTimeout(() => {
            copyBtn.textContent = t("contact.copy");
          }, 1600);
        } catch {
          window.location.href = `mailto:${PROFILE.email}`;
        }
      });
    }
  };

  const render = () => {
    applyStatic();
    renderApps();
    renderExperience();
    renderSkills();
    renderPhones();
  };

  render();
  bind();
})();
