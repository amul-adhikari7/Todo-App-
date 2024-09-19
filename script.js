const todoForm = document.querySelector('.form-todo')
const todoList = document.querySelector('todo-lists')
const todoInput = document.querySelector(".form-todo input[type='text']")
todoForm.addEventListener('submit', e => {
  e.preventDefault()
  const todo = todoInput.value.trim()
  const newLi = document.createElement('li')
  const newLiInnerHtml = `<span class="todo-title">${todo}</span>
          < class="buttons">
            <button class="done">Add</button>
            <button class="remove">Remove</button>`
  newLi.innerHTML = newLiInnerHtml
  newLi.append(newLiInnerHtml)
  todoInput.value = ''
})
todoList.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    const targetedLi = e.target.parentNode.parentNode
    targetedLi.remove()
  }
  if (e.target.classList.contains('done')) {
    const liSpan = e.target.parentNode.previousElementSibling
    liSpan.style.textDecoration = 'line-through'
  }
})
