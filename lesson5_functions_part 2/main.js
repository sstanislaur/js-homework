// - ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let math = (a, b) => a * b
console.log(math(10, 20))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let math1 = (r) => 3.14 * r * r

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let math2 = (r, h) => {
    let pi = 3.14;
    return (((2 * pi * r * h) + (2 * pi * (r * r))));
}

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let looper = (arr) => {
    for (const Element of arr) {
        console.log(Element)
    }
}

looper(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = (arg) => {
    document.write(`<div><p>${arg}</p></div>`)
}

text('asd')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let elements = (li) => {
    document.write(`
    <div>
    <ul>
    <li>${li}</li>
    <li>${li}</li>
    <li>${li}</li>
</ul>
</div>
    `)
}

elements('text');

// - створити функцію яка створює ul. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let foo = (text, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<div>${text}</div>`)
    }
    document.write(`</ul>`)
}

foo('sup', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [1, 'sup', true]

let boo = (arr) => {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

boo(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users2 = [
    {name: 'vasya', age: 31, id: false}
];

let block = (object) => {
    for (const Element of object) {
        document.write(`<div>${Element.id} ${Element.name} ${Element.age}</div>`)
    }

}

block(users2)

// - створити функцію яка повертає найменьше число з масиву
let number = (arr) => {
    let min = arr[0];
    for (const arrElement of arr) {
        if (min > arrElement)
            min = arrElement
    }
    return min
}

console.log(number([-11, 0, -55, 33]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let num = [1, 5, 9, 10, 20]

let sum = (arr) => {
    let key = 0;
    for (const Element of arr) {
        key += Element
    }
    return key
}

console.log(sum(num))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let x = [11, 22, 33, 44]

let swap = (arr, index1, index2) => {
    let v1 = arr[index1];
    let v2 = arr[index2];
    arr[index1] = v2
    arr[index2] = v1
    return arr
}

console.log(swap([11, 22, 33, 44,], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const Element of currencyValues) {
        if (Element.currency === exchangeCurrency) {
            return sumUAH / Element.value;
        }
    }
}

exchange(
    10000,
    [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42},
        {currency: 'GBP', value: 43}
    ],
    'USD'
)
