import goblin from '../img/goblin.png';

export default class GameController {
  constructor(cellSelector, missCountSelector, hitCountSelector) {
    this.cells = document.querySelectorAll(cellSelector);
    this.missCount = document.querySelector(missCountSelector);
    this.hitCount = document.querySelector(hitCountSelector);
    this.playing = false;
    this.activeCell = 0;
  }

  startGame() {
    this.playing = true;
  }

  getRandomCell() {
    let randomCell = this.activeCell;

    while (randomCell === this.activeCell) {
      randomCell = Math.floor(Math.random() * this.cells.length);
    }

    return randomCell;
  }

  addGoblin() {
    this.cells[this.activeCell].innerHTML = `<img class="goblin" src=${goblin} alt="goblin">`;
  }

  deleteGoblin() {
    this.cells[this.activeCell].innerHTML = '';
  }

  hitTheGoblin() {
    ++this.hitCount.textContent;
    this.deleteGoblin();
  }

  countTheMiss() {
    ++this.missCount.textContent;
  }

  nextTurn() {
    this.activeCell = this.getRandomCell();
    this.addGoblin();
  }

  endTurn() {
    const cellHasGoblin = this.cells[this.activeCell].hasChildNodes();

    if (cellHasGoblin) {
      this.countTheMiss();
      this.deleteGoblin();
    }

    if (this.missCount.textContent >= 5) {
      this.gameOver();
      return;
    }

    this.nextTurn();
  }

  gameOver() {
    this.playing = false;
    this.missCount.textContent = 'Вы проиграли!';
  }
}
