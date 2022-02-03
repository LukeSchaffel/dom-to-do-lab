const inputField = document.getElementById('input-field')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')
const clrBtn = document.getElementById('clear-button')


btn.addEventListener('click', function (evt) {
  let newLi = document.createElement('li')
  newLi.textContent = inputField.value
  newLi.className = 'list-item'
  // console.log(newLi)
  if (newLi.textContent !== "") {
    list.appendChild(newLi)
  inputField.value= ""
  }
  
})

clrBtn.addEventListener('click', function (evt) {
  const lis = document.querySelector('.list-item')
  console.log(lis)
  list.removeChild(lis)
})

