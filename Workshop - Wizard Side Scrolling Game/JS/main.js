document.getElementById('startGame').addEventListener('click', startGame);
let startScreen = document.getElementsByClassName('start-game')[0];
let playScreen = document.getElementsByClassName('play-game')[0];
let state = initState();
let game = prepareGame();

document.addEventListener('keyup', keyUpFunc);
document.addEventListener('keydown', keyDownFunc)

let availableKeyCodeOptions = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Space'

]

function keyUpFunc (e){
    if(availableKeyCodeOptions.includes(e.code)){
        state.keys[e.code] = false;
    }
}

function keyDownFunc(e){
    if(availableKeyCodeOptions.includes(e.code)){
        state.keys[e.code] = true;
    }
}

function startGame (e) {
    startScreen.style.display = 'none';
    playScreen.style.display = 'block';

    start(state, game);
}