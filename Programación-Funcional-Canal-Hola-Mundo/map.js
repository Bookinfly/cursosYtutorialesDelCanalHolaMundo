/**
 * Map nos permite transformar los elementos de un arreglo
 * nos va a devolver otro arreglo de la misma longitud
 * los elementos pueden cambiar dependiendo de la función que reciva como parámetro
 * Genera una copia que no modifica el original
 * cada elemento del arreglo es pasado por la función
 */

const suma = (ns)=> {
    let acumulado = 0;
    for (i = 0; i < ns.length; i++){
        acumulado += ns[i];
    }
    return acumulado;
}

const numeros = [1,2,3,4,5];

// const multiplicados = numeros.map(x => x * 2);

// console.log(multiplicados, numeros);

// const parejas = numeros.map(x => [x, x]);
// console.log(parejas);


const mascotas = [
    { nombre: "Joey", edad: 7, raza: "Gato"},
    { nombre: "Dean", edad: 6, raza: "Gato"},
    { nombre: "Missao", edad: 9, raza: "Gato"},
    { nombre: "Sam", edad: 6, raza: "Gato"},
    { nombre: "Jade", edad: 20, raza: "Tortuga"},
];

const edades = mascotas.map(x => x.edad);
const res = suma(edades);
console.log(res / edades.length);




