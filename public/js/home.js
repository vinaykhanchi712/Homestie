document.addEventListener("DOMContentLoaded", () => {
  const hamBtn = document.querySelector("#ham-btn");
  const navbar = document.getElementsByTagName("nav")

  hamBtn.addEventListener("click", () => {
      navbar[0].classList.toggle("navbar-alter")
  })
})