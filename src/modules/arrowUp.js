const arrowUp = () => {

    const arrow = document.querySelector(".up")
    const elementsMenu = document.querySelectorAll(".top-menu ul>li>a")

    arrow.style.display = "none"

    const showArrow = () => {

        window.addEventListener('scroll', (e) => {
            e.target.value = scrollY
            if (e.target.value > 500) {
                arrow.style.display = "block"
            } else {
                arrow.style.display = "none"
            }
        })
    }

    const scrollToHeader = () => {
        arrow.setAttribute("href", ".main-wrapper")
        arrow.addEventListener('click', (e) => {
            e.preventDefault()
            const href = arrow.getAttribute("href")
            const section = document.querySelector(href)
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }
        })
    }

    showArrow()
    scrollToHeader()
}

export default arrowUp