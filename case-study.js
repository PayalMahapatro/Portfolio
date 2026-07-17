document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  renderFooter();
  renderCaseStudy();
});

function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  toggle.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
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

function renderCaseStudy() {
  const root = document.getElementById('caseStudyRoot');
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('project');
  const projects = SITE_DATA.projects;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    root.innerHTML = `
      <div class="not-found">
        <p class="eyebrow">404</p>
        <h1 class="font-display">This page wandered off.</h1>
        <a class="link-underline" href="index.html">Back to home</a>
      </div>
    `;
    return;
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  document.title = `${project.title} — Payal Mahapatro`;

  const demoBtn = project.demo
    ? `<a class="btn btn-primary" href="${project.demo}" target="_blank" rel="noreferrer">View Live Demo</a>`
    : '';
  const githubBtn = project.github
    ? `<a class="btn btn-outline" href="${project.github}" target="_blank" rel="noreferrer">View on GitHub</a>`
    : '';

  root.innerHTML = `
    <div class="case-study container">
      <a class="back-link" href="index.html#projects">&larr; Back to projects</a>

      <div class="case-header">
        <p class="eyebrow">${escapeHtml(project.year)} · ${escapeHtml(project.role)}</p>
        <h1 class="font-display">${escapeHtml(project.title)}</h1>
        <p class="tagline">${escapeHtml(project.tagline)}</p>
      </div>

      <div class="case-media"><span>${escapeHtml(project.title)}</span></div>

      <div class="case-split">
        <div>
          <h2 class="font-display">The problem</h2>
          <p>${escapeHtml(project.problem)}</p>
        </div>
        <div>
          <h2 class="font-display">The solution</h2>
          <p>${escapeHtml(project.solution)}</p>
        </div>
      </div>

      <div class="case-tech">
        <h2 class="font-display">Built with</h2>
        <div class="tech-chips">
          ${project.tech.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>

      <div class="case-ctas">${demoBtn}${githubBtn}</div>

      <div class="case-nav">
        <a href="case-study.html?project=${encodeURIComponent(prev.slug)}">&larr; ${escapeHtml(prev.title)}</a>
        <a href="case-study.html?project=${encodeURIComponent(next.slug)}">${escapeHtml(next.title)} &rarr;</a>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
