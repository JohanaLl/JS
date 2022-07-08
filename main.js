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

console.log(Object.keys(leidy));
console.log(Object.getOwnPropertyNames(leidy));
console.log(Object.entries(leidy));

console.log(Object.getOwnPropertyDescriptors(leidy));

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
Object.freeze(leidy)