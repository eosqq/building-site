import slider from './modules/slider'
import modal from './modules/modal'
import carousel from './modules/carousel'
import accordion from './modules/accordion'
import arrowUp from './modules/arrowUp'
import validation from './modules/validation'
import sendForm from './modules/sendForm'

slider ()
modal ()
carousel ()
accordion ()
arrowUp ()
validation ()
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
},

)
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})