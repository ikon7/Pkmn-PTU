const shinyPokemonRate = require("./Shiny Pokemon");
const urban = require("./Habitats/urban");
const tundra = require("./Habitats/urban");
const taiga = require("./Habitats/taiga");
const rainForest = require("./Habitats/rainForest");
const ocean = require("./Habitats/ocean");
const mountain = require("./Habitats/mountain");
const marsh = require("./Habitats/marsh");
const grassland = require("./Habitats/grassland");
const freshWater = require("./Habitats/freshWater");
const forest = require("./Habitats/forest");
const desert = require("./Habitats/urban");
const cave = require("./Habitats/cave");
const beach = require("./Habitats/beach");
const artic = require("./Habitats/artic");
const areaZero = require("./Habitats/areaZero");

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
pokemonGenerator(marsh, 2);