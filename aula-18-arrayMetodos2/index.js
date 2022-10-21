
var numeros = [1, 6, 23, 87, 8, 53, 123, 65, 2, 22, 6]

var impares = numeros.filter(function(numero, indice){

    return numero%2 != 0
    
})

//console.log(impares)

var encontrado = numeros.find(function(numero){
    return numero == 179
})

//console.log(encontrado) // undefined

var encontrado2 = numeros.find(function(numero){
    return numero == 6
})

//console.log(encontrado2) // 6

var somando3 = numeros.map(function(numero){
    return numero + 3
})

//console.log(somando3)

var soma = numeros.reduce(function(acumulador, elementoAtual, indexAtual, arrayOriginal){ // preferência pelo "for"
    return acumulador + elementoAtual
}, 0)

//console.log(soma)

var frutas = ["🍓", "🍏", "🍉", "🍍", "🥭", "🥝"]

var vegetais = new Array("🥦", "🥕", "🥒", "🍅")

var salada = frutas.concat(vegetais)

//console.log(salada)

var paraJoaoComer = salada.filter(function(comida){

    return comida != "🥦" && comida != "🥒"

})

//console.log(paraJoaoComer)

var [morango, , melancia, , manga] = paraJoaoComer

//console.log(morango, melancia, manga)

//console.log("🍓" + "🍏")

var sacola = [vegetais, frutas]

//console.log(sacola)

//console.log(sacola[1][2])

//var [,[ , , , ,manga]] = sacola

//console.log(manga)


var mantimentos = ["🍞", "🧀", "🥓", "🍖", "🥞", "🍕"]

//sacola.push(mantimentos)

//sacola = [sacola[0], sacola[1], mantimentos]

//console.log(sacola)

sacola = sacola.concat([mantimentos])

console.log(sacola)
