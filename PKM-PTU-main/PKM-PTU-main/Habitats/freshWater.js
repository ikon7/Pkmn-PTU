const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Squirtle', 'Wartortle', 'Blastoise', 'Totodile', 'Croconaw', 'Feraligatr', 'Lotad', 'Lombre', 'Ludicolo', 'Tynamo', 'Eelektrik', 'Eelektross', 'Poliwag', 
    'Poliwhirl', 'Poliwrath', 'Politoed', 'Azurill', 'Marill', 'Azumarill', 'Tympole', 'Palpitoad', 'Seismitoad', 'Surskit', 'Masquerain', 'Croagunk', 'Toxicroak', 
    'Slowpoke', 'Slowbro', 'Slowking', 'Goldeen', 'Seaking', 'Barboach', 'Whiscash', 'Carvanha', 'Sharpedo', 'Ducklett', 'Swanna', 'Psyduck', 'Golduck', 'Wooper', 
    'Quagsire','Buizel', 'Floatzel', 'Magikarp', 'Gyarados', 'Feebas', 'Milotic', 'Farfetchd', 'Stunfisk', 'Vaporeon', 'Dratini', 'Dragonair', 'Dragonite', 'Froakie', 
    'Frogadier', 'Greninja'
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