const carousel = () => {

    const servicesCarousel = document.querySelector(".services-carousel");
    const servicesElements = document.querySelector(".services-elements");
    const servicesArrows = document.querySelectorAll(".services-arrow");
    const elements = servicesCarousel.querySelectorAll(".col-sm-6");

    let position = 0;
    let slidesToShow =3;
    let widthSlide = Math.floor(100/slidesToShow);

    servicesCarousel.style.display = "flex";
    servicesElements.style.overflow = "hidden";

    elements.forEach((elem) => {
        elem.style.flex = `0 0 ${widthSlide}%`;
    });

    const nextSlide = () => {
        if (position < elements.length - slidesToShow){
            ++position;
            servicesCarousel.style.transform = `translateX(-${position * widthSlide}%)`;
        }
    };

    const prevSlide = () => {
        if (position > 0) {
            --position;
            servicesCarousel.style.transform = `translateX(-${position * widthSlide}%)`;
        }
    };

    const selectSlides = () => {
        servicesArrows.forEach((arrow) => {
            arrow.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target.matches(".arrow-right")) {
                    nextSlide();
                } else if (e.target.matches(".arrow-left")) {
                    prevSlide();
                }

            });
        });
    };

    selectSlides();


}

export default carousel