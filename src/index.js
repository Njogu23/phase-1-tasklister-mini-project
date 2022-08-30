document.addEventListener("DOMContentLoaded", () => {
   document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
   createToDo(e.target.newTaskDescription.value)
  })

  const createToDo = (todo) => {
    const li = document.createElement('li');
    li.style.color = 'white'
    li.style.fontSize ='20px'
    li.addEventListener('click', () => {
      li.style.textDecoration = 'line-through';
      li.classList.toggle('checked')
    })
    document.getElementById('tasks').appendChild(li);
    li.textContent = `${todo}  `;
    createBtn(li)
    
  }

  const createBtn = (element) => {
    const btn = document.createElement('buttton');
    btn.textContent = 'x';
    btn.style.color = 'white'
    btn.style.background = 'grey'
    btn.style.fontSize = '12px'
    btn.style.cursor = 'pointer'
    element.appendChild(btn)
    btn.addEventListener('click', () => btn.parentNode.remove())

  }
})