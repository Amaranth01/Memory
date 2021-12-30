const ArrayCards = ["cards/image (2)","cards/image (6)","cards/image (5)","cards/image (1)","cards/image (4)","cards/image (3)"];
const ArrayCards2 = ["cards/image (2)","cards/image (6)","cards/image (5)","cards/image (1)","cards/image (4)","cards/image (3)"];

let choice = 0;
let index = 0;
let choiceOne;
let choiceTwo;
let timer;
let pairs = document.getElementById('pairs')

// function to display images
function displayImg() {
    for (let i=0; i<= ArrayCards.length-1 + ArrayCards2.length-1; i++) {
        //Loop that runs through the image array
        document.getElementById('plate').innerHTML += '<img src="couv.png">';
    }
}

displayImg();

function shuffle () {
    for (let i = 0; i < ArrayCards.length-1 + ArrayCards2.length-1; i++) {

    }
}

//Function to manage user clicks
function userChoice (index) {
    if (choice === 2) {
        //Prevent user from clicking more than twice
        return;
    }

    if (choice === 0) {
        choiceOne = index;
        choice = 1;
        ArrayCards[index] = index;
    } else {
        choice = 2
        choiceTwo = index;
        //create a timeout for the player can look the cards
        timer = setTimeout('check()', 1000);
    }
    console.log("aze")
}

userChoice();

//check if a pair has been found
function check(index) {
    choice = 0;
    if (ArrayCards[index] === ArrayCards2[index]){
        pairs = +1;
    }
    else {
        pairs = -1;
    }
}