var transacoes = [
    {
        tipoDeTransacao: "Transferência recebida",
        nome: "Fernando Kenzo Murata",
        data: "26/07",
        valor: "R$12,99",
        icone: "moneyin.png",
    },
    {
        tipoDeTransacao: "Compra no débito",
        nome: "Farmácia Pacheco",
        data: "02/07",
        valor: "R$499,99",
        icone: "moneyout.png",
    },
    {
        tipoDeTransacao: "Transferência recebida",
        nome: "Andréia Zelada Benitez Perpétuo",
        data: "20/07",
        valor: "R$122,99",
        icone: "moneyin.png",
    },
    {
        tipoDeTransacao: "Compra no débito",
        nome: "Amil Esportes",
        data: "16/06",
        valor: "R$68,99",
        icone: "moneyout.png",
    },
    {
        tipoDeTransacao: "Compra no crédito",
        nome: "Prodesporte",
        data: "09/09",
        valor: "R$80,00",
        icone: "moneyout.png",
    }
]

transacoes.forEach(function(item, indice){
    console.log(indice)
})

/*
function acharNome(){

    for(var indice = 0; indice < transacoes.length; indice += 1){
        if (transacoes[indice].nome == "Amil Esportes"){
   
            return transacoes[indice]
        }
        
    }
}

console.log(acharNome())
*/

var encontrado = transacoes.find(function(transacao){
    if (transacao.nome == "Amil Esportes"){
   
        return true
    }

    return false
    
})

console.log(encontrado)

