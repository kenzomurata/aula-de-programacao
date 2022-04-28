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

var pessoa3 = {
    nome: "Naomi",
    idade: 53,
    altura: 1.56,
    peso: 55,
}

pessoa.irmaos.push(pessoa3)

//console.log(pessoa.nome + " tem " + pessoa.idade + " anos, " + pessoa.altura + " metros de altura e pesa " + pessoa.peso + " quilos.")

console.log(pessoa)

pessoa.falar("Dale")