import { animate } from "./helpers"

const modal = () => {

const callbackBtn = document.querySelectorAll('.callback-btn')
const modalCallback = document.querySelector('.modal-callback')
const modalOverlay = document.querySelector('.modal-overlay ')
const closeModal = document.querySelector('.modal-close')

callbackBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
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
