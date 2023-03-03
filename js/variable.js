export {taskVariabl, variables}

function taskVariabl() {
  let peremen = {
    TODODEL: document.createElement('button'),
    TODOIMG: document.createElement('img'),
    NEWTASK:  document.createElement('li'),
    NEWTASKINNER:  document.createElement('label'),
    NEWTASKRADIO:  document.createElement('input'),
    NEWTASKTEXT:  document.createElement('span'),
  }
  return peremen
}

const variables = {
  TODOINPUT: document.querySelector('.ToDo__add-text1'),
  TODOINPUT2: document.querySelector('.ToDo__add-text2'),
  TODOADD: document.querySelector('.ToDo__add1'),
  TODOADD2: document.querySelector('.ToDo__add2'),
  LISTUP: document.querySelector('.listUp'),
  LISTDOWN: document.querySelector('.listDown'),
  FORM: document.querySelector('.ToDo__form'),
}