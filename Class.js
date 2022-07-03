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
        this.name = name;
        this.age = age;
        this.email = email;
        this.username = username;
        this.approvedCourses = approvedCourses; 
        this.socialMedia = socialMedia;
        this.learningPaths = learningPaths;
    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
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
        this.name = name;
        this.clases = clases;
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

console.log(escuelaDesarrolloWeb.courses);

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


