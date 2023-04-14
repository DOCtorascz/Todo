export {arrayMap, addTaskHigth, addTaskLow, times}
import { taskHight, taskLow } from "./variables.js"
import { removeDom,  render, removeRecurse } from "./main.js"

let obj = null
const arrayMap = new Map()

function addTaskHigth() {
  const timeTask = new Date()
  let hourTime = timeTask.getHours()
  let minutTime = timeTask.getMinutes()
  let secondTime = timeTask. getSeconds()
  const time = `${hourTime}:${minutTime}:${secondTime}`
  obj = {name: taskHight.TASKNAME.value, status: 'in progress', priority: 'Hight', time: times(),}
  arrayMap.set(obj, taskHight.TASKNAME.value)
  removeRecurse(taskHight.UP.childNodes.length, taskLow.DOWN.childNodes.length)
  render()
}

function addTaskLow() {
  obj = {name: taskLow.TASKNAME.value, status: 'in progress', priority: 'Low', time: times(),}
  arrayMap.set(obj, taskLow.TASKNAME.value)
  removeRecurse(taskHight.UP.childNodes.length, taskLow.DOWN.childNodes.length)
  render()
}

function times() {
  const timeTask = new Date()
  let hourTime = timeTask.getHours()
  let minutTime = timeTask.getMinutes()
  let secondTime = timeTask. getSeconds()
  const time = `${hourTime}:${minutTime}:${secondTime}`
  return time
}