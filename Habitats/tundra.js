const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Piplup', 'Prinplup', 'Empoleon', '', 'Spheal', 'Sealeo', 'Walrein', 'Vanillite', 'Vanillish', 'Vanilluxe', 
    'Swinub', 'Piloswine', 'Mamoswine', 'Snorunt', 'Glalie', 'Froslass', 'Cubchoo', 'Beartic', 'Smoochum', 'Jynx', 
    'Sneasel', 'Weavile', 'Delibird', 'Cryogonal', 'Glaceon', 'Bergmite', 'Avalugg', 'MORELULL', 'SHIINOTIC', 'TYPE:NULL', 
    'SILVALLY', 'SANDSHREW(alola)', 'SANDSLASH(alola)', 'VULPIX(alola)', 'NINETALES(alola)', 'SNOM', 'FROSMOTH', 'ARCTOZOLT', 
    'MR. MIME(galar)', 'MR. RIME', 'DARUMAKA(galar)', 'DARMANITAN(galar, standard)', 'DARMANITAN(zen)', 'GREAVARD', 'HOUNDSTONE', 
    'CETODDLE', 'CETITAN', 'FRIGIBAX', 'ARCTIBAX'
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