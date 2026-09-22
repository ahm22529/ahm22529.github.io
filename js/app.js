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
        ? "أحمد أسامة — Flutter Developer"
        : "Ahmed Osama — Flutter Developer";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
      const items = t(el.dataset.i18nList);
      el.innerHTML = "";
      if (!Array.isArray(items)) return;
      items.forEach((item, i) => {
        const card = document.createElement("article");
        card.className = "stat reveal";
        card.style.setProperty("--i", String(i));
        card.innerHTML = `<b data-count="${item.n}">${item.n}</b><span>${item.l}</span>`;
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

    APPS.forEach((app, i) => {
      const copy = app[lang];
      const name = copy.name;
      const playLabel = I18N[lang].play;
      const soonLabel = app.cta?.[lang] || I18N[lang].soon;
      const tags = app.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
      const link = app.play
        ? `<a class="btn btn-ghost" href="${app.play}" target="_blank" rel="noreferrer">${playLabel}</a>`
        : `<span class="soon">${soonLabel}</span>`;

      if (app.featured) {
        const card = document.createElement("article");
        card.className = "feature-card reveal";
        card.style.setProperty("--accent", app.tint);
        card.style.setProperty("--i", String(i));
        card.innerHTML = `
          <img class="app-icon" src="${app.icon}" alt="${name}">
          <div>
            <h3>${name}</h3>
            <div class="role">${copy.role}</div>
            <p>${copy.blurb}</p>
            <div class="tags">${tags}</div>
            <div class="play-link">${link}</div>
          </div>
        `;
        featured.appendChild(card);
      } else {
        const card = document.createElement("article");
        card.className = "mini-card reveal";
        card.style.setProperty("--i", String(i % 6));
        card.innerHTML = `
          <img class="app-icon" src="${app.icon}" alt="${name}" style="width:52px;height:52px;border-radius:16px">
          <h3>${name}</h3>
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
    EXPERIENCE.forEach((job, i) => {
      const copy = job[lang];
      const item = document.createElement("article");
      item.className = "job reveal";
      item.style.setProperty("--i", String(i));
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
    SKILL_GROUPS.forEach((group, i) => {
      const copy = group[lang];
      const card = document.createElement("article");
      card.className = "skill-card reveal";
      card.style.setProperty("--i", String(i));
      card.innerHTML = `
        <h3>${copy.title}</h3>
        <ul>${copy.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      `;
      root.appendChild(card);
    });
  };

  const renderPhones = () => {
    const phones = [
      { slug: "myfawry", icon: "assets/apps/myfawry.svg" },
      { slug: "elmasrah", icon: "assets/apps/elmasrah.svg" },
      { slug: "seda", icon: "assets/apps/seda.svg" },
    ];
    phones.forEach((item, i) => {
      const app = APPS.find((a) => a.slug === item.slug);
      const node = $(`.phone-${i + 1} .screen`);
      if (!app || !node) return;
      node.innerHTML = `
        <img src="${item.icon}" alt="">
        <strong>${app.en.name}</strong>
        <small>${app.tags[0]} · ${app.tags[1] || ""}</small>
      `;
    });
  };

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let revealIo;

  const countUp = (el) => {
    if (el.dataset.counted === "1") return;
    const raw = el.dataset.count || el.textContent.trim();
    const match = raw.match(/^(\+)?(\d+)(\+)?$/);
    if (!match) return;
    el.dataset.counted = "1";
    if (reduced) {
      el.textContent = raw;
      return;
    }
    const prefix = match[1] || "";
    const target = Number(match[2]);
    const suffix = match[3] || "";
    const start = performance.now();
    const duration = 900;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observeMotion = () => {
    const nodes = document.querySelectorAll(".reveal");
    if (revealIo) revealIo.disconnect();
    if (reduced) {
      nodes.forEach((el) => {
        el.classList.add("is-in");
        el.querySelectorAll("[data-count]").forEach(countUp);
      });
      return;
    }
    revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          entry.target.querySelectorAll("[data-count]").forEach(countUp);
          if (entry.target.matches("[data-count]")) countUp(entry.target);
          revealIo.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );
    nodes.forEach((el) => revealIo.observe(el));
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

    const nav = $(".nav");
    const progress = $(".scroll-progress");
    const stage = $(".stage");
    const sections = ["work", "experience", "skills", "about", "contact"];

    const onScroll = () => {
      const y = window.scrollY || 0;
      nav?.classList.toggle("is-scrolled", y > 16);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? y / max : 0;
      if (progress) progress.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;

      const marker = y + 140;
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + y;
        if (top <= marker) current = id;
      });
      document.querySelectorAll(".nav-links a").forEach((a) => {
        a.classList.toggle("is-active", current && a.getAttribute("href") === `#${current}`);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const light = (e) => {
      const card = e.target.closest(".feature-card, .mini-card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    $("#featured-work")?.addEventListener("mousemove", light);
    $("#app-grid")?.addEventListener("mousemove", light);

    if (stage && !reduced) {
      stage.addEventListener("mousemove", (e) => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        stage.style.setProperty("--px", x.toFixed(3));
        stage.style.setProperty("--py", y.toFixed(3));
      });
      stage.addEventListener("mouseleave", () => {
        stage.style.setProperty("--px", "0");
        stage.style.setProperty("--py", "0");
      });
    }
  };

  const render = () => {
    applyStatic();
    renderApps();
    renderExperience();
    renderSkills();
    renderPhones();
    observeMotion();
  };

  render();
  bind();
})();
