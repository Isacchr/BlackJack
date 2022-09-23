var x;
var y;

var cardDeck = [x,y];


build = () => {


}

startGame = () => {

    var randomizer = (max) => { 
        return Math.floor(Math.random(cardDeck) * max)
    }

    console.log(randomizer(4) + "," + randomizer(14));




    const divPlayingField = document.getElementById('playingField');
    const btnStartGame = document.getElementById('btnStartGame');

    divPlayingField.hidden = false;
    btnStartGame.innerHTML = 'Start New Game';

}

