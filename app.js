let arrayCards = ["cards/image(2).png","cards/image(6).png","cards/image(5).png","cards/image(1).png","cards/image(4).png","cards/image(3).png","cards/image(2).png","cards/image(6).png","cards/image(5).png","cards/image(4).png","cards/image(1).png","cards/image(3).png"];
let click = 0;
let index = 0;
let timer;
let score = 0;
let pairs = document.getElementById('pairs');
let cards = $('.cards');

//shuffle the cards
arrayCards.sort = (() => 0.5 - Math.random());
console.log(arrayCards); //mélange OK

cards.click(function (){
    click++;

    //Manage user clicks
    if (click === 1) {
        let idx = cards.index($(this));
        console.log("idx : " + idx);
        this.style.backgroundImage = `url("` + arrayCards[idx] + `")`;
        //this.setAttribute("style", `background-image : url("` + arrayCards[idx] + `")`)
        console.log("aze");
    }

    else if (click === 2 ) {
        let idx = cards.index($(this));
        console.log("idx : " + idx)
        this.style.backgroundImage = `url("`+ arrayCards[idx] + `")`;
        click = 0;
        console.log("tyu");
    }

    if (click === click) {

        pairs.innerHTML = score++;
    }
});