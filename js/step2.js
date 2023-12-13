const errorCountry = document.querySelector('.error_country');
const errorCity = document.querySelector('.error_city');
const errorDate = document.querySelector('.error_date');
const errorComment = document.querySelector('.error_comment');

const country = document.querySelector('#country');
const city = document.querySelector('#city'); 
const date = document.querySelector('#date'); 
const comment = document.querySelector('#comment'); 

const male = document.querySelector('#male'); 
const female = document.querySelector('#female'); 

const buttonNext = document.querySelector('.button_next');

//шаблон вывода ошибки
function errorPattern(entryField, errorInput, errorText) {
    entryField.style.border = '2px solid red';
    errorInput.style.display = 'block';
    errorInput.textContent = errorText;
}

//--------------------------------------------------------
//проверка поля ввода страны в реальном времени
country.addEventListener('input', function() {
    if (country.value !== country.value.replace(/[^а-яА-Яa-zA-ZЁё-\s]/g, '')){
        errorPattern(country, errorCountry,`Недопустимый символ`);
    }
    else if (country.value.length > 60) {
        errorPattern(country, errorCountry,'Длина больше 60 символов');
    }
    else {
        country.style.border = '';
        errorCountry.style.display = 'none';
    }
})

//проверка поля страны после нажатия на кнопку next
function countryСheck() {
    if (country.value === '') {
        errorPattern(country, errorCountry, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (country.value !== country.value.replace(/[^а-яА-Яa-zA-ZЁё-\s]/g, "")){
        errorPattern(country, errorCountry, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (country.value.length > 60) {
        errorPattern(country, errorCountry, 'Длина больше 60 символов');
        event.preventDefault(); 
    }
    else if (country.value.length < 3) {
        errorPattern(country, errorCountry,'Длина меньше 3 символов');
    }
    localStorage.country = country.value;
}

//--------------------------------------------------------
//проверка поля ввода города в реальном времени
city.addEventListener('input', function() {
    if (city.value !== city.value.replace(/[^а-яА-Яa-zA-ZЁё-\s]/g, '')){
        errorPattern(city, errorCity,`Недопустимый символ`);
    }
    else if (city.value.length > 60) {
        errorPattern(city, errorCity,'Длина больше 60 символов');
    }
    else {
        city.style.border = '';
        errorCity.style.display = 'none';
    }
})

//проверка поля города после нажатия на кнопку next
function cityСheck() {
    if (city.value === '') {
        errorPattern(city, errorCity, 'Поле не должно быть пустым');
        event.preventDefault(); 
    }
    else if (city.value !== city.value.replace(/[^а-яА-Яa-zA-ZЁё-\s]/g, '')){
        errorPattern(city, errorCity, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (city.value.length > 60) {
        errorPattern(city, errorCity, 'Длина больше 60 символов');
        event.preventDefault(); 
    }
    else if (city.value.length < 3) {
        errorPattern(city, errorCity,'Длина меньше 3 символов');
    }
    localStorage.city = city.value;
}
//----------------------------------------------------------------
//проверка поля с датой
function dateCheck(){
    if (date.value === '') {
        errorPattern(date, errorDate, 'Укажите дату');
        event.preventDefault(); 
    }
    else {
        date.style.border = '';
        errorDate.style.display = 'none';
    }
    localStorage.date = date.value;
}

//проверка радио кнопок
function radioCheck(){
    if(male.checked) {
        localStorage.gender = 'мужской';
    }
    if(female.checked) {
        localStorage.gender = 'женский';
    }
}

//----------------------------------------------------------------
//Проверка поля комментария в реальном времени
comment.addEventListener('input', function() {
    if (comment.value !== comment.value.replace(/[^а-яА-Яa-zA-ZЁё0-9\s@"№#$;%:^&?*()/|,.'<>`~+-_\{}]/g, '')){
        errorPattern(comment, errorComment,`Недопустимый символ`);
    }
    else if (comment.value.length > 500) {
        errorPattern(comment, errorComment,'Длина больше 500 символов');
    }
    else {
        comment.style.border = '';
        errorComment.style.display = 'none';
    }
})

//проверка поля комментарий после нажатия на кнопку next
function commentСheck() {
    if (comment.textContent !== comment.textContent.replace(/[^а-яА-Яa-zA-ZЁё0-9\s!@"№#$;%:^&?*()/|,.'<>`~+-_[]\{}]/g, '')){
        errorPattern(comment, errorComment, 'Недопустимый символ');
        event.preventDefault(); 
    }
    else if (comment.textContent.length > 500) {
        errorPattern(comment, errorComment, 'Длина больше 500 символов');
        event.preventDefault(); 
    }
    localStorage.comment = comment.textContent;
}
//перенаправление на следующих шаг
function redirection(){
    if(country.value && city.value && date.value) {
        window.location.href = 'step3.html';
    }
}

buttonNext.onclick = function() {
    countryСheck();
    cityСheck();
    dateCheck();
    radioCheck();
    commentСheck();
    redirection();
}

