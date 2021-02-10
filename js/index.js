// Your code goes here
let funBus = document.querySelector(".logo-heading")
let introImg = document.querySelector(".intro img")
let letsGo = document.querySelector(".intro h2")
let middleP = document.querySelector(".text-content p")
let content = document.querySelector(".content-destination h2")
let nav = document.querySelectorAll("nav a")

funBus.addEventListener("mouseover", () => {
    funBus.style.fontSize = "3em"
})

document.addEventListener("keydown", (e) => {
    if (e.key === "n"){
        funBus.style.color = "papayaWhip"
    }
})

document.addEventListener("dblclick", () => {
    alert ("Welcome")
})

window.addEventListener("resize", () => {
    document.body.style.backgroundColor = "lavender"
})

window.addEventListener("scroll", () => {
    introImg.style.width = "50em"
})

window.addEventListener("load", () => {
    letsGo.style.color = "blue"
})

window.addEventListener("keypress", () => {
    alert ("lol")
})

document.addEventListener("mousedown", () => {
    middleP.style.color = "green"
})

document.addEventListener("wheel", () => {
    content.style.color = "purple"
})

document.addEventListener("click", (e) => {
    e.stopPropagation();
    alert ("last one")
})

nav.addEventListener("load", (e) => {
    e.preventDefault();
})