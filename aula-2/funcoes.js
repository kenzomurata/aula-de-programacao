/*function comporFrase(nome, sobrenome, idade) {
    var frase = "O indivíduo de nome " + nome + " " + sobrenome + " possui " + idade + " anos."
    return frase
}

var fraseComposta = comporFrase("Fernando Kenzo", "Murata", 23)

//window.alert(fraseComposta)

function somar(numero1, numero2) {
    var soma = numero1 + numero2
    return soma
}

var operacao = somar(10, 5)

//window.alert(operacao)

function faseDaVida(idade) {
    if(idade >= 18) {
        return "É adulto"
    } else if(idade >=12 && idade <18) {
        return "É adolescente"
    } else if(idade <12) {
        return "É criança"
    } 
}

var momentoDaVida = faseDaVida(11)

var momentoDaVida2 = faseDaVida(19)

//window.alert(momentoDaVida + " " + momentoDaVida2)
*/

/*
function maiorNumero(numero1, numero2, numero3) {
    if(numero1 ==numero2 ==numero3) {
        return numero1
    }
    if(numero1 >numero2 && numero1 >numero3) {
        return numero1
    }
    if(numero2 >numero1 && numero2 >numero3) {
        return numero2
    }
    if(numero3 >numero1 && numero3 >numero2) {
        return numero3
    }
}

var numeros = maiorNumero(3, 31, 3)

window.alert(numeros)
*/
function maiorMenorNumeros(numero1, numero2, numero3) {
    if(numero1 == numero2 && numero2 == numero3 && numero1 == numero3) {
        return numero1
    }
    if(numero1 == numero2 && numero1  > numero3) { //numeros igual e maiores
        return numero1 + ", " + numero3
    }
    if(numero2 == numero3 && numero2 > numero1) {
        return numero2 + ", " + numero1
    }
    if(numero3 == numero1 && numero3 > numero2) { 
        return numero3 + ", " + numero2
    }44
    if(numero1 == numero2 && numero1 < numero3) { //numeros iguais e menores
        return numero3 + ", " + numero1
    }
    if(numero2 == numero3 && numero2 < numero1) {
        return numero1 + ", " + numero2
    }
    if(numero3 == numero1 && numero3 < numero2) {
        return numero2 + ", " + numero3
    }
    if(numero1 > numero2 && numero2 > numero3) { //numeros diferentes
        return numero1 + ", " + numero3
    }
    if(numero1 > numero2 && numero3 > numero2) {
        return numero1 + ", " + numero2
    }
    if(numero2 > numero1 && numero1 > numero3) {
        return numero2 + ", " + numero3
    }
    if(numero2 > numero3 && numero3 > numero1) {
        return numero2 + ", " + numero1
    }
    if(numero3  > numero1 && numero1 > numero2) {
        return numero3 + ", " + numero2
    }
    if(numero3 > numero2 && numero2 > numero1) {
        return numero3 + ", " + numero1
    }
}

var numeros = maiorMenorNumeros(3, 3, 1)

console.log(numeros)
