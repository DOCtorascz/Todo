export {changeStatus}
import { taskHight, taskLow } from "./variables.js"
import { arrayMap, times } from "./addTask.js"
import { render, removeDom, removeRecurse } from "./main.js"

function changeStatus () {
  taskHight.UP.addEventListener('click', (event) => {
    removeRecurse(taskHight.UP.childNodes.length, taskLow.DOWN.childNodes.length)
    if (event.target.classList.contains('ToDo__check')) {
      let textList = event.target.parentNode.parentNode.childNodes[0].textContent

      for (let char of arrayMap) {
        if (char[1] === textList) {
          if (char[0].status === 'in progress') {
            console.log(arrayMap)
            char[0].status = 'Done'
            char[0].completeStatus = times()
            break
          } else {
            console.log(arrayMap)
            char[0].status = 'in progress'
            char[0].newStatus = times()
            break
          }
        }
      }
    }
    render()
  })
  taskLow.DOWN.addEventListener('click', (event) => {
    removeRecurse(taskHight.UP.childNodes.length, taskLow.DOWN.childNodes.length)
    if (event.target.classList.contains('ToDo__check')) {
      let textList = event.target.parentNode.parentNode.childNodes[0].textContent
          
      for (let char of arrayMap) {
        if (char[1] === textList) {
          char[0].status = 'Done'
          char[0].completeStatus = times()
          break
        }
      }
    }
    render()
  })
}