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