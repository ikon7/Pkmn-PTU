const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Turtwig', 'Grotle', 'Torterra', 'Totodile', 'Croconaw', 'Feraligatr', 'Mudkip', 'Marshtomp', 
    'Oddish', 'Gloom', '', 'Vileplume', 'Bellossom', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Poliwag', 
    'Poliwhirl', 'Poliwrath', 'Politoed', 'Tympole', 'Palpitoad', 'Seismitoad', 'Bidoof', 'Bibarel', 'Yanma', 
    'Yanmega', 'Shelmet', 'Ekans', 'Koffing', 'Weezing', 'Gulpin', 'Swalot', 'Garbodor', 'Skorupi', 'Drapion', 
    'Croagunk', 'Toxicroak', 'Tangrowth', 'Shroomish', 'Breloom', 'Barboach', 'Whiscash', 'Ducklett', 'Swanna', 
    'Corphish', 'Crawdaunt', 'Wooper', 'Quagsire', 'Drowzee', 'Hypno', 'Murkrow', 'Honchkrow', 'Farfetchd', 'Carnivine', 
    'Tropius', 'Stunfisk', 'Froakie', 'Frogadier', 'Greninja', 'Goomy', 'Sliggoo', 'Goodra', 'MAREANIE', 'TOXAPEX', 
    'MUDBRAY', 'MUDSDALE', 'DEWPIDER', 'ARAQUANID', 'MORELULL', 'SHIINOTIC', 'WIMPOD', 'GOLISOPOD', 'SOBBLE', 'DRIZZILE', 
    'INTELEON', 'TOXEL', 'TOXTRICITY', 'FUECOCO', 'CROCALOR', 'SKELEDIRGE', 'QUAXLY', 'QUAXWELL', 'QUAQUAVAL', 'TADBULB', 
    'BELLIBOLT', 'FLAMIGO', 'WOOPER', 'CLODSIRE'
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
