const educationEl = document.querySelector(".edu")
const contactEl = document.querySelector(".contacts")
const footerEl = document.querySelector(".time")
const navbarEl = document.querySelector(".nav-bar")
const bottomContainerEl = document.querySelector(".main-container")
const listContainerEl = document.querySelector(".list-container")
const prevEl = document.querySelector(".prev")
const nextEl = document.querySelector(".next")
const imageEl = document.querySelector(".images-container")
const imgEl = document.querySelectorAll("img")

let date = new Date();
footerEl.innerText = date.getFullYear();

educationEl.addEventListener('click', () => {
   educationEl.classList.toggle('active')
   contactEl.classList.remove('active')
})
contactEl.addEventListener('click', () => {
   contactEl.classList.toggle('active')
   educationEl.classList.remove('active')
})

window.addEventListener("scroll", () => {
   if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight + 70){
      navbarEl.classList.add("change")
      listContainerEl.classList.add("change")
   }
   else{
      navbarEl.classList.remove("change")
      listContainerEl.classList.remove("change")
   }
})

let currentImg = 1
prevEl.addEventListener('click', () => {
   currentImg--
   updateImage()
   clearInterval(clearTime)
})

nextEl.addEventListener('click', () => {
   currentImg++
   updateImage()
   clearInterval(clearTime)
})

const clearTime = setInterval(() => {
   currentImg++
   updateImage();
}, 2000)

function updateImage() {
   if(currentImg > imgEl.length - 2){
      currentImg = 1
   }
   else if(currentImg < 1) currentImg = 4;
   imageEl.style.transform = 'translateX('+ -(currentImg - 1) * 500 +'px)'
}
