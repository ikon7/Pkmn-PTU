const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Squirtle', 'Wartortle', 'Blastoise', 'Oshawott', 'Dewott', 'Samurott', 'Horsea', 'Seadra', 'Kingdra', 
    'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Finneon', 'Lumineon', 'Chinchou', 'Lanturn', 
    'Carvanha', 'Sharpedo', 'Tentacool', 'Tentacruel', 'Frillish', 'Jellicent', 'Shellder', 'Cloyster', 'Corphish', 
    'Crawdaunt', '', 'Staryu', 'Starmie', 'Seel', 'Dewgong', 'Shellos', 'Gastrodon', 'Remoraid', 'Octillery', 'Mantyke', 
    'Mantine', 'Magikarp', 'Gyarados', 'Wailmer', 'Wailord', 'Qwilfish', 'Basculin', 'Relicanth', 'Corsola', 'Luvdisc', 
    'Alomomola', 'Lapras', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Lileep', 'Cradily', 'Anorith', 'Tirtouga', 
    'Carracosta', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'POPPLIO', 
    'BRIONNE', 'PRIMARINA', 'CRABRAWLER', 'CRABOMINABLE', 'WISHIWASHI(solo)', 'WISHIWASHI(school)', 'MAREANIE', 'TOXAPEX', 
    'DEWPIDER', 'ARAQUANID', 'PYUKUMUKU', 'BRUXISH', 'DHELMISE', 'CLOBBOPUS', 'GRAPPLOCT', 'PINCURCHIN', 'DREEPY', 'DRAKLOAK', 
    'DRAGAPULT', 'CORSOLA(galar)', 'CURSOLA', 'WATTREL', 'KILOWATTREL', 'WIGLETT', 'WUGTRIO', 'FINIZEN', 'FINIZEN(zero form)', 
    'PALAFIN(hero form)', 'VELUZA'
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
pokemonGenerator(pokemonInRoute, 3);

