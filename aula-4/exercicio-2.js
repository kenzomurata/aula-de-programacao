var numeros = [12, 134, 34, 67, 23, 90, 83, 42]

function indiceDoMaiorNumero(numeros){
    var maiorNumero = numeros[0]
    for(var indice = 0; indice < numeros.length; indice += 1){
        if (numeros[indice] > maiorNumero){
            maiorNumero = numeros[indice]
        }
        
    }
return numeros.indexOf(maiorNumero)

}


var indiceMaior = indiceDoMaiorNumero(numeros)

console.log(indiceMaior)