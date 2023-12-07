const errorLogin = document.querySelector('.error_login');
const errorPassword = document.querySelector('.error_password');
const errorPasswordRep = document.querySelector('.error_passwordRep');

const login = document.querySelector('#login');
const password = document.querySelector('#password');
const passwordRepeat = document.querySelector('#password_repeat');
const buttonLogin = document.querySelector('.button_login');

function errorPattern(entryField, errorInput, errorText) {
    entryField.style.border = '2px solid red';
    errorInput.style.display = 'block';
    errorInput.textContent = errorText;
}

//Проверка ввода логина
//проверка поля ввода логина в реальном времени
login.addEventListener('input', function() {
    if (login.value !== login.value.replace(/[^а-яА-Яa-zA-Z0-9-_]/g, '')){ // проверка что в логине нет недопустимых символов
        errorPattern(login, errorLogin,`Недопустимый символ `);
        console.log(`Недопустимый символ логина`);
    }
    else if (login.value.length > 30) {
        errorPattern(login, errorLogin,'Длина больше 30 символов');
        console.log(`Длина больше 30 символов логина`);
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
        console.log(`Поле логина не должно быть пустым`);
    }
    else if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(login, errorLogin, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ логина`);
    }
    else if (login.value.length < 6) {
        errorPattern(login, errorLogin,'Длина меньше 6 символов');
        event.preventDefault(); 
        console.log(`Длина меньше 6 символов логина`);
    }

    else if (login.value.length > 30) {
        errorPattern(login, errorLogin, 'Длина больше 30 символов');
        event.preventDefault(); 
        console.log(`Длина больше 30 символов логина`);
    }
}

// //Проверка ввода пароля
// //проверка поля ввода пароля в реальном времени
password.addEventListener('input', function() {
    if (password.value.length > 30) {
        errorPattern(password, errorPassword, 'Длина больше 30 символов');
        console.log(`Длина больше 30 символов пароля`);
    }
    else if (password.value !== password.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(password, errorPassword, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ пароля`);
    }
    else {
        password.style.border = '';
        errorPassword.style.display = 'none';
    }
})

// // //проверка поля ввода пароля после нажатия кнопки
function passwordСheck() {
    if (password.value === '') {
        errorPattern(password, errorPassword, 'Поле не должно быть пустым');
        event.preventDefault(); 
        console.log(`Пароль не должен быть пустым`);
    }
    else if (password.value.length < 6) {
        errorPattern(password, errorPassword, 'Длина меньше 6 символов');
        event.preventDefault(); 
        console.log(`Длина пароля меньше 6 символов`);
    }
    else if (password.value.length > 30) {
        errorPattern(password, errorPassword, 'Длина больше 30 символов');
        event.preventDefault();
        console.log(`Длина пароля больше 30 символов`); 
    }
    else if (password.value === password.value.toLowerCase()) {
        errorPattern(password, errorPassword, 'Пароль должен содержать минимум одну заглавную букву');
        event.preventDefault(); 
        console.log(`Пароль должен содержать минимум одну заглавную букву`);
    }
    else if (password.value === password.value.toUpperCase()) {
        errorPattern(password, errorPassword, 'Пароль должен содержать минимум одну строчную букву');
        event.preventDefault(); 
        console.log(`Пароль должен содержать минимум одну строчную букву`);
    }
    else if (password.value !== password.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(password, errorPassword, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ пароля`);
    }
    if(password.value === password.value.trim().replace(/[^а-яА-Яa-zA-Z]/g, "")) {
        errorPattern(password, errorPassword, 'Необходима как минимум 1 цифра');
        event.preventDefault(); 
        console.log(`Необходима как минимум 1 цифра в пароле`);
    }
}

// // // Повтор ввода пароля
// // // проверка поля повтора пароля в реальном времени
passwordRepeat.addEventListener('input', function() {
    if (passwordRepeat.value.length > 30) {
        errorPattern(passwordRepeat, errorPasswordRep, 'Длина больше 30 символов');
        console.log(`Длина больше 30 символов повтора пароля`);
    }
    else if (passwordRepeat.value !== passwordRepeat.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(passwordRepeat, errorPasswordRep, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ повтора пароля`);
    }

    else {
        passwordRepeat.style.border = '';
        errorPasswordRep.style.display = 'none';
    }
})

// // //проверка поля повтора пароля после нажатия кнопки
function passwordСheckRepeat() {
    if (passwordRepeat.value === '') {
        errorPattern(passwordRepeat, errorPasswordRep, 'Поле не должно быть пустым');
        event.preventDefault(); 
        console.log(`Поле не должно быть пустым повтора пароля`);
    }
    else if (passwordRepeat.value.length < 6) {
        errorPattern(passwordRepeat, errorPasswordRep, 'Длина меньше 6 символов');
        event.preventDefault(); 
        console.log(`Длина меньше 6 символов повтора пароля`);
    }
    else if (passwordRepeat.value.length > 30) {
        errorPattern(passwordRepeat, errorPasswordRep, 'Длина больше 30 символов');
        event.preventDefault(); 
        console.log(`Длина больше 30 символов повтора пароля`);
    }
    else if (passwordRepeat.value !== passwordRepeat.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(passwordRepeat, errorPasswordRep, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ повтора пароля`);
    }
    if(passwordRepeat.value === passwordRepeat.value.trim().replace(/[^а-яА-Яa-zA-Z]/g, "")) { //проверка на отсутствие цифр в пароле
        errorPattern(passwordRepeat, errorPasswordRep, 'Необходима как минимум 1 цифра');
        event.preventDefault(); 
        console.log(`Необходима как минимум 1 цифра в пароле`);
    }
}

// // // функция сравнения пароля и повтора пароля
function comparePasswords() {
    if (password.value !== passwordRepeat.value) {
        errorPattern(passwordRepeat, errorPasswordRep,'Пароли не совпадают');
        event.preventDefault(); 
        console.log(`Пароли не совпадают`);
    }
}

// // //проверка несовпадения пароля и логина
// // //функция проверки не совпадения пароля и логина в режиме реального времени
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

// // // функция проверки не совпадения пароля и логина после нажатия на кнопку
function comparisonLoginPassword (){
    if (login.value === password.value) {
        errorPattern(password, errorPassword, 'Логин и пароль не должны совпадать');
        event.preventDefault(); 
        console.log(`Логин и пароль не должны совпадать`);
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

//проверка всех полей ввода после нажатия на кнопку
buttonLogin.onclick = function() {
    loginСheck();
    passwordСheck();
    passwordСheckRepeat();
    comparePasswords();
    comparisonLoginPassword ();
}


//сделать функцию показа пароля или его скрытие
//добавить показ ошибок в виде всплывающих сообщений сбоку с плавным исчезновением через некоторе время, иначе показывает только последнюю ошибку
//хеширование пароля с помощью md5, SHA-1/SHA-256
//сделать отправку потом через пост
//добавить какой именно символ недопустим в логине и пароле

