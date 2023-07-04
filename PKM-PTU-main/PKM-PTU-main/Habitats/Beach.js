const shinyPokemonRate = require("../Shiny Pokemon");


var pokemonInRoute = ['Squirtle', 'Wartortle', 'Blastoise', 'Totodile', 'Croconaw', 'Feraligatr', 'Piplup', 'Prinplup', 'Empoleon', 'Oshawott', 'Dewott', 'Samurott', 'Sandile', 'Krookodile', 'Nosepass', 'Slowpoke', 'Slowbro', 'Slowking', 'Wingull', 'Pelipper', 'Krabby', 'Kingler', 'Crawdaunt', 'Shellos', 'Gastrodon', 'Binacle', 'Barbaracle']


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