const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Petilil', 'Lilligant', 'Shroomish', 'Breloom', 'Exeggcute', 'Exeggutor', 'Mankey', 'Primeape', 'Purrloin', 
    'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Chatot', 'Kangaskhan', 'Shuckle', 
    'Pinsir', 'Heracross', 'Carnivine', 'Tropius', 'Volbeat', 'Illumise', 'Leafeon', 'Chespin', 'Quilladin', 'Chesnaught', 
    'Goomy', 'Sliggoo', 'Goodra', 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Treecko', 'Grovyle', 'Sceptile', 'Turtwig', 'Grotle', 
    'Torterra', 'Snivy', 'Servine', 'Serperior', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Togepi', 'Togetic', 
    'Togekiss', 'Slakoth', 'Vigoroth', 'Slaking', 'Oddish', 'Gloom', 'Vileplume', 'Bellossom', 'Bellsprout', 'Weepinbell', 
    'Victreebel', 'Seedot', 'Nuzleaf', 'Shiftry', 'Budew', 'Roselia', 'Roserade', 'Aipom', 'Ambipom', 'Lickitung', 'Lickilicky', 
    'Burmy', 'Wormadam', 'Mothim', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 
    'Scyther', 'Swablu', 'Altaria', 'Skorupi', 'Drapion', 'Tangela', 'Tangrowth', 'Cherubi', 'rowlet', 'dartrix', 'DECIDUEYE', 
    'LITTEN', 'TORRACAT', 'INCINEROAR', 'PIKIPEK', 'TRUMBEAK', 'TOUCANNON', 'GRUBBIN', 'CHARJABUG', 'VIKAVOLT', 'ORICORIO', 
    'DEWPIDER', 'ARAQUANID', 'COMFEY', 'ORANGURU', 'PASSIMIAN', 'EXEGGUTOR(alola)', 'GROOKEY', 'THWACKEYRILLABOOM', 'ZARUDE', 
    'SQUAWKABILLY', 'ANNIHILAPE'
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