var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu nome ? ", function (nome){
    console.log("Seu nome é ", nome)
})

rl.on("close", function(){
    console.log('\nBYE BYE !!!');
    process.exit(0);
});