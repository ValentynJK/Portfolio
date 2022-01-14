const galleryImage = document.querySelector('.gallery-image');
const galleryImages = document.querySelectorAll('.gallery-image img');

// Buttons

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

// Counter

let counter = 1;

window.addEventListener('resize', ()=> {
  let size = galleryImages[0].clientWidth;
  galleryImage.style.transform = 'translateX(' + (-size * counter) + 'px)';
  console.log(size)
})

const size = () => { 
  return galleryImages[0].clientWidth}; // returns width of the first image

galleryImage.style.transform = 'translateX(' + (-size() * counter) + 'px)';

// Button listeners

nextButton.addEventListener('click', ()=> {
  if (counter >= galleryImages.length -1) return;
  galleryImage.style.transition = "transform 0.4s ease-in-out";
  counter++;
  galleryImage.style.transform = 'translateX(' + (-size() * counter) + 'px)';
});

prevButton.addEventListener('click', ()=> {
  if (counter <= 0) return;
  galleryImage.style.transition = "transform 0.4s ease-in-out";
  counter--;
  galleryImage.style.transform = 'translateX(' + (-size() * counter) + 'px)';
});

galleryImage.addEventListener('transitionend', () => {
  if (galleryImages[counter].id === 'lastClone') {
    galleryImage.style.transition = "none";
    counter = galleryImages.length - 2;
    galleryImage.style.transform = 'translateX(' + (-size() * counter) + 'px)';
  }
})

galleryImage.addEventListener('transitionend', () => {
  if (galleryImages[counter].id === 'firstClone') {
    galleryImage.style.transition = "none";
    counter = galleryImages.length - counter;
    galleryImage.style.transform = 'translateX(' + (-size() * counter) + 'px)';
  }
})
