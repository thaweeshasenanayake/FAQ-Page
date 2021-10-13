const expand = document.querySelectorAll("#expand");

expand.forEach(e => {
    e.addEventListener("click", () => {
        const faqContent = e.parentNode.parentNode.childNodes[3];
        faqContent.classList.toggle("show");

        if (e.classList.contains("fa-plus-square")) {
            e.classList.replace("fa-plus-square", "fa-minus-square");

        } else if (e.classList.contains("fa-minus-square")) {
            e.classList.replace("fa-minus-square", "fa-plus-square");
        }


    })

})