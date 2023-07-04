const shinyPokemonRate = require("../Shiny Pokemon");

var pokemonInRoute = [
    'Bulbasaur', 'Ivysaur', 'Venusaur', 'Chikorita', 'Bayleef', 'Meganium', 'Torchic', 'Combusken', 
    'Blaziken', 'Tepig', 'Pignite', 'Emboar', 'Starly', 'Staravia', 'Staraptor', 'Pidove', 'Tranquill', 
    'Unfezant', 'NidoranF', 'Nidorina', 'Nidoqueen', 'NidoranM', 'Nidorino', 'Nidoking', 'Igglybuff', 'Jigglypuff', 
    'Wigglytuff', 'Happiny', 'Chansey', 'Blissey', 'Lillipup', 'Herdier', 'Stoutland', 'Oddish', 'Gloom', 
    'Vileplume', 'Hoppip', 'Skiploom', 'Jumpluff', 'Budew', 'Roselia', 'Roserade', 'Pichu', 'Pikachu', 'Mareep', 
    'Flaaffy', 'Ampharos', 'Shinx', 'Luxio', 'Luxray', 'Elekid', 'Electabuzz', 'Electivire', 'Rhyhorn', 'Rhydon', 
    'Rattata', 'Raticate', 'Sentret', 'Furret', 'Zigzagoon', 'Linoone', 'Bidoof', 'Bibarel', 'Patrat', 'Watchog', 
    'Skitty', 'Delcatty', 'Glameow', 'Purugly', 'Minccino', 'Cinccino', 'Buneary', 'Lopunny', 'Deerling', 'Sawsbuck', 
    'Lickitung', 'Lickilicky', 'Kricketot', 'Kricketune', 'Dwebble', 'Crustle', 'Karrablast', 'Scyther', 'Scizor', 
    'Spearow', 'Fearow', 'Doduo', 'Dodrio', 'Taillow', 'Swellow', 'Ekans', 'Arbok', 'Stunky', 'Skuntank', 'Gulpin', 
    'Swalot', 'Trubbish', 'Garbodor', 'Sandshrew', 'Sandslash', 'Diglett', 'Dugtrio', 'Bonsly', 'Sunkern', 'Sunflora', 
    'Tangela', 'Cottonee', 'Whimsicott', 'Foongus', 'Amoonguss', 'Vulpix', 'Ninetales', 'Growlithe', 'Arcanine', 
    'Ponyta', 'Rapidash', 'Buizel', 'Floatzel', 'Electrike', 'Manectric', 'Blitzle', 'Zebstrika', 'Spoink', 'Grumpig', 
    'Musharna', 'Drowzee', 'Hypno', 'Wynaut', 'Wobbuffet', 'Mankey', 'Primeape', 'Purrloin', 'Liepard', 'Poochyena', 
    'Mightyena', 'Zorua', 'Farfetchd', 'Dunsparce', 'Miltank', 'Tauros', 'Bouffalant', 'Audino', 'Spinda', 'Kangaskhan', 
    'Girafarig', 'Absol', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Ditto', 'Eevee', 'Espeon', 'Leafeon', 'Chespin', 
    'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 
    'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 
    'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aeigslash', 'Spritzee', 
    'Aromatisse', 'Swirlix', 'Slurpuff', 'Sylveon', 'Hawlucha', 'Dedenne', 'Klefki', 'Pumpkaboo', 'Gourgeist', 'rowlet', 
    'dartrix', 'DECIDUEYE', 'GRUBBIN', 'CHARJABUG', 'VIKAVOLT', 'ORICORIO', 'CUTIEFLY', 'RIBOMBEE', 'LYCANROC(morn)', 
    'LYCANROC(night)', 'LYCANROC(dusk)', 'MUDBRAY', 'MUDSDALE', 'FOMANTIS', 'LURANTIS', 'MORELULL', 'SHIINOTIC', 
    'BOUNSWEET', 'STEENEE', 'TSAREENA', 'COMFEY', 'RATTATA(alola)', 'RATICATE(alola)', 'SCORBUNNY', 'RABOOT', 'CINDERACE', 
    'SKWOVET', 'GREEDENT', 'ROOKIDEE', 'CORVISQUIRE', 'CORVIKNIGHT', 'BLIPBUG', 'DOTTLER', 'ORBEETLE', 'NICKIT', 'THIEVUL', 
    'GOSSIFLEUR', 'ELDEGOSS', 'WOOLOO', 'DUBWOOL', 'YAMPER', 'BOLTUND', 'ROLYCOLY', 'APPLIN', 'FLAPPLE', 'APPLETUN', 'SIZZLIPEDE', 
    'CENTISKORCH', 'STONJOURNER', 'CUFANT', 'COPPERAJAH', 'DRACOZOLT', 'DRACOVISH', 'ARCTOVISH', 'MEOWTH(galar)', 'PERRSERKER', 
    'FARFETCHD(galar)', 'SIRFETCHD', 'ZIGZAGOON(galar)', 'LINOONE(galar)', 'OBSTAGOON', 'SPRIGATITO', 'FLORAGATO', 'MEOWSCARADA', 
    'LECHONK', 'OINKOLOGNE(male)', 'OINKOLOGNE(female)', 'NYMBLE', 'LOKIX', 'PAWMI', 'PAWMO', 'PAWMOT', 'TANDEMAUS', 'MAUSHOLD', 
    'FIDOUGH', 'DACHSBUN', 'SHROODLE', 'GRAFAIAI', 'CAPSAKID', 'SCOVILLAIN', 'FLITTLE', 'ESPATHRA', 'BOMBIRDIER', 'CYCLIZAR', 
    'ANNIHILAPE', 'FARIGIRAF', 'DUDUNSPARCE', 'Tauros(paldea, combat breed)', 'Tauros(paldea, blaze breed)', 
    'Tauros(paldea, aqua breed)'
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