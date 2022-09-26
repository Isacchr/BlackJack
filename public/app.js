var color;
var value;

var cardDeck = [color, value];

var yourCards = [];
var computerCards = [];


startGame = () => {

    cardDeck = [];
    yourCards = [];

    var playerCards = document.getElementById('playerCards');
    playerCards.innerHTML = '';

    for ( i=0; i<2; i++) {

        drawCard();

    }
    
    console.table(cardDeck);

    const divPlayingField = document.getElementById('playingField');
    const btnStartGame = document.getElementById('btnStartGame');

    divPlayingField.hidden = false;
    btnStartGame.innerHTML = 'Start New Game';

}

drawComputerCard = () => {

    var randomizer = (max) => Math.floor(Math.random(cardDeck) * max);

    color = randomizer(4);
    value = randomizer(13);

    card = {color , value };

    checkDuplicates(card);

}

drawCard = () => {

    var randomizer = (max) => Math.floor(Math.random(cardDeck) * max);

    color = randomizer(4);
    value = randomizer(13);

    card = {color , value };

    checkDuplicates(card);
    help(cardDeck);
    scoreResult();
}

checkDuplicates = (card) => {;

   if (yourCards.includes(`${card.color} ${card.value}`)) {
        hit();
    } else {
        yourCards.push(`${card.color} ${card.value}`);
        cardDeck.push(card);
    }

}

help = () => {

    var playerCards = document.getElementById('playerCards');

    

    if ( card.color === 0 ) {
        playerCards.innerHTML += (`hjärter ${value+1} <br>`)
        console.log('hjärter');
    } 
    if ( card.color === 1 ) {
        playerCards.innerHTML += (`klöver ${value+1} <br>`)
        console.log('klöver');
    } 
    if ( card.color === 2 ) {
        playerCards.innerHTML += (`spader ${value+1} <br>`)
        console.log('spader');
    }
    if ( card.color === 3 ) {
        playerCards.innerHTML += (`ruter ${value+1} <br>`)
        console.log('ruter');
    }

} 

hit = () => {

    drawCard();

    console.table(cardDeck);

   /* var playerCards = document.getElementById('playerCards');
    playerCards.innerHTML = yourCards;*/

}

scoreResult = () => {
    var playerScore = document.getElementById('score');

    var result = 0;

    for ( var i = 0; i < cardDeck.length; i++ ) {

        if (cardDeck[i].value+1 > 10 ) {
            result += 10;
        } else {
            result += cardDeck[i].value+1;
        }

    }

    playerScore.innerHTML = result;
}