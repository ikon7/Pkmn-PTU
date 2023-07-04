let persistentArr = ["burned", "frozen", "paralysis", "poisoned"];
let volatileArr = ["bad sleep", "confused", "cursed", "disabled", "rage", "flinch", "infatuation", "sleep", "suppressed"];


function statusMod(statusAffliction) {
    if (persistentArr.includes(statusAffliction) === true) {
        return statusModValue = 10;
    } else if (volatileArr.includes(statusAffliction) === true) {
        return statusModValue = 5;
    }
};

function hpPercentMod(currentHP, maxHP) {
    let hpPercentage = (currentHP/maxHP) * 100;
    if (hpPercentage > 75) {
        return hpMod = 30;
    } else if (hpPercentage > 50) {
        return hpMod = 15;
    } else if (hpPercentage > 25) {
        return hpMod = 0;
    } else {
        return hpMod = (-30);
    };
};

function evoMod(pokemonEvolutionStageRemaining) {
    if (pokemonEvolutionStageRemaining === 2) {
        return evoMod = (-15);
    } else if (pokemonEvolutionStageRemaining === 1) {
        return evoMod = 0;
    } else if (pokemonEvolutionStageRemaining === 0) {
        return evoMod = 15;
    };
};


function catchRateCalculator(lvl, currentHP, maxHP, pokemonEvolutionStageRemaining, statusAffliction, rarity) {
    let captureRate = 100 - (lvl * 2) - hpPercentMod(currentHP, maxHP) - evoMod(pokemonEvolutionStageRemaining) + statusMod(statusAffliction) - rarity;
    console.log(captureRate);
}

//lvl, currentHP, maxHP, pokemonEvolutionStageRemaining, statusAffliction, rarity
catchRateCalculator();



