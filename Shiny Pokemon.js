function shinyPokemonRate() {
    let shinyOrNot = Math.floor(Math.random() * (50 - 1 + 1) + 1);

    if (shinyOrNot === 1) {
        return console.log("shiny");
    } else {
        return console.log("not shiny")
    }
};



module.exports = shinyPokemonRate;