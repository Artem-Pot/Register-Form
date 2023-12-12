const error = document.querySelector('.error');
const login = document.querySelector('#login');
const password = document.querySelector('#password');
const checkbox = document.querySelector('#checkbox');
const buttonLogin = document.querySelector('.button_login');

//проверка поля ввода логина в реальном времени
login.addEventListener('input', function() {
    if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Недопустимый символ';
    }

    else if (login.value.length > 30) {
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина больше 30 символов';
    }

    else {
        login.style.border = '';
        error.style.display = 'none';
    }
})

//проверка поля ввода после нажатия кнопки
function loginСheck() {
    if (login.value === '') {
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Поле не должно быть пустым';
        event.preventDefault(); 
    }

    else if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Недопустимый символ';
        event.preventDefault(); 
    }

    else if (login.value.length < 6) {
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина меньше 6 символов';
        event.preventDefault(); 
    }

    else if (login.value.length > 30) {
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина больше 30 символов';
        event.preventDefault(); 
    }
}

//проверка поля ввода пароля в реальном времени
password.addEventListener('input', function() {
    if (password.value.length > 30) {
        password.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина больше 30 символов';
    }

    else {
        password.style.border = '';
        error.style.display = 'none';
    }
})

//проверка поля ввода пароля после нажатия кнопки
function passwordСheck() {
    if (password.value === '') {
        password.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Поле не должно быть пустым';
        event.preventDefault(); 
    }

    if (password.value.length < 6) {
        password.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина меньше 6 символов';
        event.preventDefault(); 
    }

    if (password.value.length > 30) {
        password.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина больше 30 символов';
        event.preventDefault(); 
    }

    password.value.trim(); // удаление лишних пробелов спереди и сзади
}

buttonLogin.onclick = function() {
    loginСheck();
    passwordСheck();
}


//сделать по аналогии как в шагах оформление с ошибками


//добавить функнцию просмотра пароля при вводе
//добавить капчу после 5 неправильных введений
//сделать отправку потом через пост
