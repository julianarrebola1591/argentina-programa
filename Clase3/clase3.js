//Ejercicio 1
function mostrarTipoDato (dato){
    return typeof(dato)
}

//Ejercicio 2
function restar (){
    let a = prompt ("Ingrese un numero (Ejercicio 2)")
    let b = prompt ("Ingrese un numero (Ejercicio 2)")
    let acc

    acc = a - b
    return acc
}

//Ejercicio 3
function intercambiar(a, b){
    let varTemporal = a
    a = b
    b = varTemporal
    console.log(a,b)
}

//Ejercicio 4
function calcularCuadrado(lado){
    let perimetro = lado * 4
    let superficie = lado * lado
    console.log("El perimetro es:" + perimetro, " y la superficie es: " + superficie)
}

//Ejercicio 5
function pasaraCelsius(fahrenheit) {
    console.log("Temperatura en Fahrenheit: "+ fahrenheit)
    console.log("Temperatura en Celsius:")
    return (fahrenheit-32) * (5/9) // retorno la ecuacion para hacer el pasaje utilizando el parametro
}
    
console.log(pasaraCelsius(75))


//Ejercicio 6
function factorial(){
    let num = prompt ("Ingrese un numero (Ejercicio 6)")
    let resultado = 1
    if (num > 0 && num <= 10){
        for (i = 1; i <= num; i++ ){
            resultado = resultado * i 
        }
        return resultado
    }else
    {
        return "El numero debe estar entre 1 y 10"
    }
}

//Ejercicio 7

function palindromos(){
    let palindromo = prompt ("Ingrese una frase (Ejercicio 7)")
    let string = "" // Variable para guardar la frase invertida
    palindromo = palindromo.toLowerCase() // Paso todo a minuscula por si se ingreso una frase con alguna mayuscula
    palindromo = palindromo.replace(/[^a-z]/g, "") // Elimino todos los caracteres extra (espacios o puntos)
    string = palindromo.toLowerCase() // Repito lo mismo pero en mi variable
    string = string.replace(/[^a-z]/g, "")

    string = string.split("")// Primero separo cada caracter para formar un array con ellos
    string = string.reverse()// invierto el orden de los caracteres
    string = string.join("")// Vuelvo a unir todo en un string
    // Por ultimo comparo ambas variables para comprobar si es palindromo
    if (string == palindromo){
        return "La frase es palindromo"
    }else
    {
        return "La frase no es palindromo"
    }
}

//Ejercicio 8

function mayusMinusculas(){
    let string = prompt("Ingrese un frase (Ejercicio 8)")
    return string.toLowerCase() + " , " + string.toLocaleUpperCase()
}

//Ejercicio 9
function calificar(){
    let nota = prompt("Ingrese la nota del alumno (Ejercicio 9)" )
    if (nota >= 0 && nota <= 10){
        if (nota >= 0 && nota <= 3){
            return "Muy Insuficiente"
        }
        if (nota >= 4 && nota <= 5){
            return "Insuficiente"
        }
        if (nota == 6){
            return "Suficiente"
        }
        if (nota == 7){
            return "Bien"
        }
        if (nota >= 8 && nota <= 9){
            return "Notable"
        }
        if(nota == 10){
            return "Sobresaliente"
        }
    }
    else{
        return "La nota debe estar entre 0 y 10"
    }
}

//Ejercicio 10
function calcularDiasDelMes(){

    let mes = prompt("Ingrese el numero del mes (Ejercicio 10)" )
        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
            return "Ese mes tiene 31 días"
        }
        if (mes == 4 || mes == 6 || mes == 9 ||  mes == 11){
            return "Ese mes tiene 30 días"
        }
        else{
            return "Ese mes tiene 28 días"
        }
}

//Ejercicio 11
function piramide(){
    let num = prompt("Ingrese la cantidad de pisos en la piramide (Ejercicio 11)" )
    let string = ""
    if (num >= 1 && num <= 10){
        for (i = 1; i <= num; i++){
            string = string + i
            console.log(string)
        }
    }
    else{
       console.log("Debe ingresar un numero entre 1 y 10") 
    }
}

//Ejercicio 12
function llenarCajas(){
    let stock = prompt("Ingrese la cantidad en el stock (Ejercicio 12)" )
    let cajas = prompt("Ingrese la cantidad por caja (Ejercicio 12)" )
    console.log("Se pueden llenar " + Math.floor(stock / cajas) + " cajas")
    console.log("Y sobraran " + stock % cajas)
}

//Ejercicio 13
function comprarCoche(){
    let codigo = prompt("Ingrese codigo de descuento (Ejercicio 13)" )
    if(codigo == "fiesta"){
        return "Su descuento será de 5%"
    }
    else{
        if(codigo == "focus"){
            return "Su descuento será de 10%"
        }
        else{
            return "el codigo no es valido"
        }
    }
}


console.log("Ejercicio 1")
console.log(mostrarTipoDato (78))
console.log(mostrarTipoDato ("Hola"))
console.log(mostrarTipoDato (false))

console.log("--------------")
console.log("Ejercicios 2")
console.log(restar())

console.log("--------------")
console.log("Ejercicios 3")
intercambiar(5,16)

console.log("--------------")
console.log("Ejercicios 4")
calcularCuadrado(48)

console.log("--------------")
console.log("Ejercicios 5")
console.log(pasaraCelsius(60))

console.log("--------------")
console.log("Ejercicios 6")
console.log(factorial())

console.log("--------------")
console.log("Ejercicios 7")
console.log(palindromos())

console.log("--------------")
console.log("Ejercicios 8")
console.log(mayusMinusculas())

console.log("--------------")
console.log("Ejercicios 9")
console.log(calificar())

console.log("--------------")
console.log("Ejercicios 10")
console.log(calcularDiasDelMes())

console.log("--------------")
console.log("Ejercicios 11")
piramide()

console.log("--------------")
console.log("Ejercicios 12")
llenarCajas()

console.log("--------------")
console.log("Ejercicios 13")
console.log(comprarCoche())