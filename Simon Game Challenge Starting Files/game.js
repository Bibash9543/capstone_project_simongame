var buttonColours = ["red","blue","green","yellow"];
var newArray = [];
function nextSequence(){
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber*4 -1);
    var randomChoosenColour = buttonColours[randomNumber];
    newArray.push(randomChoosenColour);

}

$("button #")