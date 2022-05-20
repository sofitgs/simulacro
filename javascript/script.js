class Jugador {
    constructor(id, nombre, precio, edad, equipo) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.edad = edad
        this.equipo = equipo
    }
}
const jugador1 = new Jugador(1, "Harry Kane", "100,00 millones de euros", 28, "Tottenham Hotspur")
const jugador2 = new Jugador(2, "Mohamed Salah", "100,00 millones de euros", 29, "Liverpool")
const jugador3 = new Jugador(3, "Phil Foden", "90,00 millones de euros", 21, "Manchester City")
const jugador4 = new Jugador(4, "Bruno Fernandes", "90,00 millones de euros", 27, "Manchester United")
const jugador5 = new Jugador(5, "Kevin De bruyne", "90,00 millones de euros", 30, "Manchester City")

let Jugadores = [jugador1, jugador2, jugador3, jugador4, jugador5]

/* Aquí esta la función que me faltaba para la primera entrega del proyecto final
let precioJugadores = [100,100,90,90,90]
let compraJugadores = [jugador1,jugador2, jugador3, jugador4, jugador5]

compraJugadores = Jugadores.sort((jugador1,jugador3) => {
    return jugador1.precio + jugador3.precio
})

console.log(compraJugadores) */

let divJugadores = document.getElementById('divJugadores')

Jugadores.forEach(jugador => {
    divJugadores.innerHTML += `
    <div id= "jugador$(jugador.id)">
        <div>
            <p>Nombre: ${jugador.nombre}</p>
            <p>Precio: ${jugador.precio}</p>
            <p>Edad: ${jugador.edad}</p>
            <p>Equipo: ${jugador.equipo}</p>
        </div>
    </div>`
})

let boton1 = document.getElementById('boton1')

boton1.addEventListener('click', () => {
    console.log("Sugerencia Enviada")
})


let jugadorJSON = JSON.stringify(jugador1)
console.log(jugadorJSON)

localStorage.setItem('Jugador1', 'Harry Kane')
localStorage.setItem('Jugador2', 'Mohamed Salah')
localStorage.setItem('Jugador3', 'Phil Foden')
localStorage.setItem('Jugador4', 'Bruno Fernandes')
localStorage.setItem('Jugador5', 'Kevin De Bruyne')

console.log(localStorage.getItem('Jugador5'))



