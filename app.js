const on = document.querySelector(".on-click");
const off = document.querySelector(".off-click");

on.addEventListener("click", function () {
  off.classList.remove("active")
  on.classList.toggle("active")
  document.body.classList.remove("dark")
})

off.addEventListener("click", function () {
  on.classList.remove("active")
  off.classList.toggle("active")
  document.body.classList.add("dark")
})