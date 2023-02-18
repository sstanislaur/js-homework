// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let a
a = [1, 'asd', 123, 'qwe', 12345, 'tyu', 1234567, 'zxc', 123456789, 'qwea'];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);
console.log(a[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let person = {
    title: 'Garry Poter',
    pageCount: 3407,
    genre: 'fantasy'
}
console.log(person);
let person2 = {
    title: 'Garry Poter',
    pageCount: 3407,
    genre: 'fantasy'
}
console.log(person2);
let person3 = {
    title: 'Garry Poter',
    pageCount: 3407,
    genre: 'fantasy'
}
console.log(person3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
let person1 = [
    {authors: [{name: 'asd', age: 'qwe'}], title: 'Garry Poter', pageCount: '3407', genre: 'fantasy'},
    {authors: [{name: 'asd', age: 'qwe'}], title: 'Garry Poter', pageCount: '3407', genre: 'fantasy'},
    {authors: [{name: 'asd', age: 'qwe'}], title: 'Garry Poter', pageCount: '3407', genre: 'fantasy'}
]
console.log(person1);

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password.
let users = [
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'},
    {user: name = 'vasya', username: 'vasya222', password: 'qwerty123'}
];
// Вивести в консоль пароль кожного користувача
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Логічні розгалуження:

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
// lex x= 0;
let x = -3;
x !== 0 ? console.log(true) : console.log(false);

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt('enter number');
if (time > 0 && time <= 14) {
    console.log('В першу частину години.');
}
if (time > 15 && time <= 30) {
    console.log('В другу частину години.');
}
if (time > 31 && time <= 45) {
    console.log('В третю частину години.');
}
if (time > 46 && time <= 59) {
    console.log('В четверту частину години.');
}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('enter number');
if (day > 1 && day <= 11) {
    console.log('У першу декаду');
}
if (day > 12 && day <= 22) {
    console.log('У другу декаду');
}
if (day > 23 && day <= 31) {
    console.log('У третю декаду');
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let week = prompt('enter number day of the week')
switch (week) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('???');
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let z = 100
let c = 200
if (z === c) {
    console.log(z, 'і', c, 'Числа рівні');
} else if (z > c) {
    console.log(z, 'більше чим', c);
} else if (z < c) {
    console.log(z, 'менше чим', c);
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let b = ''
let b1 = b || 'defoult';
console.log(b1);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}