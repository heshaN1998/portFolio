const cur = document.getElementById('cur');
const ring = document.getElementById('ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = (mx - 4.5) + 'px';
  cur.style.top  = (my - 4.5) + 'px';
});

(function animateRing() {
  rx += (mx - rx - 17) * 0.13;
  ry += (my - ry - 17) * 0.13;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
})();


const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(function(section) {
  navObserver.observe(section);
});

const interactiveSelectors = 'a, button, .chip, .proj-card, .exp-card, .stat, .c-item, .edu-block';

document.querySelectorAll(interactiveSelectors).forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    cur.style.transform  = 'scale(2.5)';
    ring.style.transform = 'scale(1.4)';
    ring.style.borderColor = 'var(--accent2)';
  });
  el.addEventListener('mouseleave', function() {
    cur.style.transform  = 'scale(1)';
    ring.style.transform = 'scale(1)';
    ring.style.borderColor = 'var(--accent)';
  });
});

