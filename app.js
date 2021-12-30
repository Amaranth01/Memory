const ArrayCards = ["cards/image (2).png","cards/image (6).png","cards/image (5).png","cards/image (1).png","cards/image (4).png","cards/image (3).png"];
const ArrayCards2 = ["cards/image (2).png","cards/image (6).png","cards/image (5).png","cards/image (1).png","cards/image (4).png","cards/image (3).png"];

let choice = 0;
let index = 0;
let choiceOne;
let choiceTwo;
let timer;
let numberPairs = 0;
let pairs = document.getElementById('pairs')

// function to display images
function displayImg() {
    for (let i=0; i<=ArrayCards.length-1; i++) {
        //Loop that runs through the image array
        document.getElementById('plate').innerHTML += "couv.png";
    }
}
function displayImg2() {
    for (let i=0; i<=ArrayCards2.length-1; i++) {
        //Loop that runs through the image array
        document.getElementById('plate').innerHTML += "couv.png";
    }
}

displayImg();
displayImg2()

function shuffle () {
    for (let i = 0; i < ArrayCards.length; i++) {

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