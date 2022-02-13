import { animate } from "./helpers"

const modal = () => {

const callbackBtn = document.querySelectorAll('.callback-btn')
const modalCallback = document.querySelector('.modal-callback')
const modalOverlay = document.querySelector('.modal-overlay ')
const closeModal = document.querySelector('.modal-close')
const carouselElems = document.querySelectorAll('.fancyboxModal ')

const animation = () => {
    animate({
        duration: 300,
        timing (timeFraction) {
            return timeFraction
        },
        draw (progress) {
            modalCallback.style.opacity = progress
            modalOverlay.style.opacity = progress
        }
    })
}

callbackBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        animation()
        modalCallback.style.display = 'block'
        modalOverlay.style.display = 'block'
    })
})

carouselElems.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        animation()
        modalCallback.style.display = 'block'
        modalOverlay.style.display = 'block'
    })
})

closeModal.addEventListener('click', (e) => {
    modalCallback.style.display = 'none'
    modalOverlay.style.display = 'none'
})

modalOverlay.addEventListener('click', (e) => {
    modalCallback.style.display = 'none'
    modalOverlay.style.display = 'none'
})
}

export default modal
