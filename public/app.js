var color;
var value;

var cardDeck = [color, value];

var yourCards = [];
var computerCards = [];

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
    help();
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

    switch (card.value) {
        case 10:
            playerCards.innerHTML += (`Jack of Hearts <br>`);
            break;
        case 11:
            playerCards.innerHTML += (`Queen of Hearts <br>`);
            break;
        case 12: 
            playerCards.innerHTML += (`King of Hearts <br>`);
            break;
        case 0: 
            playerCards.innerHTML += (`Ace of Hearts <br>`);
            break;
        default: 
            playerCards.innerHTML += (`${value+1} of Hearts <br>`)
        } 
    } 

    if ( card.color === 1 ) {
  
    switch (card.value) {
        case 10:
            playerCards.innerHTML += (`Jack of Clubs <br>`);
            break;
        case 11:
            playerCards.innerHTML += (`Queen of Clubs <br>`);
            break;
        case 12: 
            playerCards.innerHTML += (`King of Clubs <br>`);
            break;
        case 0: 
            playerCards.innerHTML += (`Ace of Clubs <br>`);
            break;
        default: 
            playerCards.innerHTML += (`${value+1} of Clubs <br>`)
        } 
    } 

    if ( card.color === 2 ) {

    switch (card.value) {
        case 10:
            playerCards.innerHTML += (`Jack of Spades <br>`);
            break;
        case 11:
            playerCards.innerHTML += (`Queen of Spades <br>`);
            break;
        case 12: 
            playerCards.innerHTML += (`King of Spades <br>`);
            break;
        case 0: 
            playerCards.innerHTML += (`Ace of Spades <br>`);
            break;   
        default: 
            playerCards.innerHTML += (`${value+1} of Spades<br>`)
        } 
    }

    if ( card.color === 3 ) {

    switch (card.value) {
        case 10:
            playerCards.innerHTML += (`Jack of Diamonds <br>`);
            break;
        case 11:
            playerCards.innerHTML += (`Queen of Diamonds <br>`);
            break;
        case 12: 
            playerCards.innerHTML += (`King of Diamonds <br>`);
            break;
        case 0: 
            playerCards.innerHTML += (`Ace of Diamonds <br>`);
            break;    
        default: 
            playerCards.innerHTML += (`${value+1} of Diamonds <br>`)
        } 
    }

} 

hit = () => {

    drawCard();

    console.table(cardDeck);

}

scoreResult = () => {

    var playerScore = document.getElementById('score');

    var result = 0;

    for ( var i = 0; i < cardDeck.length; i++ ) {

        if (cardDeck[i].value > 9 ) {
            result += 10;
        } else {
            result += cardDeck[i].value+1;
        }

    }

    playerScore.innerHTML = result;

    if ( result == 21 ) { 
        playerScore.innerHTML += '<br> YOU WIN, HUH BEGGINERS LUCK';
    } else if ( result > 21 ){
        playerScore.innerHTML += '<br> YOU LOSE HAHAHA U TRASH NOOB';
    } 

}