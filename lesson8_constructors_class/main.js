// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = [
    new User(3, 'name1', 'surname1', 'gmail1@gmail.com', +38012312312),
    new User(2, 'name2', 'surname2', 'gmail2@gmail.com', +38012312312),
    new User(1, 'name3', 'surname3', 'gmail3@gmail.com', +38012312312),
    new User(8, 'name4', 'surname4', 'gmail4@gmail.com', +38012312312),
    new User(5, 'name5', 'surname5', 'gmail5@gmail.com', +38012312312),
    new User(10, 'name6', 'surname6', 'gmail6@gmail.com', +38012312312),
    new User(7, 'name7', 'surname7', 'gmail7@gmail.com', +38012312312),
    new User(4, 'name8', 'surname8', 'gmail8@gmail.com', +38012312312),
    new User(9, 'name9', 'surname9', 'gmail9@gmail.com', +38012312312),
    new User(6, 'name10', 'surname10', 'gmail10@gmail.com', +38012312312)
];
console.log(user);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = user.filter((num) => num.id % 2 === 0);
console.log(filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = user.sort((a, b) => {
    return a.id - b.id
});
console.log(sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let clients = [
    new client(3, 'name1', 'surname1', 'gmail1@gmail.com', +38012312312, ['product1', 'product2']),
    new client(2, 'name2', 'surname2', 'gmail2@gmail.com', +38012312312, ['product3']),
    new client(1, 'name3', 'surname3', 'gmail3@gmail.com', +38012312312, ['product4', 'product5']),
    new client(8, 'name4', 'surname4', 'gmail4@gmail.com', +38012312312, ['product6', 'product7', 'product8']),
    new client(5, 'name5', 'surname5', 'gmail5@gmail.com', +38012312312, ['product9']),
    new client(10, 'name6', 'surname6', 'gmail6@gmail.com', +38012312312, ['product10', 'product11', 'product13', 'product14']),
    new client(7, 'name7', 'surname7', 'gmail7@gmail.com', +38012312312, ['product15', 'product16']),
    new client(4, 'name8', 'surname8', 'gmail8@gmail.com', +38012312312, ['product17']),
    new client(9, 'name9', 'surname9', 'gmail9@gmail.com', +38012312312, ['product18', 'product19']),
    new client(6, 'name10', 'surname10', 'gmail10@gmail.com', +38012312312, ['product20', 'product21', 'product22'])
];
console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = clients.sort((clientA, clientB) => clientA.order.length - clientB.order.length);
console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class cars {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;

        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }

        this.info = function () {
            console.log(`Модель: ${this.model}`);
            console.log(`Виробник: ${this.manufacturer}`);
            console.log(`Рік випуску: ${this.year}`);
            console.log(`Максимальна швидкість: ${this.maxSpeed}`);
            console.log(`Об'єм двигуна: ${this.engineVolume}`);
        }

        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed += newSpeed;
        }

        this.changeYear = function (newValue) {
            this.year = newValue;
        }

        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [
    new Cinderella('Anna', 18, 36),
    new Cinderella('Barbara', 20, 37),
    new Cinderella('Carla', 22, 38),
    new Cinderella('Diana', 24, 39),
    new Cinderella('Elena', 26, 40),
    new Cinderella('Fiona', 28, 41),
    new Cinderella('Gloria', 30, 42),
    new Cinderella('Hannah', 32, 43),
    new Cinderella('Irene', 34, 44),
    new Cinderella('Julia', 36, 45),
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }

    findCinderella(cinderellas) {
        return cinderellas.find(cinderella => cinderella.shoeSize === this.shoeSize);
    }
}

let prince = new Prince('John', 25, 39);
let chosenCinderella = prince.findCinderella(cinderellas);
console.log(`The chosen Cinderella is ${chosenCinderella.name}.`);