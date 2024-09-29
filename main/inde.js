// let logo = document.querySelectorAll('ul li a')
// logo.forEach(function (e) {
//   e.onclick = function () {
//     logo.forEach(element => {
//       element.classList.remove('active')
//     })
//     this.classList.add('active')
//   }})

  // document.getElementById('bookTable').onclick = function () {
  //   document.getElementById('bookTable').style.cssText = 'color:#fff;'}

window.addEventListener('load', function () {
  const h2Element = document.querySelector('.section1 h2')
  h2Element.style.opacity = '1'
  h2Element.style.transform = 'translateY(0)' /* Move h2 to its original position */
})

window.onscroll = function () {
  if (window.scrollY > 300) {
    timeExperiece()
    timeChef()
  // document.querySelector('header').style.cssText = 'background-color: #40534C; boder-radius: 4px;position: sticky;top: 0;z-index: 200;font-size: 19px;'
  }
  // else if (window.scrollY < 400) {
  //   document.querySelector('header').style.cssText = ' background-color: transparent; border-radius: 4px;position: sticky;top: 0;z-index: 200;font-size: 19px;'
  // }

  let elements = document.querySelectorAll('.AboutAllSection2')
  let scrollPosition = window.scrollY

  if (scrollPosition > 500) {
    elements.forEach(function (element) {
      element.classList.add('show')
    })
  }
}
let count = 0,counter = 0,t,v,experiece = document.querySelector('.experience .experience1'),chefs = document.querySelector('.masterCHef .masterCHef1')
function timeExperiece () {
  t = setInterval(() => {
    if (count == 12) {
      stopINTERVAL()
    }else {count++
      experiece.textContent = count
    }
  }, 400)}

function timeChef () {
  v = setInterval(() => {
    if (counter == 50) {
      stopINTERVALshef()
    }else {counter++
      chefs.textContent = counter
    }
  }, 200)}

function stopINTERVAL () {
  clearInterval(t)
}
function stopINTERVALshef () {
  clearInterval(v)
}
let ARR = new Array('../image/4.jpeg', '../image/3.jpeg', '../image/2.jpeg', '../image/1.jpeg', '../image/5.jpeg', '../image/6.jpeg', '../image/7.jpeg', '../image/8.jpeg', '../image/Cheesy BBQ Chicken Pizza.jpeg', '../image/10.jpeg', '../image/11.jpeg', '../image/12.jpeg', '../image/13.jpeg', '../image/14.jpeg', '../image/Leckeres Rezept für einen Smashed Burger mit Käsesoße.jpeg', '../image/16.png', '../image/17.jpeg', '../image/18.jpeg', '../image/19.jpeg', '../image/Buffalo Burger Egypt.jpeg', '../image/Brie & Bacon Jam Burger.jpeg')
let i = 0

let silder = document.querySelector('.slider img')
setInterval(() => {
  if (i === 21) {i = 0}
  silder.src = ARR[i]
  i++
}, 1000)
let scrollCountainer = document.querySelector('.gallery')

let back = document.getElementById('backbtn')
let next = document.getElementById('nextbtn')
scrollCountainer.addEventListener('wheel', function (evt) {
  evt.preventDefault()

  scrollCountainer.scrollLeft += evt.deltaY
})
next.addEventListener('click', function () {
  scrollCountainer.style.scrollBehavior = 'smooth'

  scrollCountainer.scrollLeft += 900})
back.addEventListener('click', function () {
  scrollCountainer.style.scrollBehavior = 'smooth'

  scrollCountainer.scrollLeft -= 900})
