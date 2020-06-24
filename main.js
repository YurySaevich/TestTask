let infoButton = document.getElementById('info-button'),
    betMinus = document.getElementById('minus-bet'),
    betPlus = document.getElementById('plus-bet');

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