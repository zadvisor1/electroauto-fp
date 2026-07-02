const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
a.addEventListener('click', () => navLinks.classList.remove('open'))
);
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.05 });
revealEls.forEach(el => observer.observe(el));
