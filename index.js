let slideIndex = 1;
let timer = null;
makeSlideshow(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  makeSlideshow((slideIndex += n));
}

function currentSlide(n) {
  clearTimeout(timer);
  makeSlideshow((slideIndex = n));
}

function makeSlideshow(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n == undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer = setTimeout(makeSlideshow, 5000);
}
