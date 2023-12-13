const errorLogin = document.querySelector('.error_login');
const errorPassword = document.querySelector('.error_password');
const errorPasswordRep = document.querySelector('.error_passwordRep');
const errorData = document.querySelector('.error_data');

const login = document.querySelector('#login');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#password_repeat');
const buttonLogin = document.querySelector('.button_login');
const data = document.querySelector('#data');

//шаблон вывода ошибки
function errorPattern(entryField, errorInput, errorText) {
    entryField.style.border = '2px solid red';
    errorInput.style.display = 'block';
    errorInput.textContent = errorText;
}

//--------------------------------
//проверка поля ввода логина в реальном времени
login.addEventListener('input', function() {
    if (login.value !== login.value.replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]/g, '')){ 
        errorPattern(login, errorLogin,`Недопустимый символ `);
    }
    else if (login.value.length > 30) {
        errorPattern(login, errorLogin,'Длина больше 30 символов');
    }
    else {
        login.style.border = '';
        errorLogin.style.display = 'none';
    }
})

//проверка поля логина после нажатия на кнопку
function loginСheck() {
    if (login.value === '') {
        errorPattern(login, errorLogin, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]/g, "")){
        errorPattern(login, errorLogin, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (login.value.length < 6) {
        errorPattern(login, errorLogin,'Длина меньше 6 символов');
        event.preventDefault(); 
    }

    else if (login.value.length > 30) {
        errorPattern(login, errorLogin, 'Длина больше 30 символов');
        event.preventDefault(); 
    }
    localStorage.setItem(login, login.value);
}

//----------------------------------------------------------------
//проверка поля ввода пароля в реальном времени
password.addEventListener('input', function() {
    if (password.value.length > 30) {
        errorPattern(password, errorPassword, 'Длина больше 30 символов');
    }
    else if (password.value !== password.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]/g, "")){ 
        errorPattern(password, errorPassword, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else {
        password.style.border = '';
        errorPassword.style.display = 'none';
    }
})

//проверка поля ввода пароля после нажатия кнопки
function passwordСheck() {
    if (password.value === '') {
        errorPattern(password, errorPassword, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (password.value.length < 6) {
        errorPattern(password, errorPassword, 'Длина меньше 6 символов');
        event.preventDefault(); 
    }
    else if (password.value.length > 30) {
        errorPattern(password, errorPassword, 'Длина больше 30 символов');
        event.preventDefault();
    }
    else if (password.value === password.value.toLowerCase()) {
        errorPattern(password, errorPassword, 'Пароль должен содержать минимум одну заглавную букву');
        event.preventDefault(); 
    }
    else if (password.value === password.value.toUpperCase()) {
        errorPattern(password, errorPassword, 'Пароль должен содержать минимум одну строчную букву');
        event.preventDefault(); 
    }
    else if (password.value !== password.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]/g, "")){
        errorPattern(password, errorPassword, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if(password.value === password.value.trim().replace(/[^а-яА-Яa-zA-Z]/g, "")) {
        errorPattern(password, errorPassword, 'Необходима как минимум 1 цифра');
        event.preventDefault(); 
    }
}

// Повтор ввода пароля
// проверка поля повтора пароля в реальном времени
passwordRepeat.addEventListener('input', function() {
    if (passwordRepeat.value.length > 30) {
        errorPattern(passwordRepeat, errorPasswordRep, 'Длина больше 30 символов');
    }
    else if (passwordRepeat.value !== passwordRepeat.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(passwordRepeat, errorPasswordRep, 'Недопустимый символ');
        event.preventDefault(); 
    }

    else {
        passwordRepeat.style.border = '';
        errorPasswordRep.style.display = 'none';
    }
})

// проверка поля повтора пароля после нажатия кнопки
function passwordRepeatСheck() {
    if (passwordRepeat.value === '') {
        errorPattern(passwordRepeat, errorPasswordRep, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (passwordRepeat.value.length < 6) {
        errorPattern(passwordRepeat, errorPasswordRep, 'Длина меньше 6 символов');
        event.preventDefault(); 
    }
    else if (passwordRepeat.value.length > 30) {
        errorPattern(passwordRepeat, errorPasswordRep, 'Длина больше 30 символов');
        event.preventDefault(); 
    }
    else if (passwordRepeat.value !== passwordRepeat.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(passwordRepeat, errorPasswordRep, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if(passwordRepeat.value === passwordRepeat.value.trim().replace(/[^а-яА-Яa-zA-ZЁё]/g, "")) { //проверка на отсутствие цифр в пароле
        errorPattern(passwordRepeat, errorPasswordRep, 'Необходима как минимум 1 цифра');
        event.preventDefault(); 
    }
}

//функция сравнения пароля и повтора пароля
function comparePasswords() {
    if (password.value !== passwordRepeat.value) {
        errorPattern(passwordRepeat, errorPasswordRep,'Пароли не совпадают');
        event.preventDefault(); 
    }
    localStorage.setItem(password, password.value);
}

//проверка несовпадения пароля и логина
//функция проверки не совпадения пароля и логина в режиме реального времени
passwordRepeat.addEventListener('input', function() {
    if (login.value === password.value) {
        errorPattern(password, errorPassword,'Логин и пароль не должны совпадать');
        console.log(`Логин и пароль не должны совпадать`);
    }
        else {
        errorPassword.style.border = '';
        errorPassword.style.display = 'none';
    }
})

// функция проверки не совпадения пароля и логина после нажатия на кнопку
function comparisonLoginPassword (){
    if (login.value === password.value) {
        errorPattern(password, errorPassword, 'Логин и пароль не должны совпадать');
        event.preventDefault(); 
    }
}

//функция скрытия и показа пароля в поле пароля
function showHidepassword(target){
	if (password.getAttribute('type') === 'password') {
		target.classList.add('view');
		password.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		password.setAttribute('type', 'password');
	}
	return false;
}

function showHidepasswordRep(target){
	if (passwordRepeat.getAttribute('type') === 'password') {
		target.classList.add('view');
		passwordRepeat.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		passwordRepeat.setAttribute('type', 'password');
	}
	return false;
}

//проверка чекбокса
function dataCheck(){
    if(data.checked) {
        return true;
    }
    else {
        event.preventDefault(); 
        errorPattern(data, errorData, 'Необходимо дать своё согласие');
    }
}

//перенаправления на главную страницу для авторизации на сайте.
function redirection(){
    if(login.value && password.value && passwordRepeat.value && data.checked) {
        window.location.href = 'modal.html';
    }
}
//проверка всех полей ввода после нажатия на кнопку
buttonLogin.onclick = function() {
    loginСheck();
    passwordСheck();
    passwordRepeatСheck();
    comparePasswords();
    comparisonLoginPassword();
    dataCheck();
    redirection();
}