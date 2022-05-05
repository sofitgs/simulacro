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

class Jugadores {
    constructor(nombre,precio,edad,equipo){
        this.nombre = nombre
        this.precio = precio
        this.edad = edad
        this.equipo = equipo
    }
}
    const jugador1 = new Jugadores ("Harry Kane", "100,00 millones de euros", 28, "Tottenham Hotspur")
    const jugador2 = new Jugadores ("Mohamed Salah", "100,00 millones de euros",  29, "Liverpool")
    const jugador3 = new Jugadores ("Phil Foden",  "90,00 millones de euros",  21, "Manchester City")
    const jugador4 = new Jugadores ("Bruno Fernandes", "90,00 millones de euros", 27, "Manchester United")
    const jugador5 = new Jugadores ("Kevin De bruyne", "90,00 millones de euros", 30, "Manchester City")

let top5 = prompt ("Ingrese un número para conocer el jugador del top")
if (top5 == 1){
    console.log (jugador1)
}else if (top5 == 2){
    console.log(jugador2)
}else if (top5 == 3){
    console.log(jugador3)
}else if (top5 == 4){
    console.log(jugador4)
}else if (top5 == 5){
    console.log(jugador5)
}