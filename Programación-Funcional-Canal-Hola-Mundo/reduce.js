/**Metodo de los array
 * nos permiten ejecutar funciones reducer
 * 
 * recibe 2 argumentos (1 valor acumulado) (2 elemento iterando)
 * retorna el valor que se esta acumulando
 */

// const reducer = (acumulador, valorActual) => nuevoAcumulador;

//al final de cada iteracion, nuevoAcumulador toma el valorActual y al principio de la siguiente se transforma en el parametro acumulado, exepto en la ultima donde es retornado(nuevoAcumulador)

const reducido = [1,2,3,4,5].reduce((acc, el) => acc + el, 0);
// console.log(reducido);

// [1,2].reduce() "aplikca reduce sobre un array"
// acc, el) => acc + el, "Primer parametro es la función reductora" llava 2 parametros el primero es el accumulador y el segundo es el valor que toma del array en esa iteracion.
//, 0) "segundo parametro de reduce es el valor inicial del acumulador que va a funcionar como acc de la function"

const mascotas = [
    { nombre: "Joey", edad: 7, raza: "Gato"},
    { nombre: "Dean", edad: 6, raza: "Gato"},
    { nombre: "Missao", edad: 9, raza: "Gato"},
    { nombre: "Sam", edad: 6, raza: "Gato"},
    { nombre: "Jade", edad: 12, raza: "Tortuga"},
];

const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {})

console.log(indexed["Dean"]);

// La sintaxis [el.nombre]: el que ves en el código es una característica de los objetos en JavaScript conocida como propiedades computadas. Esta sintaxis permite usar una expresión entre corchetes [] para definir el nombre de una propiedad de un objeto de manera dinámica.


const anidado = [1, [2,3], 4, [5]];

const plano = anidado.reduce((acc, el) => acc.concat(el),[]);
console.log(plano)

// Método concat
// El método concat se utiliza para unir dos o más arrays. No modifica los arrays existentes, sino que devuelve un nuevo array que es la combinación de los arrays originales.

