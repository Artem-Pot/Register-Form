const login = document.querySelector('#login');
const error = document.querySelector('.error');
const password = document.querySelector('#password');
const checkbox = document.querySelector('#checkbox');
const buttonLogin = document.querySelector('.button_login');



// //проверка поля ввода логина
// function loginСheck() {

//     if (login.value === '') {
//         login.style.border = '2px solid red';
//         error.style.display = 'block';
//         error.textContent = 'Поле не должно быть пустым';
//         event.preventDefault(); 
//     }

//     if (login.value !== login.value.trim().replace(/[^а-яА-Яa-zA-Z0-9-_]/g, "")){ // проверка что в логине нет недопустимых символов
//         login.style.border = '2px solid red';
//         error.style.display = 'block';
//         error.textContent = 'Недопустимый символ';
//         event.preventDefault(); 
//     }
// }
// //проверка поля ввода пароля
// function loginPassword() {
//     if (password.value === '') {
//         password.style.border = '2px solid red';
//         error.style.display = 'block';
//         error.textContent = 'Поле не должно быть пустым';
//         event.preventDefault(); 
//     }
//     else {
//         login.value.trim(); // удаление лишних пробелов спереди и сзади
//     }
// }


// buttonLogin.onclick = function() {
//     loginСheck();
//     loginPassword();

// }

//массив шаблона
const notes = [
        {
        qwe: 'есть чо',
    }
    ];


//шаблон вывода сообщения
function sample(note) { 
    return `
        ${note.qwe}
`
}


buttonLogin.onclick = function() {
    error.style.display = 'block';
    error.insertAdjacentHTML('afterbegin', sample(notes[0]));
    event.preventDefault();
}