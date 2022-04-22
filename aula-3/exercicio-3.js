/*crie um loop que encontre todos os números ímpares de 1 a 50
o !(n%2 == 0)
*/


function numerosImpares (contagem) {
    if (contagem%2 != 0)
        return true
    else
        return false
}

var contagem = 0


do{
    var eImpar = numerosImpares(contagem)
    if (eImpar)
        console.log (contagem)
    contagem += 1
} while(contagem < 51 )

