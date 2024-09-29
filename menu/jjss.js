function copyContent (index) {
  var content = document.getElementById('elementToCopy' + index).outerHTML
  localStorage.setItem('copiedContent' + index, content)
  alert('Item added successfully! You can now go to the Cart page.')
}
// let logo = document.querySelectorAll('ul li a')
// logo.forEach(function (e) {
//   e.onclick = function () {
//     logo.forEach(element => {
//       element.classList.remove('active')
//     })
//     this.classList.add('active')
//   }})
