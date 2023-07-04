const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Bulbasaur', 'Ivysaur', 'Venusaur', 'Chikorita', 'Bayleef', 'Meganium', 'Turtwig', 'Grotle', 'Torterra', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Caterpie', 
    'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Wurmple', 'Silcoon', 'Beautifly', 
    'Cascoon', 'Dustox', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Togepi', 'Togetic', 'Togekiss', 'Starly', 'Staravia', 'Staraptor', 'Pidove', 'Tranquill', 'Unfezant', 'Slakoth', 
    'Vigoroth', 'Slaking', 'Oddish', 'Gloom', 'Vileplume','Bellsprout', 'Weepinbell', 'Victreebel', 'Hoppip', 'Skiploom', 'Jumpluff', 'Ludicolo', 'Seedot', 'Nuzleaf', 
    'Shiftry', 'Budew', 'Roselia', 'Roserade', 'Pichu', 'Pikachu', 'Raichu', 'Elekid', 'Electabuzz', 'Electivire', 'Ralts', 'Kirlia', 'Gardevoir', 'Gallade', 'Abra', 
    'Kadabra', 'Gothita', 'Gothorita', 'Solosis', 'Duosion', 'Reuniclus', 'Duskull', 'Dusclops', 'Dusknoir', 'Rattata', 'Raticate', 'Sentret', 'Furret', 'Zigzagoon', 
    'Linoone', 'Bidoof', 'Bibarel', 'Patrat', 'Watchog', 'Meowth', 'Persian', 'Skitty', 'Delcatty', 'Glameow', 'Purugly', 'Minccino', 'Cinccino', 'Buneary', 'Lopunny', 
    'Snubbull', 'Granbull', 'Aipom', 'Ambipom', 'Deerling', 'Sawsbuck', 'Lickitung', 'Lickilicky', 'Munchlax', 'Snorlax', 'Burmy', 'Wormadam', 'Mothim', 'Nincada', 
    'Ninjask', 'Shedinja', 'Venonat', 'Venomoth', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Yanma', 'Yanmega', 'Pineco', 'Forretress', 'Kricketot', 'Kricketune', 
    'Combee', 'Vespiquen', 'Karrablast', 'Escavalier', 'Shelmet', 'Accelgor', 'Joltik', 'Galvantula', 'Scyther', 'Hoothoot', 'Noctowl', 'Taillow', 'Swellow', 'Rufflet', 
    'Braviary', 'Swablu', 'Altaria', 'Stunky', 'Skuntank', 'Skorupi', 'Drapion', 'Dugtrio', 'Gligar', 'Phanpy', 'Bonsly', 'Sudowoodo', 'Bronzor', 'Sunkern', 'Tangela', 
    'Cherubi', 'Cherrim', 'Whimsicott', 'Petilil', 'Lilligant', 'Foongus', 'Amoonguss', 'Shroomish', 'Breloom', 'Exeggcute', 'Exeggutor', 'Electrike', 'Manectric', 'Natu', 
    'Xatu', 'Spoink', 'Grumpig', 'Munna', 'Musharna', 'Mankey', 'Primeape', 'Lucario', 'Murkrow', 'Honchkrow', 'Purrloin', 'Liepard', 'Poochyena', 'Mightyena', 'Zorua', 
    'Zoroark', 'Misdreavus', 'Mismagius', 'Drifloon', 'Drifblim', 'Pansage', 'Minccino', 'Cinccino', 'Buneary', 'Lopunny', 'Snubbull', 'Granbull', 'Aipom', 'Ambipom', 'Deerling', 
    'Sawsbuck', 'Lickitung', 'Lickilicky', 'Munchlax', 'Snorlax', 'Burmy', 'Wormadam', 'Mothim', 'Nincada', 'Ninjask', 'Shedinja', 'Venonat', 'Venomoth', 'Ledyba', 'Ledian', 
    'Spinarak', 'Ariados', 'Yanma', 'Yanmega', 'Pineco', 'Forretress', 'Kricketot', 'Kricketune', 'Combee', 'Vespiquen', 'Karrablast', 'Escavalier', 'Shelmet', 'Accelgor', 
    'Joltik', 'Galvantula', 'Scyther', 'Hoothoot', 'Noctowl', 'Taillow', 'Swellow', 'Rufflet', 'Braviary', 'Swablu', 'Altaria', 'Stunky', 'Skuntank', 'Skorupi', 'Drapion', 'Dugtrio', 
    'Gligar', 'Phanpy', 'Bonsly', 'Sudowoodo', 'Bronzor', 'Sunkern', 'Tangela', 'Cherubi', 'Cherrim', 'Whimsicott', 'Petilil', 'Lilligant', 'Foongus', 'Amoonguss', 'Shroomish', 'Breloom', 
    'Exeggcute', 'Exeggutor', 'Electrike', 'Manectric', 'Natu', 'Xatu', 'Spoink', 'Grumpig', 'Munna', 'Musharna', 'Mankey', 'Primeape', 'Lucario', 'Murkrow', 'Honchkrow', 'Purrloin', 
    'Liepard', 'Poochyena', 'Mightyena', 'Zorua', 'Zoroark', 'Misdreavus', 'Mismagius', 'Drifloon', 'Drifblim', 'Pansage'
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