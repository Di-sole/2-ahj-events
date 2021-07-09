import GameController from './GameController';

const gameController = new GameController('.cell', '.miss-count', '.hit-count');

const startButton = document.querySelector('.start-button');
const сounter = document.querySelector('.counter-container');
const gameField = document.querySelector('.game-field');

startButton.addEventListener('click', (e) => {
  e.preventDefault();

  сounter.classList.remove('hidden');
  startButton.classList.add('hidden');
  gameController.startGame();

  setInterval(() => {
    if (!gameController.playing) {
      return;
    }

    gameController.endTurn();
  }, 1000);
});

gameField.addEventListener('click', (e) => {
  if (!gameController.playing) {
    return;
  }

  const elem = e.target.closest('.goblin');

  if (elem) {
    gameController.hitTheGoblin();
  }
});
