let slideIndex = 1;


function plusSlides(n) {
    showSlides(slideIndex += n);
  }

const showSlides = (index) => {
    let i;
    let slides = document.getElementsByClassName('slideNumber');
    if (index > slides.length) {slideIndex = 1}
    if (index < 1) {slideIndex = slides.length}

    for (i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[slideIndex-1].style.display = "flex";
    }
 }
showSlides(slideIndex);