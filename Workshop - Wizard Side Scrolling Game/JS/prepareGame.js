function prepareGame() {
    let playScreen = document.getElementsByClassName('play-game')[0];
    return {

        createWizard(initState){

            let wizardElement = document.createElement('div');
            wizardElement.style.backgroundImage = "url('./resources/wizard.png')",
            wizardElement.style.position = 'absolute';
            wizardElement.style.width = initState.wizard.width +'px';
            wizardElement.style.height = initState.wizard.height + 'px';
            wizardElement.style.top = initState.wizard.posY + 'px';
            wizardElement.style.left = initState.wizard.posX + 'px';

            //wizardElement.classList.add
            playScreen.appendChild(wizardElement);
            this.wizardElement = wizardElement;
            return wizardElement
        },
        createFireball(wizard, fireball){
            let fireballElement = document.createElement('div');
            fireballElement.classList.add('fireball');
            fireballElement.style.position = 'absolute'
            fireballElement.style.left = wizard.posX + wizard.width + 'px';
            fireballElement.style.top = wizard.posY + 25 + 'px';
            fireballElement.style.width = fireball.width + 'px';
            fireballElement.style.height = fireball.height + 'px';
            this.fireballElement = fireballElement;
            playScreen.appendChild(fireballElement);
            return fireballElement
        },
        createBug(bugInfo){
           let bugEl = document.createElement('div');
           bugEl.classList.add('bugs');
           bugEl.style.position = 'absolute';
           bugEl.style.width = bugInfo.width + 'px';
           bugEl.style.height = bugInfo.height + 'px';
           bugEl.style.left = document.body.clientWidth - bugInfo.width + 'px';
           bugEl.style.top = Math.floor((Math.random() * document.body.clientHeight - bugInfo.height)) + 'px';
           playScreen.appendChild(bugEl);
           this.bugEl = bugEl;
           return bugEl;
        }

    }
}