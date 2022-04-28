// funcção que receber Array de numeros e devolve a media aritimetica

var numeros = [10, 20, 30, 20]

function mediaAritimetica(numeros){

    var somatorio = 0
    for(var indice = 0; indice < numeros.length; indice += 1){
        somatorio += numeros[indice]
    }
    
    var divisao = somatorio / numeros.length

    return divisao

}

var resultado = mediaAritimetica(numeros)

console.log(resultado)
