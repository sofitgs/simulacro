class Jugador {
    constructor(id, nombre, precio, edad, equipo) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.edad = edad
        this.equipo = equipo
    }
}
const jugador1 = new Jugador(1, "Kylian Mbappé", "160,00 millones de euros", 23, "PSG")
const jugador2 = new Jugador(2, "Erling Haaland", "150,00 millones de euros", 21, "Manchester City")
const jugador3 = new Jugador(3, "Vinicius Junior", "100,00 millones de euros", 21, "Real Madrid")
const jugador4 = new Jugador(4, "Mohamed Salah", "150,00 millones de euros", 29, "Liverpool")
const jugador5 = new Jugador(5, "Harry Kane", "100,00 millones de euros", 28, "Tottenham Hotspur")
const jugador6 = new Jugador(6, "Phil Foden", "90,00 millones de euros", 21, "Manchester City")
const jugador7 = new Jugador(7, "Bruno Fernandes", "90,00 millones de euros", 27, "Manchester United")
const jugador8 = new Jugador(8, "Kevin De bruyne", "90,00 millones de euros", 30, "Manchester City")
const jugador9 = new Jugador(9, "Neymar Junior", "90,00 millones de euros", 30, "PSG")
const jugador10 = new Jugador(10, "Dušan Vlahović", "85,00 millones de euros", 22, "Juventus")
const jugador11 = new Jugador(11, "Joshua Kimmich", "85,00 millones de euros", 27, "Bayern Münich")
const jugador12 = new Jugador(12, "Raheem Sterling", "85,00 millones de euros", 27, "Manchester City")



let Jugadores = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8,jugador9, jugador10, jugador11, jugador12]

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
    </div> ` 
})

let boton1 = document.getElementById('boton1')

boton1.addEventListener('click', () => {
    console.log("Sugerencia Enviada")
})

let boton2 = document.getElementById('boton2')

boton2.addEventListener('click', () => {
    console.log('Jugador11')
})

let boton3 = document.getElementById('boton3')

boton3.addEventListener('click', () => {
    console.log("Registrate para conocerlo")
})

let boton4 = document.getElementById('boton4')

boton4.addEventListener('click', () => {
    console.log('Jugador12')
})

let jugadorJSON = JSON.stringify(jugador1)
console.log(jugadorJSON)

localStorage.setItem('Jugador1', 'Kylian Mbappé')
localStorage.setItem('Jugador2', 'Erling Haaland')
localStorage.setItem('Jugador3', 'Vinicius Junior')
localStorage.setItem('Jugador4', 'Mohamed Salah')
localStorage.setItem('Jugador5', 'Harry Kane')
localStorage.setItem('Jugador6', 'Phil Foden')
localStorage.setItem('Jugador7', 'Bruno Fernandes')
localStorage.setItem('Jugador8', 'Kevin De Bruyne')
localStorage.setItem('Jugador9', 'Neymar Junior')
localStorage.setItem('Jugador10', 'Dušan Vlahović')
localStorage.setItem('Jugador11', 'Joshua Kimmich')
localStorage.setItem('Jugador12', 'Raheem Sterling')


console.log(localStorage.getItem('Jugador10'))


