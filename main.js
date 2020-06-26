let infoButton = document.getElementById('info-button'),
    betMinus = document.getElementById('minus-bet'),
    betPlus = document.getElementById('plus-bet'),
    turboSwitch = document.getElementById('switch'),
    turboButton = document.getElementById('turbo-button');

infoButton.addEventListener('mousedown', () => {
    infoButton.classList.remove('info-button');
    infoButton.classList.add('info-button-click');
}, false);
infoButton.addEventListener('mouseup', () => {
    infoButton.classList.add('info-button');
    infoButton.classList.remove('info-button-click');
}, false);


betMinus.addEventListener('mousedown', () => {
    betMinus.classList.remove('minus-bet');
    betMinus.classList.add('minus-bet-click');
}, false);
betMinus.addEventListener('mouseup', () => {
    betMinus.classList.add('minus-bet');
    betMinus.classList.remove('minus-bet-click');
}, false);

betPlus.addEventListener('mousedown', () => {
    betPlus.classList.remove('plus-bet');
    betPlus.classList.add('plus-bet-click');
}, false);
betPlus.addEventListener('mouseup', () => {
    betPlus.classList.add('plus-bet');
    betPlus.classList.remove('plus-bet-click');
}, false);

turboSwitch.addEventListener('click',() => {
    if (turboButton.dataset.id !== 'green') {
        turboButton.classList.add('turbo-button');
        turboButton.classList.remove('turbo-button-click');
        turboSwitch.classList.remove('turbo-button-switch-click');
        turboSwitch.classList.add('turbo-button-switch');
        turboButton.dataset.id = 'green';
    } else {
        turboButton.classList.add('turbo-button-click');
        turboButton.classList.remove('turbo-button');
        turboSwitch.classList.add('turbo-button-switch-click');
        turboSwitch.classList.remove('turbo-button-switch');
        turboButton.dataset.id = 'red';
    }
},false);
turboSwitch.addEventListener('mousedown',() => {
    turboSwitch.classList.remove('turbo-button-switch');
    turboSwitch.classList.add('turbo-button-switch-down');
},false);
turboSwitch.addEventListener('mouseup',() => {
    turboSwitch.classList.remove('turbo-button-switch-down');
    turboSwitch.classList.add('turbo-button-switch');
},false);

