const transporte = document.getElementById("transporte")
let numero = prompt('Ingrese la distancia que necesita recorrer', '')
let numeroNumero = parseInt(numero);

function transportes(distancia) {
    if (Number.isNaN(distancia)) return false;
    if (distancia > 0 && distancia <= 1000) {
        transporte.innerHTML = `El transporte adecuado es a pie`
    } else if (distancia > 1000 && distancia <= 10000) {
        transporte.innerHTML = `El transporte adecuado es la bicicleta`
    } else if (distancia > 10000 && distancia <= 30000) {
        transporte.innerHTML = `El transporte adecuado es el colectivo`
    } else if (distancia > 30000 && distancia <= 100000) {
        transporte.innerHTML = `El transporte adecuado es el auto`
    } else if (distancia > 100000) {
        transporte.innerHTML = `El transporte adecuado es el avión`
    }
}

console.log(typeof(numeroNumero));
transportes(numeroNumero);

//Obtener el valor numero más alto de un array:

let arrayDeNumeros1 = [21, 34, -123, 2, 84];
let arrayDeNumeros2 = [15, 21, 55, 192, 13];
let arrayDeNumeros3 = [-44, -51, -66, -102];

console.log(`El mayor número del array es ${Math.max(...arrayDeNumeros1)}`)
 
/* ó */ console.log(`El mayor número del array es ${arrayDeNumeros2.reduce((a, b) => 
                    Math.max(a, b))}`)
 
/* ó */ function numeroMayor(arrayyy) {
            let mayor = -Infinity
            for (let i = 0; i < arrayyy.length; i++) {
                if (arrayyy[i] > mayor) {
                 mayor = arrayyy[i];
                }
            } return mayor;
        }
console.log(`El mayor número del array es ${numeroMayor(arrayDeNumeros3)}`);