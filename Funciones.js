//Declarativas, se pueden llamar antes de ser expresadas
function mifuncion(nombre) {
    console.log(`Hola ${nombre}`);
}

mifuncion("Johana");

//Expresivas -- anónimas, se tienen que declarar para poder llamarlas
var mifuncion = function(a, b) {
    return a + b;
}

mifuncion(1, 2);

// SCOPE
var miNombre = "Johana"

function nombre() {
    var miApellido = "Llanos"
    return miNombre + miApellido
}

nombre();

/********************************** inicio ************************/
var piedra = "piedra"
var tijera = "tijera"
var papel = "papel"

/**Esta función optiene uno de los valores que están dentro de la estructura al random */
function getMachine() {
    var options = ["piedra", "papel", "tijera"];
    var machine = options[Math.floor(Math.random() * 3)];
    return machine;
}

function juego(user) {
    var pc = getMachine();
    console.log("PC: " , pc);
    if ((user === piedra && pc === tijera) || (user === tijera && pc === papel) || (user === papel && pc === piedra)) {
        console.log("USUARIO GANA");
    } else if ((pc === piedra && user === tijera) || (pc === tijera && user === papel) || (pc === papel && user === piedra)) {
        console.log("USUARIO PIERDE");
    } else {
        console.log("EMPATE");
    }
}

juego("piedra");



function juego2(user) {
    var pc = getMachine();
    console.log("PC: " , pc);
    switch(true){
        case ((user === piedra && pc === tijera) || (user === tijera && pc === papel) || (user === papel && pc === piedra)):
            console.log("USUARIO GANA");
            break;
        case ((pc === piedra && user === tijera) || (pc === tijera && user === papel) || (pc === papel && user === piedra)):
            console.log("USUARIO PIERDE");
            break;
        default:
            console.log("EMPATE");

    }
}

juego2("piedra");
