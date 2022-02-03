const inputField = document.getElementById('input-field')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')



btn.addEventListener('click', function (evt) {
  let newLi = document.createElement('li')
  newLi.textContent = inputField.value
  console.log(newLi)
  if (newLi.textContent !== "") {
    list.appendChild(newLi)
  inputField.value= ""
  }
  
})


console.log(inputField)