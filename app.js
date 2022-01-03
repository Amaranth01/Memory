let arrayCards = ["cards/image(2).png","cards/image(6).png","cards/image(5).png","cards/image(1).png","cards/image(4).png","cards/image(3).png","cards/image(2).png","cards/image(6).png","cards/image(5).png","cards/image(4).png","cards/image(1).png","cards/image(3).png"];
let arrayStock = [];
let score = 0;
let pairs = document.getElementById('pairs');
let cards = $('.cards');

//shuffle the cards
arrayCards.sort = ( () => 0.5 - Math.random());
console.log(arrayCards); //mélange pas OK

cards.click(function (){
    let idx = cards.index($(this));
    //Manage user clicks
        this.style.backgroundImage = `url("` + arrayCards[idx] + `")`;

    arrayStock.push(idx);

    if (arrayStock.length === 2) {
        if (arrayCards[arrayStock[0]] === arrayCards[arrayStock[1]]) {
            score++;
            pairs.innerHTML = score;
            arrayStock = [];
        }
        else {
            score--;
            pairs.innerHTML = score;
            setTimeout( () =>  {
                cards[arrayStock[0]].style.backgroundImage = `url("cards/couv.png")`;
                cards[arrayStock[1]].style.backgroundImage = `url("cards/couv.png")`;
                arrayStock = [];
            },700);
        }
    }
    if ( arrayStock[idx] === arrayCards[0]) {
        alert('vous avez gagné');
    }
});