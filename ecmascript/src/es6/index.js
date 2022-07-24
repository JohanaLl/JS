//agrupación

let team1 = ["Oscar", "Andres", "Carlos"]
let team2 = ["Maria", "Vanesa", "Tatiana"]

let education = ["David", ...team1, ...team2]
console.log(education);

let name = 'oscar';
let age = 22;
obj = {name, age}
console.log(obj);

//Arrow Functonsa

let names = [
    {name:"Oscar", age:"18"},
    {name:"Carlos", age:20}
]
let listOfNames = names.map(item => console.log(item.name));

let listOfNames2 = (name, age, country) => {
    console.log(name, age, country);
}

let listOfNames3 = name => console.log(name);

//Promesas
const helloPromise = () => {
    return new  Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))


class Calculator {
    constructor() {
        //Variables con scope global
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

//modulos
import { hello } from './module'

hello();

//generators 
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);