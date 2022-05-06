/*
1- crie uma função que recebe um array de livros e retorne esses livros em ordem alfabetica

2-crie uma função que receba um array de livros e retorne os livros pela data de publicação 
de forma decrescente

3-crie uma função que receba um array de livros que retorne o objeto contendo um array de editoras, 
sendo que as editoras nao podem se repetir

cada obj tem que ter titulo, data de publlicação, preço, editora (nome, CEP, CNPJ)
*/

//  -- 1 --
var livros = [
    {
        titulo: "O Papa Cáca",
        dataDePublicacao: "09/06/2420",
        preco: 36.90,
        editora: {
            nome: "Andréia Benitez",
            CEP: "28610-230",
            CNPJ: "66.698.763/0002-88"
        }
    },
    {
        titulo: "Xupingole",
        dataDePublicacao: "03/15/2001",
        preco: 6969.69,
        editora: {
            nome: "Rebimboca",
            CEP:"65284-125",
            CNPJ: "48.956.317/0001-74"
        }
    },
    {
        titulo: "A Volta Dos Que Não Foram",
        dataDePublicacao: "02/28/1998",
        preco: 2.50,
        editora: {
            nome: "Tão Tão Distante",
            CEP: "46318-833",
            CNPJ: "45.861.341/0008-64"
        }
    }
]

/*

livros.sort(function (x, y) {
    var a = x.titulo.toUpperCase(),
        b = y.titulo.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
})

console.log(livros)


// -- OU --

livros.sort(function(a, b) {
    if(a.titulo > b.titulo) {
        return -1;
    } else {
        return true;
    }
})

console.log(livros)

*/

// -- 2 --

/*

livros.sort(function (x, y) {
    let a = new Date(x.dataDePublicacao);
    let b = new Date(y.dataDePublicacao);
    return a - b;
})

console.log(livros)

*/
