function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
}

function goToSlide(n) {
    document.getElementById('slide-' + currentSlide).classList.remove('active');
    const activeNav = document.querySelector('.nav-item.active');
    if (activeNav) activeNav.classList.remove('active');
    currentSlide = n;
    document.getElementById('slide-' + currentSlide).classList.add('active');
    const newNav = (typeof CURRENT_PART !== 'undefined')
        ? document.querySelector('.nav-item[data-part="' + CURRENT_PART + '"][data-slide="' + currentSlide + '"]')
        : document.querySelector('.nav-item[data-slide="' + currentSlide + '"]');
    if (newNav) newNav.classList.add('active');
    const pct = ((currentSlide + 1) / totalSlides) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = (currentSlide + 1) + ' / ' + totalSlides;
    document.getElementById('top-title').textContent = slideTitles[currentSlide] || defaultTitle;
    if (window.innerWidth < 900) {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('overlay').classList.remove('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (currentSlide > 0) goToSlide(currentSlide - 1);
    } else if (e.key === 'Escape') {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('overlay').classList.remove('active');
    }
});

// Respuesta de quiz: marca la opción elegida como correcta/incorrecta y bloquea el resto
function ans(el, correct) {
    const opts = el.parentElement.querySelectorAll('.quiz-option');
    opts.forEach(o => o.style.pointerEvents = 'none');
    el.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) {
        opts.forEach(o => { if (o !== el) o.style.opacity = '0.4'; });
    }
}

// Navegación por gesto táctil (swipe izquierda/derecha) en móvil
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 60) {
        if (delta > 0 && currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
        else if (delta < 0 && currentSlide > 0) goToSlide(currentSlide - 1);
    }
});

// ── NAVEGACIÓN ENTRE PARTES (para módulos divididos en varios archivos) ──
// Cada página que use este mecanismo debe definir antes de cargar este script:
//   const CURRENT_PART = 1;                      // número de esta parte
//   const PART_FILES = { 1: "presentacion.html", 2: "presentacion-2.html" };
// Los ítems del sidebar de un módulo dividido llaman a:
//   onclick="navItemClick(2, 5)"   → parte 2, diapositiva local nº5 de esa parte
function navItemClick(part, localSlideIndex) {
    if (typeof CURRENT_PART === 'undefined' || part === CURRENT_PART) {
        goToSlide(localSlideIndex);
    } else {
        const target = (typeof PART_FILES !== 'undefined' && PART_FILES[part]) ? PART_FILES[part] : null;
        if (target) window.location.href = target + '#slide-' + localSlideIndex;
    }
}

// Al cargar una parte, si la URL trae #slide-N (venimos de otra parte), saltar directo a esa diapositiva
window.addEventListener('DOMContentLoaded', () => {
    const match = window.location.hash.match(/^#slide-(\d+)$/);
    if (match) {
        const n = parseInt(match[1], 10);
        if (n >= 0 && n < totalSlides) goToSlide(n);
    }
});
