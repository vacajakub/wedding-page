// script.js

// LIGHTBOX GALLERY WITH NAVIGATION

const images = Array.from(document.querySelectorAll('.gallery-item img'));
let currentIndex = 0;

// Create lightbox
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';

const lightboxImg = document.createElement('img');

const prevBtn = document.createElement('div');
prevBtn.className = 'lightbox-button lightbox-prev';
prevBtn.innerHTML = '‹';

const nextBtn = document.createElement('div');
nextBtn.className = 'lightbox-button lightbox-next';
nextBtn.innerHTML = '›';

const closeBtn = document.createElement('div');
closeBtn.className = 'lightbox-close';
closeBtn.innerHTML = '✕';

lightbox.appendChild(prevBtn);
lightbox.appendChild(lightboxImg);
lightbox.appendChild(nextBtn);
lightbox.appendChild(closeBtn);
document.body.appendChild(lightbox);

// Open lightbox
function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex].dataset.src || images[currentIndex].src;
  lightbox.classList.add('visible');
}

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove('visible');
}

// Navigate
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].dataset.src || images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].dataset.src || images[currentIndex].src;
}

// Click handlers
images.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);
closeBtn.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('visible')) return;

  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'Escape') closeLightbox();
});



// COUNTDOWN

const targetDate = new Date("2026-06-20T11:30:00+02:00"); // CET/CEST

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "Hotovo!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);