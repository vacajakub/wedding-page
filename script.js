// script.js

// LIGHTBOX FOR GALLERY
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
const img = document.createElement('img');
lightbox.appendChild(img);
document.body.appendChild(lightbox);

// Open lightbox when clicking gallery image
document.querySelectorAll('.gallery-item img').forEach(image => {
  image.addEventListener('click', () => {
    img.src = image.dataset.src || image.src;
    lightbox.classList.add('visible');
  });
});

// Close lightbox on click anywhere
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('visible');
});
