var promptForPlayerName = function (playerNumber) {
    var name = prompt(playerNumber + " what is your name?");
    if (name.length>15) {
        alert("Stop, your name is too long")
    }
    
    return name;

};
var tryTwoPointShot = function() {
    var num1 = Math.random();
    var num2 = Math.random();
    if (num1>0.2 && num2>0.2) {
        return true;
    }
    else {
        return false;
    }
    if (num1<=0.2 && num2>=0.8) {
        return true;
    }
    else {
        return false;
    }
   
}
var tryThreePointShot = function(){
    var num1 = Math.random();
    var num2 = Math.random();
    if (num1<=0.2 || num2>=0.8){
        return true
    } else{
        return false
    }
}
 var getShotString = function(playerName,points,wasSuccessful) {
      var string = playerName + " attempted a " + points + " pointer";
      if (wasSuccessful === true) {
          return string + "it's was good"
      } else {
          return string + "it's was bad"
      }
 }
      var updateScore = function(wasShotMade,currentScore,points){
         
          if (wasShotMade === true){
              return currentScore + points
          }else{
              return currentScore
          }
      }
      var isEndOfGame = function(currentScore,playerName){
          if (currentScore >= 20){
              alert ("The game is over " + playerName + " won")
          }
          if(currentScore >= 20){
              return true
          }else{
              return false
          }
      }
      
        