const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
  panels.forEach((ele) => {
    if (ele.classList.contains('active')) {

      return ele.classList.remove('active')
    }
  })
}
panels.forEach((ele) => {
  ele.addEventListener("click", function(e) {
    removeActiveClasses()
    ele.classList.add('active')
  })
})