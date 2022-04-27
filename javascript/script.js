//Simulacro 1 - Números de la suerte para la semana
const suerte = 8

function calcularsuerte(numero1,numero2){
    let resultado = numero1 + numero2
    console.log (resultado * suerte)
}

let numero1 = parseFloat(prompt("Ingrese su edad"))
let numero2 = parseFloat(prompt("Ingrese su año de nacimiento para conocer su número de la suerte"))

calcularsuerte (numero1,numero2)