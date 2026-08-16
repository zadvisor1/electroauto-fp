/* ═══════════════════════════════════════════════════════
   nav-pres.js · ElectroAuto FP
   Navegación compartida para todas las presentaciones HTML
   Requiere: nav-pres.css
   ═══════════════════════════════════════════════════════

   CÓMO FUNCIONA:
   - Lee el atributo data-bloque y data-titulo del <body>
   - Detecta automáticamente los slides (section.slide o div.slide)
   - Inyecta topbar + bottombar + dots en el DOM
   - Gestiona teclado y swipe táctil

   USO EN CADA presentacion.html:
   Añade justo antes de </body>:

   <link rel="stylesheet" href="../../assets/nav-pres.css">
   <script
     src="../../assets/nav-pres.js"
     data-bloque="01"
     data-titulo="Fundamentos Eléctricos Comunes">
   </script>
*/

(function() {
  'use strict';

  // ── Leer configuración del tag <script> ──
  const scriptEl = document.currentScript ||
    document.querySelector('script[src*="nav-pres.js"]');
  const bloqueNum = scriptEl ? (scriptEl.getAttribute('data-bloque') || '00') : '00';
  const tituloIni = scriptEl ? (scriptEl.getAttribute('data-titulo') || '') : '';

  // ── Detectar slides ──
  // Compatible con section.slide (híbridos) y div.slide (electricidad)
  const slides = Array.from(
    document.querySelectorAll('section.slide, div.slide')
  );
  const total = slides.length;
  if (total === 0) return; // No hay slides, salir

  let current  = 0;
  const visited = new Set([0]);

  // ── Inyectar HTML de topbar ──
  const topbarHTML = `
<div class="ea-topbar">
  <div class="ea-left">
    <span class="ea-badge">BLOQUE ${bloqueNum}</span>
    <span class="ea-slide-title" id="eaTitle">${tituloIni}</span>
  </div>
  <span class="ea-counter">
    <span id="eaCurrent">1</span> / <span id="eaTotal">${total}</span>
  </span>
</div>`;

  // ── Inyectar HTML de bottombar ──
  const bottombarHTML = `
<div class="ea-bottombar">
  <button class="ea-btn" id="eaPrev" disabled>← Anterior</button>
  <div class="ea-dots" id="eaDots"></div>
  <button class="ea-btn primary" id="eaNext">Siguiente →</button>
</div>`;

  // Insertar en el body
  document.body.insertAdjacentHTML('afterbegin', topbarHTML);
  document.body.insertAdjacentHTML('beforeend', bottombarHTML);

  // ── Generar dots ──
  const dotsEl = document.getElementById('eaDots');
  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'ea-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  });

  // ── Botones ──
  document.getElementById('eaPrev').addEventListener('click', () => change(-1));
  document.getElementById('eaNext').addEventListener('click', () => change(1));

  // ── Funciones ──
  function goTo(index) {
    // Quitar active del actual
    slides[current].classList.remove('active', 'prev');
    current = index;
    slides[current].classList.add('active');
    visited.add(current);
    updateUI();
  }

  function change(dir) {
    const next = current + dir;
    if (next < 0 || next >= total) return;
    slides[current].classList.add('prev');
    goTo(next);
  }

  function updateUI() {
    // Contador
    document.getElementById('eaCurrent').textContent = current + 1;

    // Botones
    document.getElementById('eaPrev').disabled = current === 0;
    const btnNext = document.getElementById('eaNext');
    if (current === total - 1) {
      btnNext.textContent = '✓ Fin del bloque';
      btnNext.disabled = true;
    } else {
      btnNext.textContent = 'Siguiente →';
      btnNext.disabled = false;
    }

    // Dots
    document.querySelectorAll('.ea-dot').forEach((d, i) => {
      d.className = 'ea-dot';
      if (i === current)        d.classList.add('active');
      else if (visited.has(i))  d.classList.add('visited');
    });

    // Título en topbar
    const s = slides[current];
    if (s) {
      const h = s.querySelector('h1, h2');
      const titleEl = document.getElementById('eaTitle');
      if (h && titleEl) titleEl.textContent = h.textContent.trim().substring(0, 60);
    }
  }

  // ── Teclado ──
  document.addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); change(1); }
    if (['ArrowLeft',  'ArrowUp'       ].includes(e.key)) { e.preventDefault(); change(-1); }
  });

  // ── Swipe táctil ──
  let touchX = 0;
  document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) change(diff > 0 ? 1 : -1);
  });

  // Inicializar
  updateUI();

})();
