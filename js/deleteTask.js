export {deleteTask}
import { taskHight, taskLow } from "./variables.js"
import { arrayMap } from "./addTask.js"
import { removeDom, render, removeRecurse } from "./main.js"

function deleteTask() {
  taskHight.UP.addEventListener('click', (event) => {
    if (event.target.classList.contains('todoImages')) {
      let textList = event.target.parentNode.parentNode.childNodes[0].textContent
      
      for (let char of arrayMap) {
        if (char[1] === textList) {
          arrayMap.delete(char[0])
          break
        }
      }
      removeRecurse(taskHight.UP.childNodes.length, taskLow.DOWN.childNodes.length)
      render()
    }
  })
  taskLow.DOWN.addEventListener('click', (event) => {
    if (event.target.classList.contains('todoImages')) {
      let textList = event.target.parentNode.parentNode.childNodes[0].textContent
      
      for (let char of arrayMap) {
        if (char[1] === textList) {
          arrayMap.delete(char[0])
          break
        }
      }
      removeRecurse(taskHight.UP.childNodes.length, taskLow.DOWN.childNodes.length)
      render()
    }
  })
}