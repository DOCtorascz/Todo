export {arrayMap, addTaskHigth, addTaskLow, times}
import { taskHight, taskLow } from "./variables.js"
import { removeDom,  render } from "./main.js"

let obj = null
const arrayMap = new Map()

function addTaskHigth() {
  const timeTask = new Date()
  let hourTime = timeTask.getHours()
  let minutTime = timeTask.getMinutes()
  let secondTime = timeTask. getSeconds()
  const time = `${hourTime}:${minutTime}:${secondTime}`
  removeDom()
  obj = {name: taskHight.TASKNAME.value, status: 'in progress', priority: 'Hight', time: times(),}
  arrayMap.set(obj, taskHight.TASKNAME.value)
  render()
  console.log(arrayMap)
}

function addTaskLow() {
  removeDom()
  obj = {name: taskLow.TASKNAME.value, status: 'in progress', priority: 'Low', time: times(),}
  arrayMap.set(obj, taskLow.TASKNAME.value)
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