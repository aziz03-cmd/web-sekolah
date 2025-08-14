/* =========================
   FITUR 1: Dark Mode / Light Mode
   ========================= */
const modeToggleBtn = document.getElementById('modeToggleBtn');
modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeToggleBtn.textContent = document.body.classList.contains('dark-mode') 
    ? 'Light Mode' 
    : 'Dark Mode';
});

/* =========================
   FITUR 2: Tombol Kembali ke Atas
   ========================= */
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* =========================
   FITUR 3: Timer / Jam Real-time
   ========================= */
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

/* =========================
   FITUR 4: Tulisan Header Bergerak
   ========================= */
// Sudah diatur di CSS dengan animasi keyframes