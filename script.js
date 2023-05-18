const button = document.createElement('button')

button.id = 'dark-mode'
const body = document.getElementsByTagName('body')[0]
body.appendChild(button)

button.innerText = "Dark Mode"

button.addEventListener('click',()=>{
    if(button.innerText==='Dark Mode'){
    darkMode()
} else {
    lightMode()
}
})

function darkMode(){
    body.style.backgroundColor = 'black'
    body.style.color = 'green'
    button.innerText = 'Light Mode'
}

function lightMode(){
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    button.innerText = 'Dark Mode'
}


const form = document.querySelector('#todo-form')
const todoList = document.querySelector('#todo-list')

form.addEventListener('submit', (event)=> {
  event.preventDefault()
  const title = document.querySelector('#title-input',': ').value
  const description = document.querySelector('#description-input').value

  const li = document.createElement('li')
  const titleSpan = document.createElement('span')

  titleSpan.textContent = title
  const descriptionSpan = document.createElement('span')
  descriptionSpan.textContent = description
  li.append(titleSpan,': ', descriptionSpan)
  
  li.addEventListener('click', ()=> li.style.backgroundColor='red')
  // or remove  li.addEventListener('click', ()=> li.remove())

  todoList.append(li)
  document.querySelector('#title-input').value = ''
  document.querySelector('#description-input').value = ''
  })














