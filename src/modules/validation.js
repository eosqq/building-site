const validation = () => {

const forms = document.querySelectorAll('input')

const validate = () => {
    let success = true

    forms.forEach((form) => {
        if (form.name === 'fio') {
            form.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/gi, "")
            })
        }

        if (form.name === 'tel') {
            form.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9\(\)\-\+]/, "")
            })
        } 
    })
}

validate ()

}

export default validation
