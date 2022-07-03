class Student {
    
    constructor({
        name, 
        age, 
        email,
        username,
        approvedCourses = [], 
        socialMedia = {
            twitter: "",
            instagram: "",
            facebook: ""
        },
        learningPaths = [], 
    }) {
        this._name = name;
        this._age = age;
        this._email = email;
        this._username = username;
        this._approvedCourses = approvedCourses; 
        this._socialMedia = socialMedia;
        this._learningPaths = learningPaths;
    }

    aprobarCurso(curso) {
        this._approvedCourses.push(curso);
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get email() {
        return this._email;
    }

    get username() {
        return this._username;
    }

    get approvedCourses() {
        return this._approvedCourses;
    }

    get socialMedia() {
        return this._socialMedia;
    }

    get learningPaths() {
        return this._learningPaths;
    }

    set username(username) {
        return this._username = username;
    }
}


class LearningPaths {

    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

//abstracción
class Courses {

    constructor({
        name,
        clases = []
    }) {
        //atributo privado
        this._name = name;
        this.clases = clases;
    }

    //Métodos get y set para _name
    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === null || nuevoNombre === "") {
            console.error("Web...no");
        } else {
            this._name = nuevoNombre;
        }
    }
}

class Clases {

    constructor({
        name
    }) {
        this.name = name;
    }
}

var claseuno = new Clases({
    name: "clase uno"
})

var cursosProgBasica = new Courses({
    name: "Curso Gratis de programación básica",
    clases: claseuno
})

cursosProgBasica.name;
cursosProgBasica.name = "Nuevo nombre";

var cursoHtlm = new Courses({
    name: "Curso de HTML",
    clases: claseuno
})


var escuelaDesarrolloWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        cursosProgBasica,
        cursoHtlm
    ]
});


var miguel = new Student({
    email: "miguel@platzi.com",
    age: 28,
    name: "Miguel",
    username: "Miguelito",
    socialMedia: {
        instagram: "miguel.1"
    },
    learningPaths: [
        escuelaDesarrolloWeb
    ]
});


