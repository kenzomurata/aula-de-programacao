var nomes = ["Kenzo", "João", "Alessandro"]

nomes[0] = "Naomi"

for(var indice = 0; indice < nomes.length; indice += 1){
    //console.log(nomes[indice])
}

var numeros = [12, 1, 69, 54, 90]

var numerosImpares = []

/*for(var indice = 0; indice < numeros.length; indice +=1){
    if (numeros[indice]%2 != 0){ 
        numerosImpares[indice] = numeros[indice]
    }
}
*/

for(var indice = 0; indice < numeros.length; indice +=1){
    if (numeros[indice]%2 != 0){ 
        numerosImpares.push(numeros[indice]) // adiciona no final
        numerosImpares.unshift(numeros[indice]) // adiciona no inicio
    }
}

numerosImpares.pop() // remove do final
numerosImpares.shift() // remove do incio
console.log(numerosImpares)


console.log("Index Of: ", numeros.indexOf(54))


console.log(numeros[numeros.length - 1])

