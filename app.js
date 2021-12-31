const ArrayCards = ["cards/image (2)","cards/image (6)","cards/image (5)","cards/image (1)","cards/image (4)","cards/image (3)"];
const ArrayCards2 = ["cards/image (2)","cards/image (6)","cards/image (5)","cards/image (1)","cards/image (4)","cards/image (3)"];

let choice = 0;
let index = 0;
let choiceOne;
let choiceTwo;
let timer;
let pairs = document.getElementById('pairs');
let cards = $('.cards');

function shuffle () {
    for (let i = 0; i < ArrayCards.length+ ArrayCards2.length; i++) {
       Math.floor(Math.random() * i);
        console.log("shuffle")
    }
}
shuffle();

cards.click(function (){
    let div = document.createElement("div");
    div.style.backgroundImage = "url("+ ArrayCards[index] + ArrayCards2[index] + ")";
    cards.append(div);
    //condition to manage user clicks
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
    console.log("click")

    //check if a pair has been found

    function check(index) {
        if (ArrayCards[index] === ArrayCards2[index]){
            pairs = +1;
        }
        else {
            pairs = -1;
        }
    }
});

