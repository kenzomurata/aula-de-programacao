console.log("Hello World"); 
console.log("Kenzo");

//window.alert("Hello World");

var nome = "Kenzo";
console.log(nome)

var numero1 = 1
console.log(numero1)

var numero2 = 42
console.log(numero2)

var soma = numero1 + numero2
console.log(soma)

var subtracao = numero1 - numero2
console.log(subtracao)

var multiplicacao = numero1 * numero2
console.log("multi 1: ", multiplicacao)

var divisao = numero1 / numero2
console.log("divisão: ", divisao)

numero2 = 90
var multiplicacao2 = numero1 * numero2
console.log("multi 2: ", multiplicacao2)

var eMaiorDe18 = false

if(!eMaiorDe18){
    //window.alert("É adulto")
} else{
    //window.alert("É menor")
}

var idade = 11

if(idade >= 18){
    //window.alert("É adulto")
} else if(idade >= 12 && idade <= 17){
   // window.alert("É adolescente")
} else if(idade < 12){
   // window.alert("É criança")
}

var nome1 = "Kenzo";
var nome2 = "João";
var nome3 = "Alessandro";
var nome4 = "Adriana";

var aluno = nome

if(aluno == "João" || aluno == "Alessandro"){
    //window.alert("É aluno da Naomi")
} else if(aluno == "Kenzo"){
   //window.alert("É filho da Naomi")
} else if(aluno == "Adriana"){
   //window.alert("É amiga da Naomi")
} else{
    //window.alert("Desconhecido")
}

//var primeiroNome = "Fernando Kenzo"
//var sobrenome = "Murata"
//var nomeCompleto = primeiroNome + " " + sobrenome

//console.log(nomeCompleto)

var primeiroNome = "Fernando Kenzo"
var sobrenome = "Murata"
var idadeDaPessoa = 23

var frase = "O indivíduo de nome " + primeiroNome + " " + sobrenome + " possui " + idadeDaPessoa + " anos."
console.log(frase)