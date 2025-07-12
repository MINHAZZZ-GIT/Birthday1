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
