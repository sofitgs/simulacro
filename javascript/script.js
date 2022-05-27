class Jugador {
    constructor(id, nombre, precio, edad, equipo) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.edad = edad
        this.equipo = equipo
    }
}
const jugador1 = new Jugador(1, "Kylian Mbappé", 160, 23, "PSG")
const jugador2 = new Jugador(2, "Erling Haaland", 150, 21, "Manchester City")
const jugador3 = new Jugador(3, "Vinicius Junior", 100, 21, "Real Madrid")
const jugador4 = new Jugador(4, "Mohamed Salah", 100, 29, "Liverpool")
const jugador5 = new Jugador(5, "Harry Kane", 100, 28, "Tottenham Hotspur")
const jugador6 = new Jugador(6, "Phil Foden", 90, 21, "Manchester City")
const jugador7 = new Jugador(7, "Bruno Fernandes", 90, 27, "Manchester United")
const jugador8 = new Jugador(8, "Kevin De bruyne", 90, 30, "Manchester City")
const jugador9 = new Jugador(9, "Neymar Junior", 90, 30, "PSG")
const jugador10 = new Jugador(10, "Dušan Vlahović", 85, 22, "Juventus")
const jugador11 = new Jugador(11, "Joshua Kimmich", 85, 27, "Bayern Münich")
const jugador12 = new Jugador(12, "Raheem Sterling", 85, 27, "Manchester City")


/* Aquí esta la función que me faltaba para la primera entrega del proyecto final*/
let precioJugadores = [160,150,100,100,100,90,90,90,90,85,85,85]
let jugadores = [jugador1,jugador2, jugador3, jugador4, jugador5,jugador6,jugador7,jugador8,jugador9,jugador10,jugador11,jugador12]

jugadores = jugadores.sort((jugador1,jugador3) => {
    return jugador1.precio + jugador3.precio
})

console.log(jugadores) 

let boton1 = document.getElementById('boton1')

boton1.addEventListener('click', () => {
    //librería
Swal.fire({
    icon: 'success',
    title: 'Sugerencia enviada',
    text: 'Tendremos en cuenta a tu jugador!',
    showCloseButton: true,
    //footer: '<a href="">Why do I have this issue?</a>'
  })
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

//operadores avanzados
let presupuesto = parseInt (prompt("Ingrese su presupuesto ficticio"))

(presupuesto == 160) ? console.log ("Si puedes comprar al Jugador más top") : console.log("Te falta presupuesto")

