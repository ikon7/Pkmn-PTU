const shinyPokemonRate = require("../Shiny Pokemon");


var pokemonInRoute = [
    'Charmander', 'Charmeleon', 'Charizard', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Chimchar', 'Monferno', 'Infernape', 'Pignite', 'Emboar', 'Zubat', 
    'Golbat', 'Crobat', 'Cleffa', 'Clefairy', 'Clefable', 'Igglybuff', 'Jigglypuff', 'Wigglytuff', 'Whismur', 'Loudred', 'Exploud', 'Weepinbell', 'Victreebel', 
    'Shinx', 'Luxio', 'Luxray', 'Tynamo', 'Eelektrik', 'Eelektross', 'Magby', 'Magmar', 'Magmortar', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Solosis', 'Duosion', 
    'Reuniclus', 'Machop', 'Geodude', 'Graveler', 'Golem', 'Roggenrola', 'Boldore', 'Gigalith', 'Rhyhorn', 'Rhydon', 'Swinub', 'Piloswine', 'Aron', 'Lairon', 'Aggron', 
    'Klink', 'Klang', 'Klinklang', 'Gastly', 'Haunter', 'Gengar', 'Duskull', 'Dusclops', 'Dusknoir', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 
    'Rattata', 'Raticate', 'Teddiursa', 'Ursaring', 'Paras', 'Parasect', 'Ariados', 'Dwebble', 'Crustle', 'Joltik', 'Galvantula', 'Larvesta', 'Volcarona', 'Rufflet', 
    'Sandshrew', 'Sandslash', 'Diglett', 'Dugtrio', 'Cubone', 'Marowak', 'Gligar', 'Gliscor', 'Baltoy', 'Claydol', 'Hippopotas', 'Hippowdon', 'Drilbur', 'Excadrill', 
    'Nosepass', 'Onix', 'Steelix','Bronzor', 'Bronzong', 'Foongus', 'Amoonguss', 'Ferroseed', 'Ferrothorn', 'Slugma', 'Magcargo', 'Darumaka', 'Darmanitan', 'Glalie', 
    'Cubchoo', 'Beartic', 'Natu', 'Xatu', 'Woobat', 'Swoobat', 'Chingling', 'Chimecho', 'Wynaut', 'Wobbuffet', 'Mienfoo', 'Mienshao', 'Makuhita', 'Hariyama', 'Meditite', 
    'Medicham', 'Riolu', 'Lucario', 'Vullaby', 'Houndour', 'Houndoom', 'Scrafty', 'Sneasel', 'Weavile', 'Pawniard', 'Bisharp', 'Misdreavus', 'Mismagius', 'Shuppet', 'Banette', 
    'Dunsparce', 'Smeargle', 'Shuckle', 'Durant', 'Torkoal', 'Heatmor', 'Cryogonal', 'Mawile', 'Sableye', 'Spiritomb', 'Druddigon', 'Solrock', 'Lunatone', 'Sawk', 'Throh', 
    'Unown', 'Flareon', 'Umbreon', 'Omanyte', 'Kabutops', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Aerodactyl', 'Dratini', 
    'Dragonair', 'Dragonite', 'Larvitar', 'Pupitar', 'Tyranitar', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Gible', 'Gabite', 'Garchomp', 'Deino', 
    'Zweilous', 'Hydreigon', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Carbink', 'Noibat', 'Noivern'
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




