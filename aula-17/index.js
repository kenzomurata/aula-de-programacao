var cidades = ["Nova Friburgo", "Rio de Janeiro", "São Paulo", "Cantagalo", "Buenos Aires"]

//console.log (cidades)

var cidades2 = cidades.map(function(cidade, indice){
    console.log(indice)
    return "Cidade: " + cidade 
})

console.log ("cidades 1:", cidades)
console.log ("cidades 2:", cidades2)


