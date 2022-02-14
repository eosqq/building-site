const sendForm = () => {
    const modal = document.querySelector(".modal-callback");
    const modalOverlay = document.querySelector('.modal-overlay');
    const form = document.querySelector('[name="form-callback"]');
    const formElements = form.querySelectorAll("input");
    const statusBlock = document.createElement("div");
    const loadText = "Идёт отправка...";
    const successText = "Спасибо! Наш менеджер с вами свяжется";
    const errorText = "Ошибка";
    
    const validate = (list) => {
        let success = true;
        list.forEach((input) => {
            
            if (input.name == "tel") {  
                if (input.value.length <= 5 && input.value.length <= 11) {
                    success = false
                }
            }
  
            if (input.name == "fio") {
                if (input.value.length <= 2) {
                    success = false
                }
            }
        })
        return success
    }
   
    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json)
    }

    const cleanData = () => {
        formElements.forEach((input) => {
            if (input.name == "tel" || input.name == "fio") {
                input.value = ""
            }        
        })
    }

    const submitForm = () => {
      const formData = new FormData(form)
      const formBody = {}

      statusBlock.textContent = loadText
      form.append(statusBlock)

      formData.forEach((value, key) => {
        formBody[key] = value
      })

      if (validate(formElements)) {
        sendData(formBody)
          .then(() => {
            statusBlock.textContent = successText
            setTimeout(() => {
                modal.style.display = "none"
                modalOverlay.style.display = "none"
                statusBlock.textContent = ""
            }, 2000)
            cleanData()
          })
          .catch(() => {
            statusBlock.textContent = errorText
          });
      } else {
        alert("Данные не валидны!")
        statusBlock.textContent = ""
      }
    }

    try {
      if (!form) {
        throw new Error("Верните форму на место!")
      }
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm()
      })
    } catch (error) {
    console.log(error.message);
    }
}
export default sendForm;