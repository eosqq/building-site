import { animate } from "./helpers"

const modal = () => {

const callbackBtn = document.querySelectorAll('.callback-btn')
console.log(callbackBtn);
const modalCallback = document.querySelector('.modal-callback')
const modalOverlay = document.querySelector('.modal-overlay ')

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
}

export default modal
