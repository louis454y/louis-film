/* ============================================
   LOUIS FILM — App-like interactions + animations
   ============================================ */

(function () {
  'use strict';

  const portfolioItems = [
    { id: 'HlJ3L4dvKj4', title: 'Campaña Visual Premium', category: 'comercial', year: '2025' },
    { id: 'PQ7qWPqiwyQ', title: 'Anuncio De Campaña de Cambio Radical', category: 'comercial', year: '2025' },
    { id: 'Ads4Zq_KeQ0', title: 'Anuncio De Campaña de Cambio Radical', category: 'comercial', year: '2025' },
    { id: '0mYq6nHYlOQ', title: 'Anuncio De Campaña de Cambio Radical', category: 'comercial', year: '2025' },
    { id: 'BG-QUSTP0MA', title: 'Anuncio De Campaña de Cambio Radical', category: 'comercial', year: '2025' },
    { id: '80B9swvY3zA', title: 'Evento De Moda', category: 'comercial', year: '2025' },
    { id: 'dTLYge61f-4', title: 'Publicidad de Servicio Premium', category: 'comercial', year: '2025' },
    { id: '2_WZYuJn3nQ', title: 'Campaña Publicitaria Integral', category: 'comercial', year: '2025' },
    { id: '2Am6nacd2Z0', title: 'Cortometraje Narrativo', category: 'cortometraje', year: '2026' },
     { id: 'MBzibBeoFJo', title: 'Producción Audiovisual De publicidad Puerto vivero', category: 'comercial', year: '2026' },

    
    { id: 'ua2McpfIZ-0', title: 'Historia Visual Experimental', category: 'cortometraje', year: '2026' },
    { id: 'fU7GpZLe9WY', title: 'Drama Cinematográfico', category: 'cortometraje', year: '2026' },
    
    // —— Nuevos videos Comercial ——
    { id: '2HglvFpjr7E', title: 'Atlántico Vivero — Video Corporativo', category: 'comercial', year: '2026' },
    { id: 'ID8V3ozsg4U', title: 'Diseño de Paisajismo y Jardinería', category: 'comercial', year: '2026' },
    { id: 'mO7NnPFTQ_w', title: 'Siembra de Palmera Cica', category: 'comercial', year: '2026' },
    { id: 'F3M56WMArdA', title: 'Video Publicitario — Productor Musical', category: 'comercial', year: '2026' },
    { id: '4-5_E_5l_6M', title: 'Video Publicitario — Peluquería', category: 'comercial', year: '2026' },
    { id: 'MOE5XQrHFMk', title: 'Jornada de Siembra — Colegio San José', category: 'comercial', year: '2026' },
   

    // —— Nuevos videos Documentales / Narrativos ——
    { id: '30NJK92MX-M', title: 'NABOHEAD — Pompeya (Edición Narrativa)', category: 'cortometraje', year: '2026' },
    { id: 'a48V8wBbVQk', title: 'NABOHEAD — Contenido Narrativo', category: 'cortometraje', year: '2026' },
    { id: 'kpZoB12U9Vw', title: 'NABOHEAD — La Danza de 1518', category: 'cortometraje', year: '2026' },
  ];

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Preloader
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1450);
  });

  // Custom cursor (desktop)
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mx = 0, my = 0, fx = 0, fy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    }, { passive: true });

    (function loop() {
      fx += (mx - fx) * 0.18;
      fy += (my - fy) * 0.18;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      requestAnimationFrame(loop);
    })();

    const hoverSel = 'a, button, .filter-btn, .portfolio-item, .service-card, .bottom-nav-item, input, select, textarea';
    document.querySelectorAll(hoverSel).forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        follower.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
      });
    });
  }

  // Header scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

  // Active section (top nav + bottom nav)
  const sections = document.querySelectorAll('section[id]');
  const topLinks = document.querySelectorAll('.nav-link');
  const bottomLinks = document.querySelectorAll('.bottom-nav-item');

  function setActive(id) {
    topLinks.forEach((l) => l.classList.toggle('active', l.dataset.section === id));
    bottomLinks.forEach((l) => l.classList.toggle('active', l.dataset.section === id));
  }

  function updateActive() {
    const y = window.scrollY + 140;
    let current = 'home';
    sections.forEach((sec) => {
      if (y >= sec.offsetTop) current = sec.id;
    });
    setActive(current);
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();

  // Smooth scroll for bottom nav + top nav
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = window.innerWidth < 900 ? 70 : 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Scroll reveals
  const revealEls = document.querySelectorAll('.reveal, .reveal-scale, .reveal-card');
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );
  revealEls.forEach((el) => revealObs.observe(el));

  // Portfolio
  const grid = document.getElementById('portfolio-grid');

  function renderPortfolio(filter = 'all') {
    if (!grid) return;
    const items = filter === 'all'
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === filter);

    grid.innerHTML = items.map((item, i) => `
      <article class="portfolio-item" data-id="${item.id}" data-category="${item.category}" style="animation-delay:${i * 60}ms">
        <img
          src="https://img.youtube.com/vi/${item.id}/maxresdefault.jpg"
          alt="${item.title}"
          loading="lazy"
          onerror="this.src='https://img.youtube.com/vi/${item.id}/hqdefault.jpg'"
        />
        <div class="portfolio-overlay">
          <div class="play-btn">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div class="portfolio-meta">
            <span class="category">${item.category}</span>
            <h3>${item.title}</h3>
            <span class="year">${item.year}</span>
          </div>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.portfolio-item').forEach((item) => {
      item.addEventListener('click', () => openVideo(item.dataset.id));
      if (cursor) {
        item.addEventListener('mouseenter', () => {
          cursor.classList.add('hover');
          follower.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
          follower.classList.remove('hover');
        });
      }
    });
  }

  renderPortfolio();

  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      // small scale feedback
      btn.style.transform = 'scale(0.94)';
      setTimeout(() => { btn.style.transform = ''; }, 180);
      renderPortfolio(btn.dataset.filter);
    });
  });

  // Video modal
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  const modalClose = document.getElementById('modal-close');

  function openVideo(id) {
    if (!modal || !iframe) return;
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    if (!modal || !iframe) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeVideo);
  if (modal) {
    const backdrop = modal.querySelector('.modal-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeVideo);
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeVideo();
  });

  // Form (Netlify ready)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      if (!window.location.hostname.includes('netlify')) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (!btn) return;
        const original = btn.textContent;
        btn.textContent = '¡Enviado!';
        btn.disabled = true;
        btn.style.background = '#22c55e';
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          btn.style.background = '';
          form.reset();
        }, 2200);
      }
    });
  }
})();
