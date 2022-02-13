const accordion = () => {

const accordion = document.querySelector('.accordeon')
const elements = accordion.querySelectorAll('.element')
const elementsContent = accordion.querySelectorAll('.element-content')
const accordeonTitles = accordion.querySelectorAll('.title')

    const removeClassActive = () => {
        elements.forEach((element) => {
            element.classList.remove('active')
        })
    }

    const showContentOfActiveElement = () => {
        elementsContent.forEach((content) => {
            content.style.display = 'none'
            if (content.closest('.active')){
                content.style.display = 'block'
            }
          })
    }
    
    elements.forEach((element) => { 
        element.addEventListener(('click'), () => {  
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        } else {
          removeClassActive()
          element.classList.add('active')
        }
      showContentOfActiveElement()
      })
    })
}

export default accordion