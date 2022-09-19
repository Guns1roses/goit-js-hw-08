// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.


import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formInput = {
    "email": '',
    "message": '',
};

currentFormData();

function onFormSubmit(evt) {
    const formInputCurrent = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(formInputCurrent);
    evt.preventDefault();
  
    evt.currentTarget.reset();
 
    localStorage.removeItem(STORAGE_KEY);
    formInput = {};

}

function onFormInput(evt) {
  formInput[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
}

function currentFormData() {
    const formInputCurrent = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    
    if (formInputCurrent) {
        if (formInputCurrent.hasOwnProperty('email')) {
            email.value = formInputCurrent.email;
        }
        if ('message' in formInputCurrent) {
            message.value = formInputCurrent.message;
        }
    }
}
