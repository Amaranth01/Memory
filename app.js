const ArrayCards = ["image (2).png","image (2).png","image (6).png","image (6).png","image (5).png","image (5).png","image (1).png","image (1).png","image (4).png","image (4).png","image (3).png","image (3).png"];
const ArrayCards2 = ["image (2).png","image (2).png","image (6).png","image (6).png","image (5).png","image (5).png","image (1).png","image (1).png","image (4).png","image (4).png","image (3).png","image (3).png"];

let choice = 0;
let choiceOne;
let choiceTwo;
let card = document.getElementsByClassName('card')
let img;

//function to display images
function displayImg() {
    for (let i=0; i<=ArrayCards.length-1; i++) {
        //Loop that runs through the image array
        document.getElementById('plate').innerHTML += '<img src="couv.png">'
    }
}
displayImg();

//Function to manage user clicks
function userChoice (cards) {
    if (choice === 2) {
        //Prevent user from clicking more than twice
        return;
    }
    if (choice === 0) {
        choiceOne = cards;
    }
}