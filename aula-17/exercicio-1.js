function multiplicarArrayPorDois(numeros) {
    var resultado = numeros.map(function(numero){

        return numero * 2
    })

    return resultado
}

var resultado = multiplicarArrayPorDois([1, 2, 3, 4, 5])

console.log(resultado)
// [2, 4, 6, 8, 10]

function multiplicarArrayPor(multiplicador, numeros) {
    var resultado = numeros.map(function(numero){
        return numero * multiplicador
    })
    
    return resultado
}


var resultado2 = multiplicarArrayPor(5, [7, 8, 9, 10, 5])

console.log(resultado2)
