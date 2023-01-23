// // Ejercicio 1
// const ensaladaFrutas = ["sandia ", "melones", "manzana", "papaya", "kiwi"];
// for (let i = 0; i < 5; i++) {
//     console.log("frutas de la ensalada: " + ensaladaFrutas[i])
// }

// // Ejercicio 2
// const edadesPersonas = [22, 01, 44, 35, 17, 03]; // Aca creo el array, pero al ser numeros no uso las comillas
// let suma = 0 //let suma = 0 va a hacer que el suma arranque en 0, va a ser el valor inicial de ahi en adelante se van a hacer las cuentas
// for (i = 0; i < edadesPersonas.length; i++) { //i=0 es el valor inicial.... esta i tiene que ser menor a la cantidad de numeros que tiene el array ... y el i++ va a sumar de a 1
//     suma = suma + edadesPersonas[i] // suma === a suma le va a sumar las edades 
// };
// console.log(suma / edadesPersonas.length) // console.log suma/el numero de numeros 

// // Ejercicio 3
// const amigo = ["Gerardito", "Liber", "Agus", "GiaNNa", "Matias", "Cami", "Jair"]
// for (let i = 0; i < amigo.length; i++) {
//     if (amigo[i].length === 4) {
//         console.log(amigo[i])
//     }
// }

// // Ejercicio 4
// const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
// listaDeSuper.shift(); // el.shift elimina directamente el primero 
// listaDeSuper.push("shampoo"); // el .push lo que hace es agregar como el push de github
// console.log(listaDeSuper.length) // el lista de super . LENGTH me muestra el numero de elementos de mi array lista
// console.log(listaDeSuper.indexOf("shampoo")) // indexof... me va a mostrar la posicion donde se encuentra shampoo en este caso seria la posicion 4

// // Ejercicio 5
// // Declara una función llamada saludo() que muestre una alerta de Bienvenida al visitante al
// // invocar por la consola del navegador.
// function saludo() {
//     alert("Hola Bienvenudo")
// }

// // Ejercicio 6: Calculando el mayor
// // 1. Declara una función que se llama calculoMayor() y pásale como parámetros
// // (num1,num2).
// // 2. Dentro de la función muestra una alerta que diga quién de los números ingresados
// // es mayor. En caso de ser iguales, tendrá que indicarlo a través de una alerta
// // también.
// // 3. Invoca la función y llena los argumentos con los números que desees.
// function calculoMayor(num1, num2) {
//     if (num1 > num2) {
//         alert(num1 + " es mayor que " + num2);
//     } else if (num2 > num1) {
//         alert(num2 + " es mayor que " + num1);
//     } else {
//         alert("Los numeros son iguales")
//     }
// }
// console.log(calculoMayor(5, 6)) //aca cambie el numero para ver si anda 


// // Ejercicio Ejercicio 7: Mis amigos
// const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
// const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie", "HiaNna"]
// let filtrarAmigos = (arr) => {
//     const amigos = []
//     for (let i = 0; i < arr.length; i++) {
//         let numeroVariable = arr[i]
//         if (numeroVariable.length === 4) {
//             amigos.push(arr[i])
//         }
//     }
//     if (amigos.length > 0) {
//         console.log(" Tus amigos con 4 letras son " + amigos)
//     } else {
//         console.log(" No hay amigos que coincidan ");
//     }
// }
// filtrarAmigos(amigo1)
// filtrarAmigos(amigo2)

// // Ejercicio 8: Tirar dados.
// // 1. Crea un función tirarDado() que cuando sea ejecutada en la consola tire un
// // resultado aleatorio del siguiente array: const dado = [1,2,3,4,5,6];
// // 2. Deberás codear dentro del bloque de la función, el lanzamiento aleatorio a través de
// // un math.ramdom (pregúntale a san Google como funciona este señor).
// const dado = [1, 2, 3, 4, 5, 6]; //esto es un array coleccion de datos

// function tirarDado() {
//     console.log(dado[(Math.floor(Math.random() * 6))]) //para que ande en la consola... llamar a tirarDado... tirarDado() y me va a generar un numero aleatorio 
// }

// Ejercicio 9: Creando y consultando un objeto
// Crea un objeto con el nombre toDoList debería tener las siguientes propiedades y valores:
// ● tipo de tarea: un string que diga "Compras" (ojo con los espacios en el nombre de la
// propiedad, tienes que poner entre comillas si tiene espacios)
// ● dia: un string que indique el día a realizar la tarea.
// ● productos: un array con los nombres de los productos.
// ● cantidad de productos: un número que indica la cantidad de productos de las
// compras. (Recuerda los espacios en el nombre de la propiedad)
// ● estado: "pendiente"
// ● notificacion: un método(una función) que haga una alerta con el siguiente mensaje
// "Esta tarea tiene una prioridad urgente!".

// Ahora desde la consola extrae estos valores de las siguientes formas:
// 1. El día de la compra usando dot notation.
// 2. El tipo de tarea usando bracket notation.
// 3. Extrae la cantidad de productos usando bracket notation.
// 4. Ejecuta el método (función) de la propiedad notificación (tienes que extraerlo del objeto y
// recuerda que es una función).



// let toDoList = {
//     tipoDeTarea: "compras", //no necesita los parentesis porque es un string/objeto
//     dia: "saturday", // saturday es un string 
//     productosLista: ["manzana", "atun", "arroz", "leche", "huevo", "jabon", "pollo", "galletitas", "yogurt", "pate"], //un array de objetos/string //coleccion de datos
//     cantidadDeProducto: 10, // number
//     estado: "pendiente", //string
//     notification: notification = () => { //Aca creo una arrow funtion
//         alert("Esta tarea tiene una prioridad urgente!")

//     }

// };
// console.log(toDoList.dia) //aca usamos dot notacion y es poneidno punto para llamar 
// console.log(toDoList["tipoDeTarea"]) //aca usamos los parentesis rectos para llamar la funcion 
// console.log(toDoList["cantidadDeProducto"]) //aca usamos los parentesis rectos para llamar la funcion 

// Ejercicio 10: Consultando valores.
// Muchas veces vamos a tener estructuras más complejas de objetos y nosotros vamos a
// tener que acordarnos de todos los conceptos que hemos visto hasta ahora. Copia y pega
// esto en tu archivo JS

// Consultemos por consola los siguientes valores:
// 1. Consulta el valor ("Super Hero Squad") de la propiedad squadName.
// 2. Consulta el valor que dice "Madame Uppercut" (ayuda:
// objeto-propiedad-arreglo-propiedad).
// 3. Consulta el valor que dice "Superhuman reflexes".
// 4. Consulta el valor "39" de la propiedad age de Madame Uppercut.


const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
        }
    ]
}
//para consultar el valor lo hacemos con brake notation
console.log(superHeroes["squadName"])
console.log(superHeroes.members[1].name) // el 1 es por la posicion 
console.log(superHeroes.members[1].powers[2])
console.log(superHeroes.members[1].age)

// 11
// Ejercicios de métodos avanzados de arrays
// EJERCICIO 1: Mis amigos.
// Probablemente te acuerdes de este ejercicio que ya lo hemos trabajado antes, pues ahora
// filtraremos los amigos con el método filter(). Recuerda que el programa debe filtrar el arreglo
// y devolver uno nuevo con el nombre de sus amigos. Si un nombre tiene exactamente 4
// letras, ¡puedes estar seguro que es amigo tuyo! De lo contrario, no lo son.
// const amigo = ["Ryan", "Kieran", "Mark", "Miguel"]
// El resultado esperado es ["Ryan", "Mark"]

const amigos = ["Ryan", "Kieran", "Mark", "Miguel"]
const result = amigos.filter(amigo => amigo.length === 4); //el metodo filter se pone el nombre de la const.filer y se crea una aroow adentro
console.log(result);


// EJERCICIO 2: Corrigeme la frase.
// Tenemos un arreglo llamado frases con varias sentencias al azar. Usá la función map() para
// que cada frase empiece y termine con signos de exclamación.
// const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];
// El resultado esperado es:
// console.log(frases); // ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."]
// console.log(frasesExclamadas); // [ "¡Labore sea dolor.!", "¡Justo rebum dolor.!", "¡Stet lorem
// amet.!" ]

const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];
const frasesConExclamacion = frases.map(function(palabras) {
    return '¡' + palabras + '!';
});
console.log(frasesConExclamacion);