const progress = document.querySelector('.progress span');
const sections = [...document.querySelectorAll('.scene')];

requestAnimationFrame(() => document.body.classList.add('loaded'));

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${(scrollY / max) * 100}%`;
}, { passive: true });

document.querySelector('[data-next]').addEventListener('click', () => {
  document.querySelector('#letter').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('[data-restart]').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
}, { threshold: .24 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('#wishButton').addEventListener('click', (event) => {
  event.currentTarget.textContent = 'желание услышано ✦';
  event.currentTarget.disabled = true;
  document.querySelector('#wishAnswer').classList.add('visible');
});
