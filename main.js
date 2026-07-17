// ==========================================================================
// Payal Mahapatro — Portfolio
// Vanilla JS: no build step, no dependencies.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderStats();
  renderTimeline();
  renderAchievements();
  renderContactLinks();
  renderFooter();

  initNavbar();
  initThemeToggle();
  initHeroGlow();
  initScrollReveal();
  initVideoAutoplay();
  initCounters();
  initContactForm();
});

/* -------------------------------------------------------------------- */
/* Rendering                                                             */
/* -------------------------------------------------------------------- */

function renderProjects() {
  const wrap = document.getElementById('projectsList');
  if (!wrap) return;

  wrap.innerHTML = SITE_DATA.projects
    .map((p, i) => {
      const reversed = i % 2 === 1 ? ' reversed' : '';
      const media = p.video
        ? `<video muted loop playsinline preload="none" data-autoplay-video><source src="${p.video}" type="video/mp4" /></video>`
        : `<span>${escapeHtml(p.title)}</span>`;

      const demoLink = p.demo
        ? `<a class="link-underline" href="${p.demo}" target="_blank" rel="noreferrer">Live Demo</a>`
        : '';
      const githubLink = p.github
        ? `<a class="link-underline" href="${p.github}" target="_blank" rel="noreferrer">GitHub</a>`
        : '';

      return `
        <article class="project-row${reversed} reveal" data-video-wrap>
          <div class="project-media">
            <div class="project-media-frame">${media}</div>
            <div class="project-mock"><span>${escapeHtml(p.year)}</span></div>
          </div>
          <div class="project-copy">
            <p class="eyebrow">${escapeHtml(p.year)} · ${escapeHtml(p.role)}</p>
            <h3 class="font-display">${escapeHtml(p.title)}</h3>
            <p class="desc">${escapeHtml(p.description)}</p>
            <div class="tech-chips">
              ${p.tech.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join('')}
            </div>
            <div class="project-links">
              <a class="btn btn-primary" href="case-study.html?project=${encodeURIComponent(p.slug)}">Case Study</a>
              ${demoLink}
              ${githubLink}
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderSkills() {
  const wrap = document.getElementById('skillsList');
  if (!wrap) return;

  wrap.innerHTML = SITE_DATA.skills
    .map(
      (group) => `
        <div class="skills-group">
          <h3>${escapeHtml(group.category)}</h3>
          <div class="tech-chips">
            ${group.items.map((item) => `<span class="skill-chip">${escapeHtml(item)}</span>`).join('')}
          </div>
        </div>
      `
    )
    .join('');
}

function renderStats() {
  const wrap = document.getElementById('statsGrid');
  if (!wrap) return;

  wrap.innerHTML = SITE_DATA.stats
    .map(
      (s) => `
        <div class="stat" data-count-target="${s.value}">
          <p class="num font-display" data-count-num>0+</p>
          <p class="label">${escapeHtml(s.label)}</p>
        </div>
      `
    )
    .join('');
}

function renderTimeline() {
  const wrap = document.getElementById('timelineList');
  if (!wrap) return;

  wrap.innerHTML = SITE_DATA.experience
    .map(
      (item) => `
        <div class="timeline-item reveal">
          <span class="timeline-dot"></span>
          <p class="eyebrow">${escapeHtml(item.type)} · ${escapeHtml(item.period)}</p>
          <h3 class="font-display">${escapeHtml(item.title)}</h3>
          <p class="org">${escapeHtml(item.org)}</p>
          <p class="desc">${escapeHtml(item.description)}</p>
        </div>
      `
    )
    .join('');
}

function renderAchievements() {
  const wrap = document.getElementById('achievementsGrid');
  if (!wrap) return;

  wrap.innerHTML = SITE_DATA.achievements
    .map(
      (item) => `
        <div class="achievement-card reveal">
          <p class="eyebrow">${escapeHtml(item.category)}</p>
          <h3 class="font-display">${escapeHtml(item.title)}</h3>
          <p class="org">${escapeHtml(item.org)}</p>
          <p class="desc">${escapeHtml(item.description)}</p>
        </div>
      `
    )
    .join('');
}

function renderContactLinks() {
  const wrap = document.getElementById('contactLinks');
  if (!wrap) return;
  const { email, linkedin, github, resume } = SITE_DATA.links;

  wrap.innerHTML = `
    <li><a href="mailto:${email}"><span class="label">Email</span><span class="value">${email}</span></a></li>
    <li><a href="${linkedin}" target="_blank" rel="noreferrer"><span class="label">LinkedIn</span><span class="value">${linkedin.replace('https://', '')}</span></a></li>
    <li><a href="${github}" target="_blank" rel="noreferrer"><span class="label">GitHub</span><span class="value">${github.replace('https://', '')}</span></a></li>
    <li><a href="${resume}"><span class="label">Resume</span><span class="value">Download PDF</span></a></li>
  `;
}

function renderFooter() {
  const note = document.getElementById('footerNote');
  const links = document.getElementById('footerLinks');
  const { email, linkedin, github } = SITE_DATA.links;
  if (note) note.textContent = `© ${new Date().getFullYear()} Payal Mahapatro. Designed & built with care.`;
  if (links) {
    links.innerHTML = `
      <a href="mailto:${email}">Email</a>
      <a href="${github}" target="_blank" rel="noreferrer">GitHub</a>
      <a href="${linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
    `;
  }
}

/* -------------------------------------------------------------------- */
/* Navbar: blur-on-scroll, smooth section scrolling, mobile menu        */
/* -------------------------------------------------------------------- */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('navBurger');
  const mobile = document.getElementById('navMobile');

  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  burger.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('[data-scroll-link]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = el.getAttribute('data-target');
      if (!target) return;
      e.preventDefault();
      const section = document.getElementById(target);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      mobile.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* -------------------------------------------------------------------- */
/* Dark mode toggle                                                      */
/* -------------------------------------------------------------------- */

function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  toggle.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

/* -------------------------------------------------------------------- */
/* Hero ambient glow that drifts gently with the cursor                  */
/* -------------------------------------------------------------------- */

function initHeroGlow() {
  const glow = document.getElementById('heroGlow');
  if (!glow) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('pointermove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    glow.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* -------------------------------------------------------------------- */
/* Scroll-triggered fade-up reveal                                       */
/* -------------------------------------------------------------------- */

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

/* -------------------------------------------------------------------- */
/* Project screen recordings: play only while in view                    */
/* -------------------------------------------------------------------- */

function initVideoAutoplay() {
  const wraps = document.querySelectorAll('[data-video-wrap]');
  if (!wraps.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector('[data-autoplay-video]');
        if (!video) return;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    },
    { threshold: 0.3 }
  );

  wraps.forEach((el) => observer.observe(el));
}

/* -------------------------------------------------------------------- */
/* Animated statistic counters                                           */
/* -------------------------------------------------------------------- */

function initCounters() {
  const stats = document.querySelectorAll('[data-count-target]');
  if (!stats.length) return;

  const animate = (el) => {
    const target = Number(el.getAttribute('data-count-target'));
    const numEl = el.querySelector('[data-count-num]');
    const duration = 1600;
    let start = null;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      numEl.textContent = `${Math.round(eased * target)}+`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    stats.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  stats.forEach((el) => observer.observe(el));
}

/* -------------------------------------------------------------------- */
/* Contact form (front-end only — wire handleSubmit to your own backend  */
/* or a form service such as Formspree)                                  */
/* -------------------------------------------------------------------- */

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Message sent';
    status.hidden = false;
  });
}

/* -------------------------------------------------------------------- */
/* Utilities                                                             */
/* -------------------------------------------------------------------- */

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
