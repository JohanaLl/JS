//Esto se usa así cuando se implementan modulos
/*import { PlatziClass } from "./Class.js";

const calse1 = new PlatziClass({
    name: "JS orientada a objetos",
    videoId: "kjsdklsdnksmlfsdlfmslñ"
})

calse1.reproducir();
calse1.pausar();*/

const leidy = {
    name: "Leidy",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourses(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

Object.keys(leidy);
Object.getOwnPropertyNames(leidy);
Object.entries(leidy);

Object.getOwnPropertyDescriptors(leidy);

/**
 * Este método recibe
 * Objeo al que se le van a hacer los cambios
 * nombre de la propiedad que se va a definir
 * objeto con diferentes parámetros
 */
Object.defineProperty(leidy, "pruebaNasa", {
    value: "Extraterrestes",
    enumerable: false,
    writable: false,
    configurable: false,
})

Object.defineProperty(leidy, "navigator", {
    value: "Chrome",
    enumerable: true,
    writable: true,
    configurable: true,
})

Object.seal(leidy);
Object.freeze(leidy);


/***************************Stringify y parse************************** */
/*const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    editA(){
        this.a = "AAAA"
    }
}

const stringifyComplexObject = JSON.stringify(obj1)
const obj2 = JSON.parse(stringifyComplexObject)

function recursiva(numero) {
    console.log(numero);

    if(numero < 5) {
        return recursiva(numero + 1);
    } else {
        return 5
    }
}

function recursiva2(array) {
    if (array.length != 0) {
        const firstNum = array[0];
        console.log(firstNum);
        array.shift();
        recursiva2(array);
    }
}
*/

/** Recursividad DepCopy */
function isObject (subject) {
    return typeof subject == "object";
}

function isArray (subject) {
    return Array.isArray(subject);
}

function deepCopy( subject ) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);


    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (const key in subject) {
        const keysObject = isObject(subject[key]);

        if (keysObject) {
            copySubject[key] = deepCopy(subject[key])
        } else  if (subjectIsArray) {
            copySubject.push(subject[key])
        } else {
            copySubject[key] = subject[key]
        }
    }

    return copySubject;
}

const studentBase = {
    name: undefined,
    email: undefined,
    eage: undefined,
    approveCourses: undefined,
    learningPaths: undefined,
    socialMdia: {
        twitter: undefined,
        instagram: undefined
    },
};

const juan = deepCopy(studentBase)
//encapsular las propiedades de los objetos 
//Evitar que name se borre
Object.defineProperty(juan, "name", {
    value: "Juans",
    configurable: false
})

//evitar que ninguna de las propiedades se pueda borrar 
Object.seal(juan);
Object.freeze(juan);

//Verificar si todas las propiedades del objeto tienen configurable en true
Object.isSealed(juan)