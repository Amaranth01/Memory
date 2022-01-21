let arrayCards = ["cards/image(2).png","cards/image(6).png","cards/image(5).png","cards/image(1).png","cards/image(4).png","cards/image(3).png","cards/image(2).png","cards/image(6).png","cards/image(5).png","cards/image(4).png","cards/image(1).png","cards/image(3).png"];
let arrayStock = [];
let score = 0;
let pairs = document.getElementById('pairs');
let reload = $('#reload');
let cards = $('.cards');

//shuffle the cards
arrayCards.sort = (() => 0.5 - Math.random());
reload.hide();

cards.click(function (){
    let idx = cards.index($(this));
    //Manage user clicks
        this.style.backgroundImage = `url("` + arrayCards[idx] + `")`;

    arrayStock.push(idx);

    if (arrayStock.length === 2) {
        //Compare the cards, if the pair is found the score is incremented
        if (arrayCards[arrayStock[0]] === arrayCards[arrayStock[1]]) {
            score++;
            pairs.innerHTML = score;
            arrayStock = [];
        }
        else {
            setTimeout( () =>  {
                //Turn over the cards if the pair is not found
                cards[arrayStock[0]].style.backgroundImage = `url("cards/couv.png")`;
                cards[arrayStock[1]].style.backgroundImage = `url("cards/couv.png")`;
                arrayStock = [];
            },500);
        }
    }
    //conditions to complete the game
    if ( score === 6) {
        endGame();
    }
});

function endGame () {
    $('.line').hide();
    $('#point').hide();
    reload.show();
    $('#endGame').css({
        "width" : "80%",
        "height" : "80vh",
        "backgroundColor" : "#0000008B",
        "margin" : "0 auto",
        "z-index" : "2"
    });
    reload.click (function (){
        location.reload();
    });
    $('#resume').text("Votre score est de " + score + " points. Félicitation !");
}