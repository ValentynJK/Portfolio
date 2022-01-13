const galleryImage = document.querySelector('.gallery-image');
const galleryImages = document.querySelectorAll('.gallery-image img');

// Buttons

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

// Counter

let counter = 1;
const size = galleryImages[0].clientWidth; // returns width of the first image
console.log(size)
galleryImage.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners

nextButton.addEventListener('click', ()=> {
  galleryImage.style.transition = "transform 0.4s ease-in-out";
  counter++;
  galleryImage.style.transform = 'translateX(' + (-size * counter) + 'px)';
})