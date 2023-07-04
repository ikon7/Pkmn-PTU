const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Sandile', 'Krokorok', 'Krookodile', 'Trapinch', 'Vibrava', 'Flygon', 'Burmy', 'Wormadam', 'Mothim', 'Nincada', 'Ninjask', 'Shedinja', 'Dwebble', 'Crustle', 'Doduo', 
    'Dodrio', 'Sandshrew', 'Sandslash', 'Gligar', 'Donphan', 'Hippopotas', 'Hippowdon', 'Golett', 'Golurk', 'Steelix', 'Cacnea', 'Cacturne', 'Numel', 'Camerupt', 'Darumaka',
    'Darmanitan', 'Xatu', 'Vullaby', 'Mandibuzz', 'Scraggy', 'Scrafty', 'Yamask', 'Cofagrigus', 'Dunsparce', 'Zangoose', 'Seviper', 'Durant', 'Maractus', 'Torkoal', 'Heatmor', 
    'Sigilyph', 'Gible', 'Gabite', 'Garchomp', 'Helioptile', 'Heliolisk'
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
