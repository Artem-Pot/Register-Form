const errorSurname = document.querySelector('.error_surname');
const errorName = document.querySelector('.error_name');
const errorPatronymic = document.querySelector('.error_patronymic');
const errorDate = document.querySelector('.error_date');
const errorEmail = document.querySelector('.error_email');
const errorTelephone = document.querySelector('.error_telephone');

const surname = document.querySelector('#surname');
const name = document.querySelector('#name');
const patronymic = document.querySelector('#patronymic');
const date = document.querySelector('#date');
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
        console.log(`Недопустимый символ фамилии`);
    }
    else if (surname.value.length > 100) {
        errorPattern(surname, errorSurname,'Длина больше 100 символов');
        console.log(`Длина больше 30 символов фамилии`);
    }
    else {
        surname.style.border = '';
        errorSurname.style.display = 'none';
    }
})

//проверка поля фамилии после нажатия на кнопку next
function errorSurnameСheck() {
    if (surname.value === '') {
        errorPattern(surname, errorSurname, 'Поле не должно быть пустым');
        event.preventDefault(); 
        console.log(`Поле фамилии не должно быть пустым`);
    }
    else if (surname.value !== surname.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, "")){
        errorPattern(surname, errorSurname, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ фамилии`);
    }
    else if (surname.value.length > 100) {
        errorPattern(surname, errorSurname, 'Длина больше 100 символов');
        event.preventDefault(); 
        console.log(`Длина больше 30 символов фамилии`);
    }
    return surname.value.trim();
}
//----------------------------------------------------------------
//проверка поля ввода имени в реальном времени
name.addEventListener('input', function() {
    if (name.value !== name.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, '')){
        errorPattern(name, errorName,`Недопустимый символ `);
        console.log(`Недопустимый символ имени`);
    }
    else if (name.value.length > 100) {
        errorPattern(name, errorName,'Длина больше 100 символов');
        console.log(`Длина больше 100 символов имени`);
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
        console.log(`Поле имени не должно быть пустым`);
    }
    else if (name.value !== name.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, "")){
        errorPattern(name, errorName, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ имени`);
    }
    else if (name.value.length > 100) {
        errorPattern(name, errorName, 'Длина больше 100 символов');
        event.preventDefault(); 
        console.log(`Длина больше 100 символов имени`);
    }
    return name.value.trim();
}

//--------------------------------------------------------
//проверка поля ввода отчества в реальном времени
patronymic.addEventListener('input', function() {
    if (patronymic.value !== patronymic.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, '')){
        errorPattern(patronymic, errorPatronymic,`Недопустимый символ `);
        console.log(`Недопустимый символ отчества`);
    }
    else if (patronymic.value.length > 100) {
        errorPattern(patronymic, errorPatronymic,'Длина больше 100 символов');
        console.log(`Длина больше 100 символов отчества`);
    }
    else {
        patronymic.style.border = '';
        errorPatronymic.style.display = 'none';
    }
})

// //проверка поля отчества после нажатия на кнопку next
function errorPatronymicСheck() {
    if (patronymic.value !== patronymic.value.replace(/[^а-яА-Яa-zA-ZЁё]/g, "")){
        errorPattern(patronymic, errorPatronymic, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ отчества`);
    }
    else if (patronymic.value.length > 100) {
        errorPattern(patronymic, errorPatronymic, 'Длина больше 100 символов');
        event.preventDefault(); 
        console.log(`Длина больше 30 символов отчества`);
    }
    return patronymic.value.trim();
}

//----------------------------------------------------------------
//проверка поля email в реальном времени
email.addEventListener('input', function() {
    if (email.value.length > 100) {
        errorPattern(passwordRepeat, errorEmail, 'Длина больше 100 символов');
        console.log(`Длина больше 100 символов емайла`);
    }
    else if (email.value !== email.value.replace(/[^a-zA-Z0-9-_.@]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(email, errorEmail, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ емайла`);
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
        console.log(`Поле не должно быть пустым емайла`);
    }
    else if (email.value.length < 5) {
        errorPattern(email, errorEmail, 'Длина меньше 5 символов');
        event.preventDefault(); 
        console.log(`Длина меньше 5 символов емайла`);
    }
    else if (email.value.length > 100) {
        errorPattern(email, errorEmail, 'Длина больше 100 символов');
        event.preventDefault(); 
        console.log(`Длина больше 100 символов емайла`);
    }
    else if (email.value !== email.value.replace(/[^a-zA-Z0-9-_.@]/g, "")){ 
        errorPattern(email, errorEmail, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ емайла`);
    }
    else if (email.value !== email.value.replace(/^[^a-zA-Z0-9][a-zA-Z0-9-_]+@[a-zA-Z0-9-]+.[^a-zA-Z0-9]/g, "")) {
        errorPattern(email, errorEmail, 'Некорректный Email');
        event.preventDefault(); 
        console.log(`Некорректный Email `);
    }
    return email.value.trim().toLowerCase();
}

//----------------------------------------------------------------
//проверка поля ввода телефона
telephone.addEventListener('input', function() {
    if (telephone.value !== telephone.value.replace(/[^0-9+]/g, '')){ // проверка что в логине нет недопустимых символов
        errorPattern(telephone, errorTelephone,`Недопустимый символ `);
        console.log(`Недопустимый символ телефона`);
    }
    else if (telephone.value.length > 12) {
        errorPattern(telephone, errorTelephone,'Длина больше 12 символов');
        console.log(`Длина больше 12 символов телефона`);
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
        console.log(`Поле телефона не должно быть пустым`);
    }
    else if (telephone.value !== telephone.value.trim().replace(/[^0-9+]/g, "")){ // проверка что в логине нет недопустимых символов
        errorPattern(telephone, errorTelephone, 'Недопустимый символ');
        event.preventDefault(); 
        console.log(`Недопустимый символ телефона`);
    }
    else if (telephone.value.length < 5) {
        errorPattern(telephone, errorTelephone,'Длина меньше 5 символов');
        event.preventDefault(); 
        console.log(`Длина меньше 5 символов телефона`);
    }

    else if (telephone.value.length > 12) {
        errorPattern(telephone, errorTelephone, 'Длина больше 12 символов');
        event.preventDefault(); 
        console.log(`Длина больше 12 символов телефона`);
    }

    else if (telephone.value !== telephone.value.replace(/[^+]+[^0-9]/g, "")) {
        errorPattern(telephone, errorTelephone, 'Некорректный телефон');
        event.preventDefault(); 
        console.log(`Некорректный телефон`);
    }

    return telephone.value.trim().toLowerCase();
}

buttonNext.onclick = function() {
    errorSurnameСheck();
    nameСheck();
    errorPatronymicСheck();
    emailСheck();
    telephoneСheck();
}

//добавить остальные поля (город проживания, текстовое поле..,  чек - пол, политика соглашения)


// разбить на модули и каждый скрипт в отдельный файл
//добавить сообщение об удачной отправки и перемещения на страницу авторизации
//добавить сервер для принятия данных и авторизации
//хеширование пароля с помощью md5, SHA-1/SHA-256
//сделать отправку потом через пост
//добавить какой именно символ недопустим в логине и пароле

