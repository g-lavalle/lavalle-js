


function caluladora() {
    let operacion = ""
    let resultado = 0
    primerNumero = parseInt(prompt("Ingrese el primer número entero"))
    segundoNumero = parseInt(prompt("Ingrese el segundo número entero"))
    operacion = prompt("Que operacion desea hacer? \n  El resultado lo veras es la consola \n + - * /")

    switch (operacion) {
        case "+":
            resultado = primerNumero + segundoNumero
            console.log(`El resultado de ${primerNumero} más ${segundoNumero} es ${resultado}`)
            break;

        case "-":
            resultado = primerNumero - segundoNumero
            console.log(`El resultado de ${primerNumero} menos ${segundoNumero} es ${resultado}`)
            break;


        case "*":
            resultado = primerNumero * segundoNumero
            console.log(`El resultado de ${primerNumero} por ${segundoNumero} es ${resultado}`)
            break;

        case "/":
            if (segundoNumero == 0) {
                alert("No se puede dividir por 0, intente nuevamente")
                break;
            } else {
                resultado = primerNumero / segundoNumero
                console.log(`El resultado de ${primerNumero} dividido ${segundoNumero} es ${resultado}`)
                break;
            }
        default:
            break;
    }
}


function parOimpar() {
    let numeros = [];
    let numerosPares = [];
    let numerosImpares = [];

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt(`Ingresa el ${i + 1} número, debe ser positivo y entero:`))

        if (isNaN(numero) || numero <= 0) {
            alert("Por favor ingresa un número válido.")
            i--;
        } else {
            numeros.push(numero)
        }
    }

    for (numero of numeros) {
        if (numero % 2 === 0) {
            numerosPares.push(numero)
        } else {
            numerosImpares.push(numero)
        }
    }

    alert(`Los números pares son: ${numerosPares.join(", ")}`)
    alert(`Los números impares son: ${numerosImpares.join(", ")}`)
}

function trollInfinito() {
    let verificador = parseInt(prompt("Adivina el número entre 1 y 10 o no saldrás de aqui: "))
    while (verificador != 7) {
        verificador = parseInt(prompt("Buen intente, pero no saldrás de aqui aún. Intenta otra vez: "))
    }
}

let seleccion = 0
seleccion = prompt("Indique la opción que desea \n 1 - Para calculadora \n 2 - Para ordenar una lista por pares e impares \n 3 - Para jugar un juego")

switch (seleccion) {
    case "1":
        caluladora()
        alert("Para ver el resultado, deberas hacerlo por consola...")
        break;
    case "2":
        parOimpar()
        break;
    case "3":
        trollInfinito()
        break;
}
