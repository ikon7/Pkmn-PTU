const shinyPokemonRate = require("../Shiny Pokemon");


var pokemonInRoute = [
    "Spheal","Sealeo","Walrein","Cloyster","Seel","Dewgong","Lapras","Bergmite","Avalugg",'POPPLIO', 'BRIONNE', 'PRIMARINA', 
    'CRABRAWLER', 'CRABOMINABLE', 'WISHIWASHI(solo)', 'WISHIWASHI(school)', 'EISCUE(ice face)', 'EISCUE(noice face)'
];


function pokemonGenerator(typing, amountOfPokemon) {
    let newPokemonArr = [];
    

    for (let counter = 0; counter < amountOfPokemon; counter++) {
        const chosenPokemon = typing[Math.floor(Math.random() * typing.length)];
        newPokemonArr.push(chosenPokemon);
        shinyPokemonRate();
    };
    console.log(newPokemonArr);
};



// (wild pokemon in route(dont change), # of pokemon wanted) example: (pokemonInRoute, 5) => random 5 pokemon 
pokemonGenerator(pokemonInRoute, );
