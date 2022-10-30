
function initState() {
    let posX = Math.floor(Math.random() * 1000);
    let posY = Math.floor(Math.random() * 500);

    return {
        player: 'Orlin',
        score: 0,
        gameOver: false,
        wizard: {
            width: 82,
            height: 100,
            posY,
            posX,
            speed: 10
        },
        keys: {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            Space: false
        },
        fireball: {
            width: 40,
            height: 40,
            speed: 6
        },
        bug: {
            width: 40,
            height: 40,
            speed: 15,
            duration: 0
        }
    }
}