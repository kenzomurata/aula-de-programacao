var contagem = 0

while(contagem <=100){
    console.log("Contagem do while: ", contagem)
    contagem = contagem + 1
    //contagem += 1
    //contagem++ 
}

for(var indice = 0; indice <= 100; indice += 1){
    console.log("Contagem do for: ", indice)
}


do{
    console.log("Contagem do do..while: ", contagem)
    contagem -= 1
} while(contagem >200) //printa pelo menos uma vez o corpo do loop

//como 