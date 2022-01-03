let arrayCards = ["cards/image(2)","cards/image(6)","cards/image(5)","cards/image(1)","cards/image(4)","cards/image(3)","cards/image(2)","cards/image(6)","cards/image(5)","cards/image(4)","cards/image(1)","cards/image(3)"];
let click = 0;
let index = 0;
let timer;
let pairs = document.getElementById('pairs');
let cards = $('.cards');
let back = $('.back');


arrayCards.sort = (()=> 0.5 - Math.random());
console.log(arrayCards); //mélange OK

cards.click(function (){
    click++;

    //Manage user clicks
    if (click === 1) {
        const idx = cards.index($(this));
        this.style.backgroundImage = "url("+ arrayCards[idx] + ".png)";
    }
    else if (click === 2 ) {
        const idx = cards.index($(this));
        this.style.backgroundImage = "url("+ arrayCards[idx] + ".png)";
        click = 0;
    }

    if (arrayCards[index] === arrayCards[index]) {
        pairs++;
    }
});