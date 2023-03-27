//Ejercicio 1
let colores = ["Verde", "Azul", "Rojo", "Violeta", "Negro"]
//Ejercicio 2
let color = colores[2]
//Ejercicio 3
console.log(color[0], colores[0])

//Ejercicio 4
function aleatorio(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(aleatorio(1,99))

//Ejercicio 5
let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(numeros)

//Ejercicio 6 y 7
function arrayDeNumerosAleatorios (array){
    for(i = 1; i <= 10; i++){
        array.push(aleatorio(1,10))
    }
    return array
}
console.log(arrayDeNumerosAleatorios([]))
console.log(arrayDeNumerosAleatorios([]))

//Ejercicio 8
function listaDeString (){
  let palabra = prompt("Ingrese una palabra")
  let string = ""
  console.log(palabra)
  while(palabra != "cancelar"){
  palabra = prompt("Ingrese una palabra")
  string = string + "- " + palabra + " "
  }

  return string
}

//console.log(listaDeString())

function listaEnArray(){
  let palabra
  let array = []
  while(palabra != "cancelar"){
    palabra = prompt("Ingrese una palabra")
    array.push(palabra)
  }
  return array
}

//console.log(listaEnArray())

//Ejercicio 9 y 10

function dolaresAPesos(){
  let inputDolar = document.getElementById("input-dolar").value
  document.getElementById("input-peso").value = inputDolar * 300
}

function pesosADolares(){
  let inputPeso = document.getElementById("input-peso").value
  document.getElementById("input-dolar").value = inputPeso / 300
}

//Ejercicio 11

function celciusAFahrenheit(){
  let inputCelcius = document.getElementById("input-celcius").value
  document.getElementById("input-fahrenheit").value = inputCelcius * (9/5) + 32
}

//Ejercicio 12

function enviarCaja(){
  let nombre = document.getElementById("input-nombre").value
  let material = document.getElementById("input-material").value
  let opcion
  if (document.getElementById("pequeño").checked){
    opcion = document.getElementById("pequeño").value
  }
  if (document.getElementById("mediano").checked){
    opcion = document.getElementById("mediano").value
  }
  if (document.getElementById("grande").checked){
    opcion = document.getElementById("grande").value
  }
  let comentario = document.getElementById("comentario").value

  document.getElementById("mensaje").value = nombre + " ha solicitado una caja " + material + " con una medida " + opcion + ". " + comentario 
}

//Ejercicio 13
let acc = 1
let numeroAleatorio = aleatorio(1,5)
console.log(numeroAleatorio)
function adivinarNumero(){
  let numeroIngresado = document.getElementById("input-adivinar").value
  if (numeroIngresado == numeroAleatorio){
    document.getElementById("respuesta").value = "Correcto!"
    document.getElementById("btn-adivinar").style.visibility = "hidden"
  }
  else{    
    if (acc >= 3){
      document.getElementById("respuesta").value = "Incorrecto! No tienes mas intentos"
      document.getElementById("btn-adivinar").style.visibility = "hidden"
  }else{
    document.getElementById("respuesta").value = "Incorrecto! Intente de nuevo"
    acc = acc + 1
    }
  }
}

//Ejercicio 14
var nombre = "";
function agregarNombre(){
  nombre = document.getElementById("input-name").value;
  document.getElementById("nombres").innerHTML += "<li>" + nombre + "<li>";
  return nombre
}