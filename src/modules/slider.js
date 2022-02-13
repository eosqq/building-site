const slider = () => {
const slider = document.querySelector('.top-slider')
const slides = document.querySelectorAll('.item')
const contents = slider.querySelectorAll('.table')

const timeInterval = 3000;
let currentSlide = 0;
let interval;

const prevSlide = (elems, index) => {
    elems[index].style.display = 'none'
}

const nextSlide = (elems, index) => {
    elems[index].style.display = 'block'
}

const autoSlide  = () => {
    prevSlide(slides, currentSlide);
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide);
}

const startSlide = (timer) => {
    interval = setInterval(autoSlide , timer);
}

contents.forEach((content) => {
    content.style.opacity = 1;
    content.style.visibility = 'visible'
})

startSlide(timeInterval)
}

export default slider