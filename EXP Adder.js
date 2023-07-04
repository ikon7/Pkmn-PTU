
function PKMEXPAdder(totalLVLofCombatants, sigMultiplier, numPlayers, numPKM1, numPKM2, numPKM3, numPKM4, numPKM5, numPKM6) {
    let EXPPerPlayer = (totalLVLofCombatants * sigMultiplier)/ numPlayers

    function expPerPKM() {
        let trainer1 = EXPPerPlayer/numPKM1;
        let trainer2 = EXPPerPlayer/numPKM2;
        let trainer3 = EXPPerPlayer/numPKM3;
        let trainer4 = EXPPerPlayer/numPKM4;
        let trainer5 = EXPPerPlayer/numPKM5;
        let trainer6 = EXPPerPlayer/numPKM6;

        if (trainer1 % 1 !== 0) {
            trainer1 -= (trainer1 % 1);
            console.log(trainer1);
        } else {
            console.log(trainer1);
        };

        if (trainer2 % 1 !== 0) {
            trainer2 -= (trainer2 % 1);
            console.log(trainer2);
        } else {
            console.log(trainer2);
        };

        if (trainer3 % 1 !== 0) {
            trainer3 -= (trainer3 % 1);
            console.log(trainer3);
        } else {
            console.log(trainer3);
        };

        if (trainer4 % 1 !== 0) {
            trainer4 -= (trainer4 % 1);
            console.log(trainer4);
        } else {
            console.log(trainer4);
        };

        if (trainer5 % 1 !== 0) {
            trainer5 -= (trainer5 % 1);
            console.log(trainer5);
        } else {
            console.log(trainer5);
        };

        if (trainer6 % 1 !== 0) {
            trainer6 -= (trainer6 % 1);
            console.log(trainer6);
        } else {
            console.log(trainer6);
        };
    };

    expPerPKM();
}


//parameters: totalLVLofCombatants, sigMultiplier, numPlayers, numPKM1, numPKM2, numPKM3, numPKM4, numPKM5, numPKM6
PKMEXPAdder();