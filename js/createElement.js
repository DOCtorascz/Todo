export {list}

function list(ul, text, stat, tru, nowTimes, completeTimes = '-', nowCompleteTimes = '-') {
  const inner = document.createElement('li')
  inner.setAttribute('class', 'ToDo__inner')
  const lbl = document.createElement('label')
  lbl.setAttribute('class', 'lb-flex')
  const input = document.createElement('input')
  input.setAttribute('type', 'checkbox')
  input.setAttribute('class', 'ToDo__check')
  input.setAttribute(stat, tru)
  const span = document.createElement('span')
  span.setAttribute('class', 'ToDo__task')
  span.textContent = text
  const timeInnet = document.createElement('div')
  timeInnet.setAttribute('class', 'inetTime')
  const nowTime = document.createElement('p')
  const completeTime = document.createElement('p')
  const nowCompleteTime = document.createElement('p')
  nowTime.textContent = `Начало задачи: ${nowTimes}`
  completeTime.textContent = `Задача выполнена в: ${completeTimes}`
  nowCompleteTime.textContent = `Повторное начало для нерешительных: ${nowCompleteTimes}`
  const bt = document.createElement('button')
  bt.setAttribute('class', 'ToDo__add-del')
  const images = document.createElement('img')
  images.setAttribute('class', 'todoImages')
  images.setAttribute('src', 'img/Delete.svg')

  ul.appendChild(inner)
  ul.appendChild(nowTime)
  ul.appendChild(completeTime)
  ul.appendChild(nowCompleteTime)
  inner.appendChild(lbl)
  inner.appendChild(bt)
  lbl.appendChild(input)
  lbl.appendChild(span)
  lbl.appendChild(timeInnet)
  bt.appendChild(images)
}