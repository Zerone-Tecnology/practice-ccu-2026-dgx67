document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav.classList.remove('nav--open');
    burger.setAttribute('aria-expanded', 'false');
  });
});
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  burger.setAttribute('aria-expanded', String(isOpen));
});
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 40);
});