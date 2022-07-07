//Ensapsulamiento con archivos EMS6
function videoPlay(id) {
    const url =  "http://urlPlatzi.com/"+id;
    console.log("reproducción  ", url);
}

function videoStop(id) {
    const url =  "http://urlPlatzi.com/"+id;
    console.log("stop  ", url);
}

//export indica cuales son los bloques de codigo que se pueden acceder desde afuera
export class PlatziClass {

    constructor({
        name,
        videoId
    }) {
        this.name = name;
        this.videoId = videoId;
    }

    reproducir() {
        videoPlay(this.videoId)
    }

    pausar() {
        videoStop(this.videoId)
    }
}

/********************* */
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

class FreeStudent extends Student{

    constructor(props){
        super(props);
    }

    approvedCourses(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("solo puede toamar cursos de gratis");
        }
    }
}

class BasiStudent extends Student{

    constructor(props){
        super(props);
    }

    approvedCourses(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("solo puede toamar cursos basic");
        }
    }
}
class ExpertStudent extends Student{

    constructor(props){
        super(props);
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse)

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
        clases = [],
        isFree = false,
        lang = 'spanish'
    }) {
        //atributo privado
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
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
    clases: claseuno,
    isFree: true
})

cursosProgBasica.name;
cursosProgBasica.name = "Nuevo nombre";

var cursoHtlm = new Courses({
    name: "Curso de HTML",
    clases: claseuno,
    lang: "english"
})


var escuelaDesarrolloWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        cursosProgBasica,
        cursoHtlm
    ]
});


var miguel = new BasicStudent({
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


