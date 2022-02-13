import { animate } from "./helpers"

const modal = () => {

const callbackBtn = document.querySelectorAll('.callback-btn')
const modalCallback = document.querySelector('.modal-callback')
const modalOverlay = document.querySelector('.modal-overlay ')
const closeModal = document.querySelector('.modal-close')
const carouselElems = document.querySelectorAll('.fancyboxModal ')
const buttonServices = document.querySelectorAll('.button-services')

const openAnimation = () => {
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
    modalCallback.style.display = 'block'
    modalOverlay.style.display = 'block'
}

callbackBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        openAnimation()
    })
})

carouselElems.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        openAnimation()
    })
})

buttonServices.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        openAnimation()
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
