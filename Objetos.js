class auto {
    constructor(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
}

var autos = [];

/*for (let i = 0; i < 2; i++) {
    var marca = prompt("ingrese la marca")
    var modelo = prompt("ingrese el modelo")
    var annio = prompt("ingrese el annio")
    var prototipo = new auto(marca, modelo, annio)
    autos.unshift(prototipo);
}

for (var element of autos) {
    console.log(element);
}*/

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
    { nombre: "Microfono", costo: 1000 },
]

//filter valida si algo es verdad o flaso y genera un nuevo array
var articulosfiltrados = articulos.filter(function(articullo) {
    return articullo.costo <= 500;
});

console.log(articulosfiltrados);

//Map ayuda a mapear ciertos articulos, genera un nuevo array
var nombreArticulo = articulos.map(function(articullo){
    return articullo.nombre;
});

console.log(nombreArticulo);

//find ayuda a encontrar algo dentro del objeto
var encuentraArticulo = articulos.find(function(articullo) {
    return articullo.nombre === "Laptop"
});

console.log(encuentraArticulo);

//forEach: se infiltra sobre un array u objeto y regresa cosas
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

//some: regresa una validación de verdadero o falso para los que cumplen la validación
var articulosBaratos = articulos.some(function(articullo) {
    return articullo.costo <= 700;
})

console.log(articulosBaratos);