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