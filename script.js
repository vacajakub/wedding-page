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
