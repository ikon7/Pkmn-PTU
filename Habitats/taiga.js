const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Piplup', 'Prinplup', '', 'Empoleon', 'Slakoth', 'Vigoroth', 'Slaking', 'Vanillite', 'Vanillish', 'Vanilluxe', 
    'Swinub', 'Piloswine', 'Teddiursa', 'Ursaring', 'Munchlax', 'Snorlax', 'Bonsly', 'Sudowoodo', 'Snover', 'Abomasnow', 
    'Snorunt', 'Glalie', 'Froslass', 'Cubchoo', 'Beartic', 'Spoink', 'Grumpig', 'Smoochum', 'Jynx', 'Sneasel', 'Weavile', 
    'Stantler', 'Delibird', 'Glaceon', 'YUNGOOS', 'GUMSHOOS', 'ROCKRUFF', 'LYCANROC(morn)', 'LYCANROC(night)', 'LYCANROC(dusk)', 
    'MORELULL', 'SHIINOTIC', 'STUFFUL', 'BEWEAR', 'KOMALA', 'SNOM', 'FROSMOTH'
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