const boxes = document.querySelectorAll(".box");


const checkBoxes = function(e) {
    console.log(window.innerHeight / 5 * 4)
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove("show");
        }
    })
}
checkBoxes()
window.addEventListener("scroll", checkBoxes)