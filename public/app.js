var color;
var value;

var cardDeck = [color, value];

var yourCards = [];

build = () => {



}

startGame = () => {

    cardDeck = [];
    yourCards = [];

    var playerCards = document.getElementById('playerCards');
    playerCards.innerHTML = '';

    for ( i=0; i<2; i++) {

        drawCard();

    }

    help(cardDeck);
    
    console.table(cardDeck);

    const divPlayingField = document.getElementById('playingField');
    const btnStartGame = document.getElementById('btnStartGame');

    divPlayingField.hidden = false;
    btnStartGame.innerHTML = 'Start New Game';

}

drawCard = () => {

    var randomizer = (max) => Math.floor(Math.random(cardDeck) * max);

    color = randomizer(4);
    value = randomizer(13);

    cards = {color , value };

    checkDuplicates(cards);
}

checkDuplicates = (cards) => {;

   if (yourCards.includes(`${color} ${value}`)) {
        hit();
    } else {
        yourCards.push(`${color} ${value}`);
        cardDeck.push(cards);
    }

}

help = (cardDeck) => {

    var playerCards = document.getElementById('playerCards');
    playerCards.innerHTML += (`${color} ${value} <br>`)

    playerCards.innerHTML += '';

    cardDeck.forEach(card => {

        if( card.color == 0) {
            console.log('hjärter');
        }
        if( card.color == 1 ) {
            console.log('klöver');
        }
        if( card.color == 2 ) {
            console.log('spader');
        }
        if( card.color == 3 ) {
            console.log('ruter');
        }

    }); 

} 

hit = () => {

    drawCard();

    console.table(cardDeck);

    help(cardDeck);

   /* var playerCards = document.getElementById('playerCards');
    playerCards.innerHTML = yourCards;*/

}
