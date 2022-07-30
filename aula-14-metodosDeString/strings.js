var nome = "Fernando Kenzo Murata"

//console.log(nome.length) 

nome.indexOf("e") // retorna posição

console.log(nome.indexOf("e"))

console.log(nome.indexOf("zo"))

console.log(nome.indexOf("zi"))

console.log(nome.indexOf("e", 2)) // retorna a partir da posição

console.log(nome.charAt(9))

var char = nome.charAt(9)

console.log(typeof char)

console.log(nome[10])

var nome2 = "Andréia Zelada Benitez Perpétuo"

console.log(nome.split(" Kenzo ")) // retorna array com as strings separadas a partir do divisor passado como argumento

console.log(nome.split(" "))

console.log(nome.split())

console.log(nome + nome2)

console.log(nome.concat(" ", nome2, nome2))

console.log(nome.concat(" ".concat(nome2))) // concatena

var espaco = " "

console.log(nome.concat(espaco.concat(nome2)))

console.log(nome.includes("Kenzo")) // true ou false -- true

console.log(nome.includes("Yumi")) // -- false

console.log(nome.includes("Kenzo", 10)) // a partir de uma posição

console.log(nome.includes("k")) // -- false

var nomeCaixaAlta = nome.toUpperCase()

console.log(nomeCaixaAlta)

var busca = "murata"

console.log(nomeCaixaAlta.includes(busca.toUpperCase()))






