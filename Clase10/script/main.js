/*function relog(){
    setInterval(segundo,1000)
}
function segundo(){
    document.getElementById("relog").value = parseInt( document.getElementById("relog").value ) + 1
}
    <button onclick="relog()">Iniciar Relog</button>
    <input type="text" id="relog">
*/

function aleatorio(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function arrayDeNumerosAleatorios (array){
    for(i = 1; i <= 10; i++){
        array.push(aleatorio(1,10))
    }
    return array
}

let array = arrayDeNumerosAleatorios([])

array.forEach(element => {
    document.getElementById("lista-numeros").innerHTML += "<li>" + element + "</li>";
});

let array2 = [1,2,3,4,5,6]

//MONTRARLO CON WHILE
var i = 0
while(i < array2.length){
    document.getElementById("iterar-while").innerHTML += "<li>" + array2[i] + "</li>";
    i =  i + 1
}

//MONTRARLO CON FOR
for(i = 0 ; i < array2.length; i++){
    document.getElementById("iterar-for").innerHTML += "<li>" + array2[i] + "</li>";
}

//MONTRARLO CON FOREACH
array2.forEach(element => {
    document.getElementById("iterar-foreach").innerHTML += "<li>" + element + "</li>";
});

//MONTRARLO SUMANDOLE 1
array2.forEach(element => {
    element = element + 1
    document.getElementById("iterar-masuno").innerHTML += "<li>" + element + "</li>";
});

//SUMARLE UNO Y GUARDARLO EN UN ARRAY
function sumerleUno(array2){
    let array = []
    for(i = 0 ; i < array2.length; i++){
        let num = array2[i] + 1
        array.push(num)
    }
    return array
}
console.log(sumerleUno(array2))

//SACAR EL PROMEDIO
function promedio(array2){
    let acc = 0
    for(i = 0 ; i < array2.length; i++){
        acc = acc + array2[i]
    }
    return acc / array2.length
}
console.log(promedio(array2))

function alCuadrado(array2){
    let array = []
    for(i = 0 ; i < array2.length; i++){
        let num = Math.pow(array2[i],2)
        array.push(num)
    }
    return array
}
console.log(alCuadrado(array2))

function sumarPositivos(){
    let array =  [ 1, -4, 12, 0, -3, 29, -150]
    let acc = 0
    for(i = 0 ; i < array.length; i++){
        if (array[i] >= 0){
            acc = acc + array[i]
        }
    }
    return acc
}
console.log(sumarPositivos())

let arrayEj5 =  ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]

// A
function obtenerMenosDe6Letras(array){
    let array2 = []
    array.forEach(element => {
        if (element.length >= 6){
            array2.push(element)
        }
    });
    return array2
}

console.log(obtenerMenosDe6Letras(arrayEj5))

// B
function obtenerConM(array){
    let array2 = []
    array.forEach(element => {
        if (element[0] == "M"){
            array2.push(element)
        }
    });
    return array2
}
console.log(obtenerConM(arrayEj5))

//C
function ordenarAlfabeticamente(array){
    let array2 = array
    console.log(array2.sort())
}
ordenarAlfabeticamente(arrayEj5)

// D
function soloPrimeraLetra(array){
    let array2 = []
    array.forEach(element => {
        array2.push(element[0])
    });
    return array2
}
console.log(soloPrimeraLetra(arrayEj5))

//10. Crear dos párrafos en el body de una página. Capturar el evento click solo del primero
//utilizando la librería jQuery.

$("#parrafo").click(function(){
    document.getElementById("parrafo").style.color = "red"
})


//11. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo
//cuando sea presionada con el mouse.
$(".table").click(function(){
    document.getElementById("tabla").style.background = "#A1B7D9"
})

//12. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para  
//ocultar un elemento jQuery tiene un método llamado hide()
$("#li1").click(function(){
    $("#li1").hide()
})
$("#li2").click(function(){
    $("#li2").hide()
})
$("#li3").click(function(){
    $("#li3").hide()
})
$("#li4").click(function(){
    $("#li4").hide()
})

