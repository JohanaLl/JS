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
        cursos = [],
        nivelAprendizaje = []
    }) {
        this.name = name;
        this.cursos = cursos;
        this.nivelAprendizaje = nivelAprendizaje;
    }
}


var escuelaDesarrolloWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    cursos: [
        "POO en JS",
        "Practica de JS"
    ], 
    nivelAprendizaje: [
        "Basico",
        "Intermedio",
        "Avanzado",
        "Complementario"
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
