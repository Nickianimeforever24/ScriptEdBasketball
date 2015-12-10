var promptForPlayerName = function (playerNumber) {
    var name = prompt(playerNumber + " what is your name?");
    if (name.length>15) {
        alert("Stop, your name is too long")
    }
    
    return name;

};
