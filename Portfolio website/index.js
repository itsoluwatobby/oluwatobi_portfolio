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
const hourEl = document.getElementById("hour")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const hourTextEl = document.querySelector(".hours")
const minuteTextEl = document.querySelector(".minute")
const secondTextEl = document.querySelector(".second")
const clockEl = document.querySelector(".clock")
const ampmEl = document.getElementById("ampm")


let date = new Date();
footerEl.innerText = date.getFullYear();

educationEl.addEventListener('click', () => {
   educationEl.classList.toggle('active')
   contactEl.classList.remove('active')
   clockEl.classList.toggle('active')
})
contactEl.addEventListener('click', () => {
   contactEl.classList.toggle('active')
   educationEl.classList.remove('active')
   clockEl.classList.toggle('active')
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

function updateClock() {
   let date = new Date()

   let h = date.getHours()
   let minutes = date.getMinutes()
   let seconds = date.getSeconds()
   let amOrpm = h > 12 ? 'PM' : 'AM'

   h = h > 12 ? (h % 12) : h; 

   hourTextEl.innerText = h == 1 ? hourTextEl.innerText = 'HOUR' : hourTextEl.innerText = 'HOURS';
   minuteTextEl.innerText = minutes == 1 ? minuteTextEl.innerText = 'MINUTE' : minuteTextEl.innerText = 'MINUTES';
   secondTextEl.innerText = seconds == 1 ? secondTextEl.innerText = 'SECOND' : secondTextEl.innerText = 'SECONDS';

   hourEl.innerText = format(h);
   minutesEl.innerText = format(minutes)
   secondsEl.innerText = format(seconds)
   ampmEl.innerText = amOrpm

   function format(x) {
      let y = x < 10 ? '0'+x : x
      return y
   }
}

setInterval(updateClock, 1000)

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
