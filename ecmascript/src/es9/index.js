const obj = {
    name: 'Leidy',
    age: 28,
    country: 'COL'
}

//No muestra los valores por fuera de all
//Solo muestra el obj con los datos que se necesitan
let {name,  ...all} = obj;
console.log(all);

//Propagación... Unir objetos a un nuevo obj
const obj1 = {
    name: 'Leidy',
    age: 28
}

const obj2 = {
    ...obj1,
    country: 'COL'
}

console.log(obj2);

//Saber cuando ha terminado un llamado
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Erroor'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

//Agrupar bloques de regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);