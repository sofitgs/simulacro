/*
//Simulacro 1 - Números de la suerte para la semana
const suerte = 8

function calcularsuerte(numero1,numero2){
    let resultado = numero1 + numero2
    console.log (resultado * suerte)
}

let numero1 = parseFloat(prompt("Ingrese su edad"))
let numero2 = parseFloat(prompt("Ingrese su año de nacimiento para conocer su número de la suerte"))

calcularsuerte (numero1,numero2)*/

/*
let numerossuerte = [1,2,3,4,94]
let multiplicadores = [3,6]
let divisores = [5,8,1000]

let numerofinalsuertudo = numerossuerte.concat(multiplicadores.concat(divisores))

numerossuerte.splice(1,3)

console.log(numerofinalsuertudo + 4) */

//Conoce los precios de los jugadores de fútbol activos

let jugadores = [
    {nombre: "Harry Kane", precio: "100,00 millones de euros", edad: 28, equipo: "Tottenham Hotspur"},
    {nombre: "Mohamed Salah", precio: "100,00 millones de euros",edad: 29, equipo: "Liverpool"},
    {nombre: "Phil Foden", precio: "90,00 millones de euros", edad: 21, equipo: "Manchester City"},
    {nombre: "Bruno Fernandes", precio: "90,00 millones de euros", edad: 27, equipo: "Manchester United"},
    {nombre: "Kevin De bruyne", precio: "90,00 millones de euros",edad: 30, equipo: "Manchester City"}

]

let top5 = prompt ("Ingrese el nombre del jugador para conocer si está en el top 5")
console.log (jugadores)