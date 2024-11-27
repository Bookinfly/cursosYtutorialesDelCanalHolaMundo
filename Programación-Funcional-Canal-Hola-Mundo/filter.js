/**
 * Filter es un métoto de arrays que recibe funciones puras como parámetros y nos devuelve un array "filtrado"
 * el nuevo array es una copia de igual o menor longitud
 * usa clonación de alto nivel y no muta el original
 */

const numeros = [1,,2,3,4,5,6,7,8,9];

const mascotas = [
    { nombre: "Joey", edad: 7, raza: "Gato"},
    { nombre: "Dean", edad: 6, raza: "Gato"},
    { nombre: "Missao", edad: 9, raza: "Gato"},
    { nombre: "Sam", edad: 6, raza: "Gato"},
    { nombre: "Jade", edad: 12, raza: "Tortuga"},
];

const numerosFiltrados = numeros.filter(x => x < 5);//itera cada elemento y si devuelve true a la condicion, lo agrega

const gatos = mascotas.filter(x => x.raza == "Gato");
//revisa una propiedad del objeto, pero devuelve el objeto completo

//notese que la función es una arrow function, y al tener una sola linea, la retorna automaticamente (true or false en este caso)

console.log(numerosFiltrados, gatos);

