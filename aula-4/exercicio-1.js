var nomes = ["Kenzo", "João", "Alessandro"]

var frase = ""

for(var indice = 0; indice < nomes.length; indice += 1){
    frase = frase + nomes[indice]
    if (indice != nomes.length - 1){
        frase = frase + " conhece "
    }
}

console.log(frase)
