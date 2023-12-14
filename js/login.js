const errorLogin = document.querySelector('.error_login');
const errorPassword = document.querySelector('.error_password');

const login = document.querySelector('#login');
const password = document.querySelector('#password');

const buttonLogin = document.querySelector('.button_login');

//шаблон вывода ошибки
function errorPattern(entryField, errorInput, errorText) {
    entryField.style.border = '2px solid red';
    errorInput.style.display = 'block';
    errorInput.textContent = errorText;
}
//--------------------------------------------------------
//проверка поля ввода логина в реальном времени
login.addEventListener('input', function() {
    if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]]/g, "")){
        errorPattern(login, errorLogin,`Недопустимый символ`);
    }
    else if (login.value.length > 30) {
        errorPattern(login, errorLogin,`Длина больше 30 символов`);
    }
    else {
        login.style.border = '';
        errorLogin.style.display = 'none';
    }
})

//проверка поля ввода после нажатия кнопки
function loginСheck() {
    if (login.value === '') {
        errorPattern(login, errorLogin,`Поле не должно быть пустым`);
        event.preventDefault(); 
    }
    else if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]]/g, "")){
        errorPattern(login, errorLogin,`Недопустимый символ`);
        event.preventDefault(); 
    }
    else if (login.value.length < 6) {
        errorPattern(login, errorLogin,`Длина меньше 6 символов`);
        event.preventDefault(); 
    }
    else if (login.value.length > 30) {
        errorPattern(login, errorLogin,`Длина больше 30 символов`);
        event.preventDefault(); 
    }
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
    else if (password.value !== password.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_Ёё]/g, "")){
        errorPattern(password, errorPassword, 'Недопустимый символ');
        event.preventDefault(); 
    }
}

//функция скрытия и показа пароля в поле пароля
function showHidePassword(target){
	if (password.getAttribute('type') === 'password') {
		target.classList.add('view');
		password.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		password.setAttribute('type', 'password');
	}
	return false;
}


// перенаправления на страницу с модальным окном в котором указано что удачный вход
function redirection(){
    if(login.value === localStorage.login && password.value === localStorage.password) {
        window.location.href = 'successfully.html';
    }
    else {
        errorPattern(password, errorPassword, 'Неправильный логин или пароль');
    }
}

buttonLogin.onclick = function() {
    loginСheck();
    passwordСheck();
    redirection();
}

//добавить сервер для принятия данных и авторизации + базу данных
// разбить на модули и каждый скрипт в отдельный файл
//хеширование пароля с помощью md5, SHA-1/SHA-256
//добавить капчу после 5 неправильных введений