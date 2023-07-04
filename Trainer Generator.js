const pokeManiac = require("./trainerClass/pokemaniac");
const model = require("./trainerClass/model");
const waitress = require("./trainerClass/waitress");
const musician = require("./trainerClass/musician");
const backpacker = require("./trainerClass/backpacker");
const blackBelt = require("./trainerClass/blackBelt");
const worker = require("./trainerClass/worker");
const student = require("./trainerClass/student");
const officeWorker = require("./trainerClass/officeWorker");


function pokemonTeamGenerator(trainerTypeArray, amountOfPokemon) {
    let newTrainerArr = [];

    for (let counter = 0; counter < amountOfPokemon; counter++) {
        const chosenPokemon = trainerTypeArray[Math.floor(Math.random() * trainerTypeArray.length)];
        newTrainerArr.push(chosenPokemon);
    };
    console.log(newTrainerArr);
};


//parameters: pokemon type/trainer, num of pokemon wanted in trainer team
pokemonTeamGenerator(waitress, 1);

