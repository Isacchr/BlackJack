
var cardDeck = new Array();

    cardDeck[0] = new Array(13);
    cardDeck[1] = new Array(13); 
    cardDeck[2] = new Array(13); 
    cardDeck[3] = new Array(13); 

    
build = () => {

    //console.log(cardDeck[1][4]);

}

startGame = () => {

    const min = Math.ceil(cardDeck[0][0]);
    const max = Math.floor(cardDeck[3][12]);

    var getRandomCard = Math.floor(Math.random() * max + min);

    console.log(getRandomCard);

    const divPlayingField = document.getElementById('playingField');
    const btnStartGame = document.getElementById('btnStartGame');

    divPlayingField.hidden = false;
    btnStartGame.innerHTML = 'Start New Game';

}

