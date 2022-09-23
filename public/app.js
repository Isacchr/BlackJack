var x;
var y;

var cardDeck = [x,y];

var yourCards = [];

build = () => {



}

startGame = () => {

    yourCards = [];

    var randomizerCardDenomination= (max) => { 
        return Math.floor(Math.random(cardDeck) * max)
    }
    
    var randomizerCardType = (max) => { 
        return Math.floor(Math.random(cardDeck) * max)
    }

    for ( i=0; i<2; i++) {

        var cards = (randomizerCardDenomination(4) + "," + randomizerCardType(13));

        yourCards.push(cards); 

        if ( x == 0 ) {
            console.log('hjärter');
        } 

    }


    var playerCards = document.getElementById('playerCards');
    playerCards.innerHTML = yourCards;
    
    console.log(yourCards);

    /* if ( [x] == 0 ) {
        console.log('hjärter');
    };

    if ( [x] == 1 ) {
        console.log('klöver');
    }; */

    //help(yourCards);


    const divPlayingField = document.getElementById('playingField');
    const btnStartGame = document.getElementById('btnStartGame');

    divPlayingField.hidden = false;
    btnStartGame.innerHTML = 'Start New Game';

}

/* help = (yourCards) => {

    if( [x] == 0 ) {
        console.log('hjärter');
    }

    if( [x] == 1 ) {
        console.log('klöver');
    }

    if( [x] == 2 ) {
        console.log('spader');
    }

    if( [x] == 3 ) {
        console.log('diamant');
    }

} */

hit = () => {

    var randomizer = (max) => { 
        return Math.floor(Math.random(cardDeck) * max)
    }

    var cards = (randomizer(4) + "," + randomizer(13));
    yourCards.push(cards); 

    console.log(yourCards);

    /*var playerCards = document.getElementById('playerCards');
    playerCards.innerHTML = yourCards;*/

}
