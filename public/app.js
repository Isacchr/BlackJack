var color;
var value;

var cardDeck = [color, value];

var yourCards = [];

build = () => {



}

startGame = () => {

    yourCards = [];

    var randomizer = (max) => Math.floor(Math.random(cardDeck) * max);
    
    for ( i=0; i<2; i++) {

        color = randomizer(4);
        value = randomizer(13);

        cards = {color , value };

        yourCards.push(cards); 

    }

    help(yourCards);
    
    console.table(yourCards);

    const divPlayingField = document.getElementById('playingField');
    const btnStartGame = document.getElementById('btnStartGame');

    divPlayingField.hidden = false;
    btnStartGame.innerHTML = 'Start New Game';

}

checkDuplicates = (cards) => {

    yourCards[color,value];

    if (yourCards.includes(cards)) {
        hit();
    } else {
        cardDeck.push(cards);
    }

}

help = (yourCards) => {

    var playerCards = document.getElementById('playerCards');

    yourCards.forEach(card => {

        if(card.color == 0) {
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

    var randomizer = (max) => { 
        return Math.floor(Math.random(cardDeck) * max)
    }

    color = randomizer(4);
    value = randomizer(13);

    cards = {color , value };

    yourCards.push(cards);  

    checkDuplicates(cards, yourCards);

    console.log(yourCards);

   /*var playerCards = document.getElementById('playerCards');
    playerCards.innerHTML = yourCards;*/

    help(yourCards);

}
