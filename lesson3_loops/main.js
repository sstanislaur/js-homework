// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом.
for (let j = 0; j < 10; j++) {
    document.write(`<div>10 блоків із довільним текстом</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let j = 0; j < 10; j++) {
    document.write(`<div>${1 + j}-блок із довільним текстом</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let x = 0
while (x < 20) {
    document.write(`<h1>20 блоків з довільним текстом</h1>`);
    x++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0
while (i < 20) {
    document.write(`<h1>${1 + i}-блок з довільним текстом</h1>`);
    i++
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу ( itar, iter )
// побудувати структуру по шаблону
// Масив: let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let j = 0; j < listOfItems.length; j++) {
    const listOfItem = listOfItems[j];
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let j = 0; j < products.length; j++) {
    const product = products[j];
    document.write(`<div class="target"> 
<h2>${product.title} - ${product.price} UAH</h2>
<img src="${product.image}" alt="">
</div>`)
}


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
for (const user of users) {
    if (user.status === true) {
        console.log(user)
    }
}
for (const user of users) {
    if (user.status === false) {
        console.log(user)
    }
}
for (const user of users) {
    if (user.age >30) {
        console.log(user)
    }
}