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
        console.log('hjärter');
    switch (card.value) {
        case 10:
            playerCards.innerHTML += (`Hjärter Knäkt <br>`);
            break;
        case 11:
            playerCards.innerHTML += (`Hjärter Dam <br>`);
            break;
        case 12: 
            playerCards.innerHTML += (`Hjärter Kung <br>`);
            break;
        case 1:
            playerCards.innerHTML += (`Hjärter Ess <br>`);
            break;
        default: 
            playerCards.innerHTML += (`Hjärter ${value+1} <br>`)
        } 
    } 

    if ( card.color === 1 ) {
        console.log('klöver');
    switch (card.value) {
        case 10:
            playerCards.innerHTML += (`Klöver Knäkt <br>`);
            break;
        case 11:
            playerCards.innerHTML += (`Klöver Dam <br>`);
            break;
        case 12: 
            playerCards.innerHTML += (`Klöver Kung <br>`);
            break;
        case 1:
            playerCards.innerHTML += (`Klöver Ess <br>`);
            break;
        default: 
            playerCards.innerHTML += (`Klöver ${value+1} <br>`)
        } 
    } 

    if ( card.color === 2 ) {
        console.log('spader');
    switch (card.value) {
        case 10:
            playerCards.innerHTML += (`Spader Knäkt <br>`);
            break;
        case 11:
            playerCards.innerHTML += (`Spader Dam <br>`);
            break;
        case 12: 
            playerCards.innerHTML += (`Spader Kung <br>`);
            break;
        case 1:
            playerCards.innerHTML += (`Spader Ess <br>`);
            break;
        default: 
            playerCards.innerHTML += (`Spader ${value+1} <br>`)
        } 
    }

    if ( card.color === 3 ) {
        console.log('ruter');
    switch (card.value) {
        case 10:
            playerCards.innerHTML += (`Ruter Knäkt <br>`);
            break;
        case 11:
            playerCards.innerHTML += (`Ruter Dam <br>`);
            break;
        case 12: 
            playerCards.innerHTML += (`Ruter Kung <br>`);
            break;
        case 1:
            playerCards.innerHTML += (`Ruter Ess <br>`);
            break;
        default: 
            playerCards.innerHTML += (`Ruter ${value+1} <br>`)
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

        if (cardDeck[i].value+1 > 10 ) {
            result += 10;
        } else {
            result += cardDeck[i].value+1;
        }

    }

    playerScore.innerHTML = result;

    if ( result == 21 ) { 
        alert('YOU WON')
    } else if ( result > 21 ){
        alert('YOU LOST')
    }

}