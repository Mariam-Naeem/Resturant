// let logo = document.querySelectorAll('ul li a')
// logo.forEach(function (e) {

//   e.onclick = function () {
//     logo.forEach(element => {
//       element.classList.remove('active')
//     })
//     this.classList.add('active')
//   }})

// document.getElementById('bookTable').onclick = function () {
//   document.getElementById('bookTable').style.cssText = 'color:black;'}

let validPhone = /(012|011|010|015)\d{8}/i
let validName = /^[A-Za-z\s]+$/i

document.getElementById('form').onsubmit = function (e) {
  let name = document.getElementById('name').value
  let phone = document.getElementById('tel').value

  // Validate the name
  if (!validName.test(name)) {
    e.preventDefault() // Prevent form submission

    document.getElementById('error-message-name').style.display = 'block' // Show error message
    document.getElementById('name').classList.add('invalid') // Highlight invalid field
  } else {
    document.getElementById('error-message-name').style.display = 'none' // Hide error message
    document.getElementById('name').classList.remove('invalid') // Remove highlight from valid field
  }

  // Validate the phone number
  if (!validPhone.test(phone)) {
    e.preventDefault() // Prevent form submission
    document.getElementById('error-message-phone').style.display = 'block' // Show error message
    document.getElementById('tel').classList.add('invalid') // Highlight invalid field
  } else {
    document.getElementById('error-message-phone').style.display = 'none' // Hide error message
    document.getElementById('tel').classList.remove('invalid') // Remove highlight from valid field
  }
  const peopleSelect = document.getElementById('peoples')
  const selectedPeopleValue = peopleSelect.value

  if (selectedPeopleValue === '') {
    e.preventDefault() // Prevent form submission
    document.getElementById('error-message-people').style.display = 'block'
    peopleSelect.classList.add('invalid')
  } else {
    document.getElementById('error-message-people').style.display = 'none'
    peopleSelect.classList.remove('invalid')
  }

  // Validate the "place" field
  const placeSelect = document.getElementById('place')
  const selectedPlaceValue = placeSelect.value

  if (selectedPlaceValue === '') {
    e.preventDefault()
    document.getElementById('error-message-place').style.display = 'block'

    placeSelect.classList.add('invalid')
  } else {
    document.getElementById('error-message-place').style.display = 'none'
    placeSelect.classList.remove('invalid')
  }
}
