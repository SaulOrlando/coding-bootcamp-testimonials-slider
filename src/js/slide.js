"use strict"

const section_tanya = document.querySelector("#section-tanya")
const section_john = document.querySelector("#section-john")
const arrows = document.querySelectorAll(".arrow")

const toggle_section = () => {
  section_tanya.classList.toggle("active")
  if (section_tanya.classList.contains("active")) {
    section_john.style.position = "relative"
    section_john.style.opacity = "100%"
    section_john.style.height = "100%"
    section_john.style.zIndex = "10"

    section_tanya.style.opacity = "0"
    section_tanya.style.height = "0"
  } else {
    section_john.style.position = "absolute"
    section_john.style.height = "0"
    section_john.style.zIndex = "-10"
    section_john.style.opacity = "0"

    section_tanya.style.opacity = "100%"
    section_tanya.style.height = "100%"
  }
}

arrows.forEach(arrow => {
  arrow.addEventListener("click", toggle_section)
})

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft"){
    toggle_section()
  }
})
