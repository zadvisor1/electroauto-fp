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
    const newNav = document.querySelector('.nav-item[data-slide="' + currentSlide + '"]');
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
