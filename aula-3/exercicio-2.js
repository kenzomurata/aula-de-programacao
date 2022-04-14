var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual a sua nota ? ", function (nota){
    
    console.log("Sua nota é ", nota)

})

rl.on("close", function(){
    console.log('\nBYE BYE !!!');
    process.exit(0);
});