const pokeManiac = require("./trainerClass/pokemaniac");
const model = require("./trainerClass/model");
const waitress = require("./trainerClass/waitress");
const musician = require("./trainerClass/musician");
const backpacker = require("./trainerClass/backpacker");
const blackBelt = require("./trainerClass/blackBelt");
const worker = require("./trainerClass/worker");
const student = require("./trainerClass/student");
const officeWorker = require("./trainerClass/officeWorker");
const artist = require("./trainerClass/artist");
const dragonTamer = require("./trainerClass/dragonTamer");
const cabbie = require("./trainerClass/cabbie");
const cook = require("./trainerClass/cook");
const courier = require("./trainerClass/courier");
const scientist = require("./trainerClass/scientist");


function pokemonTeamGenerator(trainerTypeArray, amountOfPokemon) {
    let newTrainerArr = [];

    for (let counter = 0; counter < amountOfPokemon; counter++) {
        const chosenPokemon = trainerTypeArray[Math.floor(Math.random() * trainerTypeArray.length)];
        newTrainerArr.push(chosenPokemon);
    };
    console.log(newTrainerArr);
};


//parameters: pokemon type/trainer, num of pokemon wanted in trainer team
pokemonTeamGenerator(courier, 1);

