let ARR = new Array('images/R1.jpeg', 'images/R6.jpeg',
  'images/restaurant3.jpg', 'images/R18.jpeg',
  'images/R3.jpeg', 'images/R17.jpeg', 'images/R5.jpg',
  'images/R4.jpeg', 'images/restaurant3.jpg', 'images/R7.jpg',
  'images/R9.jpeg', 'images/R10.jpeg', 'images/R15.webp',
  'images/R8.webp', 'images/R12.jpeg', 'images/R14.jpg',
  'images/R1.jpeg', 'images/restaurant2.jpg', 'images/R1.jpeg', 'images/R7.jpg', 'images/R1.jpeg')
let i = 0
document.addEventListener('DOMContentLoaded', () => {
  // كود الجافا سكريبت هنا

  let silder = document.querySelector('.slider img')
  setInterval(() => {
    if (i === 21) {i = 0}
    silder.src = ARR[i]
    i++
  }, 1000)
})
// let logo = document.querySelectorAll('ul li a')
// logo.forEach(function (e) {
//   e.onclick = function () {
//     logo.forEach(element => {
//       element.classList.remove('active')
//     })
//     this.classList.add('active')
//   }})
