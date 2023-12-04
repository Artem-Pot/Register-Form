const error = document.querySelector('.error');
const login = document.querySelector('#login');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#password_2');
const buttonLogin = document.querySelector('.button_login');

function errorPattern(entryField, errorText) {
    entryField.style.border = '2px solid red';
    error.style.display = 'block';
    error.textContent = errorText;
}

//Проверка ввода логина
//проверка поля ввода логина в реальном времени
login.addEventListener('input', function() {
    if (login.value !== login.value.replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(login, 'Недопустимый символ');
        console.log(`Недопустимый символ логина`);
    }
    else if (login.value.length > 30) {
        errorPattern(login, 'Длина больше 30 символов');
        console.log(`Длина больше 30 символов логина`);
    }
    else {
        login.style.border = '';
        error.style.display = 'none';
    }
})

//проверка поля логина после нажатия на кнопку
function loginСheck() {
    if (login.value === '') {
        errorPattern(login, 'Поле не должно быть пустым');
        event.preventDefault(); 
        console.log(`Поле логина не должно быть пустым`);
    }
    else if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(login, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ логина`);
    }
    else if (login.value.length < 6) {
        errorPattern(login, 'Длина меньше 6 символов');
        event.preventDefault(); 
        console.log(`Длина меньше 6 символов логина`);
    }

    else if (login.value.length > 30) {
        errorPattern(login, 'Длина больше 30 символов');
        event.preventDefault(); 
        console.log(`Длина больше 30 символов логина`);
    }
}

//Проверка ввода пароля
//проверка поля ввода пароля в реальном времени
password.addEventListener('input', function() {
    if (password.value.length > 30) {
        errorPattern(password, 'Длина больше 30 символов');
        console.log(`Длина больше 30 символов пароля`);
    }
    else if (password.value !== password.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(password, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ пароля`);
    }
    else {
        password.style.border = '';
        error.style.display = 'none';
    }
})

//проверка поля ввода пароля после нажатия кнопки
function passwordСheck() {
    if (password.value === '') {
        errorPattern(password, 'Поле не должно быть пустым');
        event.preventDefault(); 
        console.log(`Пароль не должен быть пустым`);
    }
    else if (password.value.length < 6) {
        errorPattern(password, 'Длина меньше 6 символов');
        event.preventDefault(); 
        console.log(`Длина пароля меньше 6 символов`);
    }
    else if (password.value.length > 30) {
        errorPattern(password, 'Длина больше 30 символов');
        event.preventDefault();
        console.log(`Длина пароля больше 30 символов`); 
    }
    else if (password.value === password.value.toLowerCase()) {
        errorPattern(password, 'Пароль должен содержать минимум одну заглавную букву');
        event.preventDefault(); 
        console.log(`Пароль должен содержать минимум одну заглавную букву`);
    }
    else if (password.value === password.value.toUpperCase()) {
        errorPattern(password, 'Пароль должен содержать минимум одну строчную букву');
        event.preventDefault(); 
        console.log(`Пароль должен содержать минимум одну строчную букву`);
    }
    else if (password.value !== password.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(password, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ пароля`);
    }
}

// Повтор ввода пароля
// проверка поля повтора пароля в реальном времени
passwordRepeat.addEventListener('input', function() {
    if (passwordRepeat.value.length > 30) {
        errorPattern(passwordRepeat, 'Длина больше 30 символов');
        console.log(`Длина больше 30 символов повтора пароля`);
    }
    else if (passwordRepeat.value !== passwordRepeat.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(passwordRepeat, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ повтора пароля`);
    }

    else {
        passwordRepeat.style.border = '';
        error.style.display = 'none';
    }
})

//проверка поля повтора пароля после нажатия кнопки
function passwordСheckRepeat() {
    if (passwordRepeat.value === '') {
        errorPattern(passwordRepeat, 'Поле не должно быть пустым');
        event.preventDefault(); 
        console.log(`Поле не должно быть пустым повтора пароля`);
    }
    else if (passwordRepeat.value.length < 6) {
        errorPattern(passwordRepeat, 'Длина меньше 6 символов');
        event.preventDefault(); 
        console.log(`Длина меньше 6 символов повтора пароля`);
    }
    else if (passwordRepeat.value.length > 30) {
        errorPattern(passwordRepeat, 'Длина больше 30 символов');
        event.preventDefault(); 
        console.log(`Длина больше 30 символов повтора пароля`);
    }
    else if (passwordRepeat.value !== passwordRepeat.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(passwordRepeat, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ повтора пароля`);
    }
}

// функция сравнения пароля и повтора пароля
function comparePasswords() {
    if (password.value !== passwordRepeat.value) {
        errorPattern(passwordRepeat, 'Пароли не совпадают');
        event.preventDefault(); 
        console.log(`Пароли не совпадают`);
    }
}

//проверка несовпадения пароля и логина
//функция проверки не совпадения пароля и логина в режиме реального времени
passwordRepeat.addEventListener('input', function() {
    if (login.value === password.value) {
        errorPattern(password, 'Логин и пароль не должны совпадать');
        console.log(`Логин и пароль не должны совпадать`);
    }
        else {
        password.style.border = '';
        error.style.display = 'none';
    }
})

// функция проверки не совпадения пароля и логина после нажатия на кнопку
function comparisonLoginPassword (){
    if (login.value === password.value) {
        errorPattern(password, 'Логин и пароль не должны совпадать');
        event.preventDefault(); 
        console.log(`Логин и пароль не должны совпадать`);
    }
}

//проверка всех полей ввода после нажатия на кнопку
buttonLogin.onclick = function() {
    loginСheck();
    passwordСheck();
    passwordСheckRepeat();
    comparePasswords();
    comparisonLoginPassword ();
}

//Как минимум одна цифра для пароля
//добавить какой именно символ недопустим в логине и пароле
//сделать функцию показа пароля или его скрытие
//добавить показ ошибок в виде всплывающих сообщений сбоку с плавным исчезновением через некоторе время, иначе показывает только последнюю ошибку
//хеширование пароля с помощью md5, SHA-1/SHA-256
//сделать отправку потом через пост

