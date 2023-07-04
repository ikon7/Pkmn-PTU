const shinyPokemonRate = require("../Shiny Pokemon");


var pokemonInRoute = [
    'GREAT TUSK', 'SCREAM TAIL', 'BRUTE BONNET', 'FLUTTER MANE', 'SLITHER WING', 'SANDY SHOCKS', 'IRON TREADS', 
    'IRON BUNDLE', 'IRON HANDS', 'IRON JUGULIS', 'IRON MOTH', 'IRON THORNS', 'ROARING MOON', 'IRON VALIANT'
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