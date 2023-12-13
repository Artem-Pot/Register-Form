const list = document.querySelector('.list');



// for (let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage[i]);
// }

// console.log(localStorage.length);

// for (let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage[i]);
// }

function sample() { 
    return `
    <li class='item'>Фамилия:  ${localStorage.surname}</li>
    <li class='item'>Имя: ${localStorage.name}</li>
    <li class='item'>Отчество: ${localStorage.patronymic}</li>
    <li class='item'>Email: ${localStorage.email}</li>
    <li class='item'>Телефон: ${localStorage.telephone}</li>
    <li class='item'>Страна: ${localStorage.country}</li>
    <li class='item'>Город: ${localStorage.city}</li>
    <li class='item'>Дата рождения: ${localStorage.date}</li>
    <li class='item'>Пол: ${localStorage.gender}</li>
    <li class='item'>Комментарий: ${localStorage.comment}</li>
    <li class='item'>Логин: ${localStorage.login}</li>
    <li class='item'>Пароль: ${localStorage.password}</li>
`
}

function test() {
    list.insertAdjacentHTML('beforeend', sample()); 
}

test();