const errorSurname = document.querySelector('.error_surname');
const errorName = document.querySelector('.error_name');
const errorPatronymic = document.querySelector('.error_patronymic');
const errorEmail = document.querySelector('.error_email');
const errorTelephone = document.querySelector('.error_telephone');

const surname = document.querySelector('#surname');
const name = document.querySelector('#name');
const patronymic = document.querySelector('#patronymic');
const email = document.querySelector('#email');
const telephone = document.querySelector('#telephone');

const buttonNext = document.querySelector('.button_next');

//шаблон вывода ошибки
function errorPattern(entryField, errorInput, errorText) {
    entryField.style.border = '2px solid red';
    errorInput.style.display = 'block';
    errorInput.textContent = errorText;
}
//--------------------------------------------------------
//проверка поля ввода фамилии в реальном времени
surname.addEventListener('input', function() {
    if (surname.value !== surname.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, '')){
        errorPattern(surname, errorSurname,`Недопустимый символ `);
    }
    else if (surname.value.length > 100) {
        errorPattern(surname, errorSurname,'Длина больше 100 символов');
    }
    else {
        surname.style.border = '';
        errorSurname.style.display = 'none';
    }
})

//проверка поля фамилии после нажатия на кнопку next
function surnameСheck() {
    if (surname.value === '') {
        errorPattern(surname, errorSurname, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (surname.value !== surname.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, "")){
        errorPattern(surname, errorSurname, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (surname.value.length > 100) {
        errorPattern(surname, errorSurname, 'Длина больше 100 символов');
        event.preventDefault(); 
    }
    surname.value.trim();
    localStorage.surname = surname.value;
}
//----------------------------------------------------------------
//проверка поля ввода имени в реальном времени
name.addEventListener('input', function() {
    if (name.value !== name.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, '')){
        errorPattern(name, errorName,`Недопустимый символ `);
    }
    else if (name.value.length > 100) {
        errorPattern(name, errorName,'Длина больше 100 символов');
    }
    else {
        name.style.border = '';
        errorName.style.display = 'none';
    }
})

//проверка поля имени после нажатия на кнопку next
function nameСheck() {
    if (name.value === '') {
        errorPattern(name, errorName, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (name.value !== name.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, "")){
        errorPattern(name, errorName, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (name.value.length > 100) {
        errorPattern(name, errorName, 'Длина больше 100 символов');
        event.preventDefault(); 
    }
     name.value.trim();
     localStorage.name = name.value;
}

//--------------------------------------------------------
//проверка поля ввода отчества в реальном времени
patronymic.addEventListener('input', function() {
    if (patronymic.value !== patronymic.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, '')){
        errorPattern(patronymic, errorPatronymic,`Недопустимый символ `);
    }
    else if (patronymic.value.length > 100) {
        errorPattern(patronymic, errorPatronymic,'Длина больше 100 символов');
    }
    else {
        patronymic.style.border = '';
        errorPatronymic.style.display = 'none';
    }
})

// //проверка поля отчества после нажатия на кнопку next
function patronymicСheck() {
    if (patronymic.value !== patronymic.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, "")){
        errorPattern(patronymic, errorPatronymic, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (patronymic.value.length > 100) {
        errorPattern(patronymic, errorPatronymic, 'Длина больше 100 символов');
        event.preventDefault(); 
    }
    patronymic.value.trim();
    localStorage.patronymic = patronymic.value;
}

//----------------------------------------------------------------
//проверка поля email в реальном времени
email.addEventListener('input', function() {
    if (email.value.length > 100) {
        errorPattern(passwordRepeat, errorEmail, 'Длина больше 100 символов');
    }
    else if (email.value !== email.value.replace(/[^a-zA-Z0-9-_.@]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(email, errorEmail, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else {
        email.style.border = '';
        errorEmail.style.display = 'none';
    }
})

//проверка поля емаил после нажатия кнопки
function emailСheck() {
    if (email.value === '') {
        errorPattern(email, errorEmail, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (email.value.length < 5) {
        errorPattern(email, errorEmail, 'Длина меньше 5 символов');
        event.preventDefault(); 
    }
    else if (email.value.length > 100) {
        errorPattern(email, errorEmail, 'Длина больше 100 символов');
        event.preventDefault(); 
    }
    else if (email.value !== email.value.replace(/[^a-zA-Z0-9-_.@]/g, "")){ 
        errorPattern(email, errorEmail, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (email.value !== email.value.replace(/^[^a-zA-Z0-9][a-zA-Z0-9-_]+@[a-zA-Z0-9-]+.[^a-zA-Z0-9]/g, "")) {
        errorPattern(email, errorEmail, 'Некорректный Email');
        event.preventDefault(); 
    }
    email.value.trim().toLowerCase();
    localStorage.email = email.value;
}
//----------------------------------------------------------------
//проверка поля ввода телефона
telephone.addEventListener('input', function() {
    if (telephone.value !== telephone.value.replace(/[^0-9+]/g, '')){ // проверка что в логине нет недопустимых символов
        errorPattern(telephone, errorTelephone,`Недопустимый символ `);
    }
    else if (telephone.value.length > 12) {
        errorPattern(telephone, errorTelephone,'Длина больше 12 символов');
    }
    else {
        telephone.style.border = '';
        errorTelephone.style.display = 'none';
    }
})

//проверка поля телефон после нажатия на кнопку
function telephoneСheck() {
    if (telephone.value === '') {
        errorPattern(telephone, errorTelephone, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (telephone.value !== telephone.value.trim().replace(/[^0-9+]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(telephone, errorTelephone, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (telephone.value.length < 5) {
        errorPattern(telephone, errorTelephone,'Длина меньше 5 символов');
        event.preventDefault(); 
    }
    else if (telephone.value.length > 12) {
        errorPattern(telephone, errorTelephone, 'Длина больше 12 символов');
        event.preventDefault(); 
    }
    else if (telephone.value !== telephone.value.replace(/[^+]+[^0-9]/g, "")) {
        errorPattern(telephone, errorTelephone, 'Некорректный телефон');
        event.preventDefault(); 
    }
    telephone.value.trim().toLowerCase();
    localStorage.telephone = telephone.value;
}
//перенаправление на следующих шаг
function redirection(){
    if(surname.value && name.value && email.value && telephone.value) {
        window.location.href = 'step2.html';
    }
}

buttonNext.onclick = function() {
    surnameСheck();
    nameСheck();
    patronymicСheck();
    emailСheck();
    telephoneСheck();
    redirection();
}
