var x;
var y;

var cardDeck = [x,y];

var yourCards = [];

build = () => {


}

startGame = () => {

    yourCards = [];

    var randomizer = (max) => { 
        return Math.floor(Math.random(cardDeck) * max)
    }

    for ( i=0; i<2; i++) {

        var cards = (randomizer(4) + "," + randomizer(14));
        yourCards.push(cards); 

    }

    console.log(yourCards);

    const divPlayingField = document.getElementById('playingField');
    const btnStartGame = document.getElementById('btnStartGame');

    divPlayingField.hidden = false;
    btnStartGame.innerHTML = 'Start New Game';



}

