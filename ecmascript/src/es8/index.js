const data = {
    fontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '-----'));

//trilling comas, añadir coma al final de cada elemento para que si se quieren añadir más no se cometan errores
const trilincoma = {
    fontend: 'Oscar',
}

//Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        :reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();