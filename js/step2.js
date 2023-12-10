const errorCountry = document.querySelector('.error_country');
const errorCity = document.querySelector('.error_city');
const errorDate = document.querySelector('.error_date'); 

const country = document.querySelector('#country');
const city = document.querySelector('#city'); 
const date = document.querySelector('#date'); 
const comment = document.querySelector('#comment'); 

const buttonNext = document.querySelector('.button_next');






buttonNext.onclick = function() {
    countryСheck();
    cityСheck();
    commentСheck();
}


//добавить проверку радио кнопок