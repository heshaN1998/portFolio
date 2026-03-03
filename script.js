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