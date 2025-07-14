const cake = document.getElementById('cake');
const celebration = document.getElementById('celebration');
const messageCard = document.getElementById('final-card'); // updated to match image card
document.getElementById('next-btn').style.opacity = 1;
// On click: blow out candles, confetti, then fade cake and show message image
cake.addEventListener('click', () => {
  cake.src = 'cake-unlit.png';       // swap to cake-without-flames image
  generateConfetti();

  setTimeout(() => {
  cake.style.opacity = 0;
  messageCard.style.display = 'block';

  // Delay the button reveal by 1s after the card
  setTimeout(() => {
    document.getElementById('next-btn').style.opacity = 1;
  }, 1000);

}, 2500);
});

// Create confetti & wrapper elements
function generateConfetti() {
  const colors = ['#f94144','#f3722c','#f9c74f','#90be6d','#577590'];

  // Confetti squares
  for (let i = 0; i < 100; i++) {
    const c = document.createElement('div');
    c.classList.add('confetti');
    styleParticle(c, 6, colors);
    celebration.appendChild(c);
  }

  // Wrapper curls (small circles)
  for (let i = 0; i < 50; i++) {
    const w = document.createElement('div');
    w.classList.add('wrapper');
    styleParticle(w, 4 + Math.random() * 6, colors);
    celebration.appendChild(w);
  }
}

// Common styling for each particle
function styleParticle(el, size, colors) {
  const delay = Math.random() * 1 + 's';
  el.style.left = Math.random() * 100 + '%';
  el.style.width = size + 'px';
  el.style.height = size + 'px';
  el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  el.style.animationDelay = delay;
}
// === STARS ===
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = star.style.height = Math.random() * 2 + 1 + 'px';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDuration = (1 + Math.random() * 2) + 's';
  document.body.appendChild(star);
}
// === BALLOONS ===
const balloonColors = ['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#ffb703'];
for (let i = 0; i < 10; i++) {
  const b = document.createElement('div');
  b.classList.add('balloon');
  b.style.left = Math.random() * 100 + '%';
  b.style.background = balloonColors[i % balloonColors.length];
  b.style.animationDuration = (8 + Math.random() * 4) + 's';
  document.body.appendChild(b);
}

// === POP SOUND (optional) ===
const popSound = new Audio('pop.mp3'); // Make sure this file exists

// Click-to-pop balloons
setTimeout(() => {
  document.querySelectorAll('.balloon').forEach(balloon => {
    balloon.addEventListener('click', () => {
      try { popSound.play(); } catch (e) {}
      balloon.style.transition = 'transform 0.3s, opacity 0.3s';
      balloon.style.transform = 'scale(1.5)';
      balloon.style.opacity = '0';
      setTimeout(() => balloon.remove(), 300);
    });
  });
}, 100); // slight delay to ensure they're in the DOM
