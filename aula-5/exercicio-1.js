function faixaEtaria(pessoas, idadeMinima, idadeMaxima){
    var dentroFaixaEtaria = []
    for(var indice = 0; indice < pessoas.length; indice += 1){
        if(pessoas[indice].idade >= idadeMinima && pessoas[indice].idade <= idadeMaxima){
            dentroFaixaEtaria.push(pessoas[indice])
        }
    }
    return dentroFaixaEtaria
}

var pessoa1 = {
    nome: "Yumi", 
    idade: 22, 
    altura: 1.56, 
    peso: 55,
}

var pessoa2 = {
    nome: "Yuki",
    idade: 3,
    altura: 1.0,
    peso: 18,
}

var pessoa = {
    nome: "Kenzo", 
    idade: 23, 
    altura: 1.62, 
    peso: 57, 
    falar: function(mensagem){
        window.alert (mensagem)
    },
    irmaos: [pessoa1, pessoa2]
}

var pessoas = [pessoa, pessoa1, pessoa2]

console.log(faixaEtaria(pessoas, 1, 30))