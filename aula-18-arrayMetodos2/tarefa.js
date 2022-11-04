/*
1- Escreva uma função que receba uma palavra e uma letra e retorne um Array contendo as posições na palavra em que aparece a letra.
Se a letra nao estiver na plavra, retorna um Array vazio.

Obs.: a função deve desconsiderar acentos.
*/
/*
function separarPalavra (palavra, letra){

    var letrasSeparadas = palavra.split("")

    console.log(letrasSeparadas)

    return letrasSeparadas
  
}

function filtrarLetra (){

    var posicapLetra = letrasSeparadas.filter(function(letra, indice){
        
    })

}


var posicaoLetra = letrasSeparadas.filter(function(letra, indice){
    return letra[indice]
})
*/
function posicoesLetrasNaPalavra(palavra, letra){

    var posicoesDaLetra = []

    for(var indice = 0; indice < palavra.length; indice += 1){
        if (palavra.charAt(indice) == letra){

            posicoesDaLetra.push(indice)

        }
    }
    return posicoesDaLetra

}

console.log(posicoesLetrasNaPalavra("albeta", "a"))