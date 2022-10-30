
function start(state, game) {
    game.createWizard(state);
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
    }

    function gameLoop(state, game, timestamp) {
        console.log(timestamp)
        let {wizard} = state
        let {wizardElement} = game;
        console.log('gameLoop');

        modifyWizardPos(state, game)
        if(state.keys.Space){
            game.wizardElement.style.backgroundImage = "url('./resources/wizard-fire.png')";
            game.createFireball(wizard, state.fireball)
        } else {
            game.wizardElement.style.backgroundImage = "url('./resources/wizard.png')";
        }

        let bugsElement = document.querySelectorAll('.bugs');

        //fireball render
        document.querySelectorAll('.fireball').forEach(fireball =>{
            let fireballLeft = parseInt(fireball.style.left)
            bugsElement.forEach(bug =>{
                if (detectCollision(bug, fireball)) {
                    bug.remove();
                    fireball.remove()
                }
            })
            if(fireballLeft > document.body.clientWidth) {
                fireball.remove()
            } else {
                fireball.style.left = parseInt(fireballLeft) + state.fireball.speed + 'px';
            }
        })

        //move bug
        document.querySelectorAll('.bugs').forEach(bug => {
            let bugLeft = parseInt(bug.style.left);
            if(detectCollision(bug, wizardElement)){
                alert('Game Over');
                state.gameOver = true;
                return;
            }
            if(bugLeft < 0){
                bug.remove();
            } else {
                bug.style.left = bugLeft - state.bug.speed + 'px';
            }
         
        })

        if(timestamp > state.bug.duration){
            game.createBug(state.bug);
            state.bug.duration += timestamp + 3;
            // if(state.bug.duration > 100000000){
            //     state.bug.duration = 0;
            // } //could be 1000 here
        
        }


        //render wizard
        wizardElement.style.top = wizard.posY + 'px';
        wizardElement.style.left = wizard.posX + 'px';
        if(this.gameOver){
            return;
        }
        window.requestAnimationFrame(gameLoop.bind(null, state, game));
    }

    function modifyWizardPos (state, game) {
        let {wizard} = state;
        
        if(state.keys.ArrowUp){
            wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
        }
        if(state.keys.ArrowDown){
            wizard.posY = Math.min(wizard.posY + wizard.speed, window.innerHeight - wizard.height); //instead of window.innerHeight we can use document.body.clientHeight
        }
        if(state.keys.ArrowLeft){
            wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
        }
        if(state.keys.ArrowRight){
            wizard.posX = Math.min(wizard.posX + wizard.speed, window.innerWidth - wizard.width);
        }
    }

    function detectCollision(objA, objB){
        let firstObj = objA.getBoundingClientRect();
        let secObj = objB.getBoundingClientRect();

        let hasCollision = !(firstObj.top > secObj.bottom || firstObj.bottom < secObj.top || firstObj.right < secObj.left || firstObj.left > secObj.right);
        return hasCollision;

    }

