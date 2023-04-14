export {removeDom, render, removeRecurse}
import { taskHight, taskLow } from "./variables.js"
import {arrayMap, addTaskHigth, addTaskLow} from "./addTask.js"
import { list } from "./createElement.js"
import { deleteTask } from "./deleteTask.js"
import { changeStatus } from "./changeStatus.js"

function removeDom() {
  while(taskHight.UP.firstChild) {
    taskHight.UP.removeChild(taskHight.UP.lastChild)
  }
  while(taskLow.DOWN.firstChild) {
    taskLow.DOWN.removeChild(taskLow.DOWN.lastChild)
  }
}

function removeRecurse(step1, step2) {
  console.log(step1)
  if (step1 === 0 && step2 === 0) {
    return
  }

  if (step1 > 0) {
    taskHight.UP.removeChild(taskHight.UP.lastChild)
  } else if (step2 > 0){
    taskLow.DOWN.removeChild(taskLow.DOWN.lastChild)
  }
  
  removeRecurse(taskHight.UP.childNodes.length, taskLow.DOWN.childNodes.length)
}

function render() { 

  for (const char of arrayMap) {
    const priority = char[0].status === 'Done'
    const priorityHight = char[0].priority === 'Hight'
    const priorityLow = char[0].priority === 'Low'
    const timeArr = [char[0].time, char[0].completeStatus, char[0].newStatus]

    if (priorityHight) {
      if (priority) {
        list(taskHight.UP, char[0].name, 'checked', 'true', ...timeArr)
      } else {
        list(taskHight.UP, char[0].name, 'check', 'false', ...timeArr)
        taskHight.TASKNAME.value = ''
      }
    } else if (priorityLow) {
      if (priority) {
        list(taskLow.DOWN, char[0].name, 'checked', 'true', ...timeArr)
      } else {
        list(taskLow.DOWN, char[0].name, 'check', 'false', ...timeArr)
        taskLow.TASKNAME.value = ''
      }
    }
  }
}

taskHight.FORM.addEventListener('click', (event) => {
  event.preventDefault()
})

deleteTask()
changeStatus()
taskHight.ADD.addEventListener('click', addTaskHigth)
taskLow.ADD.addEventListener('click', addTaskLow)