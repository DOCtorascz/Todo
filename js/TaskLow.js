import {variables, taskVariabl} from './variable.js'
export {renderLow, deleteTask}

const task = [ 

];

function addTaskHigh() {
  if (task.length != 0) {
    let result = taskVariabl()
    let num = 0
    task.forEach(item => {
      let namesResult = result.NEWTASKTEXT.innerHTML = item.name
      variables.LISTDOWN.insertAdjacentHTML('beforeend', 
      `<li class="ToDo__inner" id="List${num++}">
        <label class="lb-flex">
          <input type="radio" class="ToDo__check">
          <span class="ToDo__task">${namesResult}</span>
        </label>
        <button class="ToDo__add-del" id="Bt${num++}">
          <img class="todoImages" src="img/Delete.svg" id="Img${num++}">
        </button>
      </li>`)
    })
  } 
}
addTaskHigh()

function deleteTask() {
  window.addEventListener('click', (event) => {
    let idImg = event.target.id
    let idLi = event.target.id
    let idSpliceImg = idImg.slice(0,3)

    if (idSpliceImg === 'Img') {
      let objIdImg = document.querySelector(`#${idLi}`)
      let objIdLi = objIdImg.parentNode.parentNode
      objIdLi.remove()
    }
  })
}
deleteTask()

function newTask(nameTask, statusTask, prioritiTask) {
  const obj = {name: nameTask, status: statusTask, priority: prioritiTask}
  task.push(obj)
  variables.TODOINPUT2.value = ''
}

function renderLow() {
  let result = taskVariabl()
  newTask(variables.TODOINPUT2.value)

  result.NEWTASK.classList.add('ToDo__inner')
  result.NEWTASKINNER.classList.add('lb-flex')
  result.NEWTASKRADIO.setAttribute('type', "radio")
  result.NEWTASKRADIO.classList.add('ToDo__check')
  result.NEWTASKTEXT.classList.add('ToDo__task')
  result.TODOIMG.setAttribute('src', 'img/Delete.svg')
  result.TODODEL.classList.add(`ToDo__add-del`)
  result.NEWTASKTEXT.innerHTML = task[task.length - 1].name
  variables.LISTDOWN.appendChild(result.NEWTASK)
  result.NEWTASK.appendChild(result.NEWTASKINNER)
  result.TODODEL.appendChild(result.TODOIMG)
  result.NEWTASK.appendChild(result.TODODEL)
  result.NEWTASKINNER.appendChild(result.NEWTASKRADIO)
  result.NEWTASKINNER.appendChild(result.NEWTASKTEXT)

  function taskDelete() {
    result.NEWTASK.remove()
    result.NEWTASK.removeEventListener
  } 
  result.TODODEL.addEventListener('click', taskDelete)
}