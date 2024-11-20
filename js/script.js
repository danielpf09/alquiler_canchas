const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

function moveCarousel() {
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    counter++;
    if (counter >= images.length) {
        counter = 0; // Regresa al inicio
    }
}

setInterval(moveCarousel, 3000); 