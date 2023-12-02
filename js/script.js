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
        event.preventDefault(); 
    }

    if (login.value.length > 30) {
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина больше 30 символов';
        event.preventDefault(); 
    }

    else {
        login.style.border = '';
        error.style.display = 'none';
    }
})

//проверка поля воода после нажатия кнопки
function loginСheck() {
    if (login.value === '') {
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Поле не должно быть пустым';
        event.preventDefault(); 
    }

    if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Недопустимый символ';
        event.preventDefault(); 
    }

    if (login.value.length < 6) {
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина меньше 6 символов';
        event.preventDefault(); 
    }

    if (login.value.length > 30) {
        login.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина больше 30 символов';
        event.preventDefault(); 
    }
}

//проверка поля ввода пароля в реальном времени
password.addEventListener('input', function() {
    if (password.value === '') {
        password.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Поле не должно быть пустым';
        event.preventDefault(); 
    }

    if (password.value.length > 30) {
        password.style.border = '2px solid red';
        error.style.display = 'block';
        error.textContent = 'Длина больше 30 символов';
        event.preventDefault(); 
    }

    else {
        password.style.border = '';
        error.style.display = 'none';
        login.value.trim(); // удаление лишних пробелов спереди и сзади
    }
})

//проверка поля ввода пароля после нажития кнопки
function loginPassword() {
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

    else {
        login.value.trim(); // удаление лишних пробелов спереди и сзади
    }
}

buttonLogin.onclick = function() {
    loginСheck();
    loginPassword();

}

//сделать больше подсказок
//Как минимум одна заглавная и одна строчная буква.
//Допускается наличие следующих символов: ~ ! ? @ # $ % ^ & * _ - + ( ) [ ] { } > < / \ | " ' . , :
//пароль не должен быть равен логину
//Пароль должен содержать не менее 8 символов. 
//писать что пробелы не должны быть в начале
//добавить капчу после 5 неправильных введений
//сделать отправку потом через пост
//сдлеать второе поля для дублирования пароля 
//хеширование пароля с помощью md5, SHA-1/SHA-256
