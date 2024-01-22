/*let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;




function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();*/

//1.Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos:
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = [];
lenguagesDeProgramacion.push('JavaScript', 'C','C++', 'Kotlin' , 'Python');
//3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguajes() {
    console.log(lenguagesDeProgramacion);
}
mostrarLenguajes();

//5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function invertirLenguajes() {

    console.log(lenguagesDeProgramacion.reverse());
}

invertirLenguajes();
//6.Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [];
listaNumeros.push(7, 2, 14, 4);
console.log(promedioArrays())
function promedioArrays() {
    
    let suma = 0;
    for (i = 0; i < listaNumeros.length; i++) {
        suma = suma + listaNumeros[i];
      }
    return suma / (listaNumeros.length)
}
//7.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMayor() {
    let mayor = 0;
    for (i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > mayor) {
            mayor = listaNumeros[i];
        }
    }     
    return `El numero ${mayor} es el mayor numero del array`;
}
function mostrarMenor() {
    let menor = listaNumeros[0];
    for (i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] < menor) {
            menor = listaNumeros[i];
        }
    }
    return `El numero ${menor} es el menor numero del array`;
}
mostrarMayor();
console.log(mostrarMayor());
mostrarMenor();
console.log(mostrarMenor());

//8.Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaArrays() {

    let suma = 0;
    for (i = 0; i < listaNumeros.length; i++) {
        suma = suma + listaNumeros[i];
    }
    return suma 
}

sumaArrays();
console.log(sumaArrays());

//otra forma de mayor y menor
function encontrarMayorMenor() {
    let mayor1 = listaNumeros[0];
    let menor1 = listaNumeros[0];

    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > mayor1) {
            mayor1 = listaNumeros[i];
        }
        if (listaNumeros[i] < menor1) {
            menor1 = listaNumeros[i];
        }
    }

    return `El numero ${menor1} es el menor numero del array y El numero ${mayor1} es el mayor numero del array`;
  
}
encontrarMayorMenor();
console.log(encontrarMayorMenor());