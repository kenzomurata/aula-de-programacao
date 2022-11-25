fetch("https://pokeapi.co/api/v2/pokemon?limit=3").then(function(resposta){
    
    return resposta.json()

}).then(function(json){

    var pokemon1 = json.results[0]

    console.log(pokemon1)

    fetch(pokemon1.url).then(function(resposta){

        return resposta.json()

    }).then(function(json){

        var imagemURL = json.sprites.other["official-artwork"].front_default

        var tagImg = window.document.createElement("img")

        tagImg.src = imagemURL

        var bodies = document.getElementsByTagName("body")

        bodies[0].appendChild(tagImg)

    })

})

