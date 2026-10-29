const printBtn = document.getElementById('printBtn');
const contactBtn = document.getElementById('contactBtn');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

function printCV() {
  window.print();
}
printBtn.addEventListener('click', printCV);
contactBtn.addEventListener('click', printCV);

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.textContent = '☰';
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
