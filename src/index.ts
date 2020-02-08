import './styles.css';
import { getRandomInt } from './math';

// 1. find the valuable things

// Math.floor((Math.random() * 9) + 1);
const secretNumber = getRandomInt(1, 9);

const square = document.querySelectorAll('.square') as NodeListOf<
  HTMLDivElement
>;

let currentSquare = 1;
square.forEach(sq => {
  if (currentSquare === secretNumber) {
    sq.dataset.secret = 'true';
  }
  currentSquare++;
  sq.addEventListener('click', handleClick);
});

function handleClick() {
  const that = this as HTMLDivElement;
  const isWinner = that.dataset.secret === 'true';
  if (isWinner) {
    that.classList.add('winner');
  } else {
    that.classList.add('loser');
  }
  that.removeEventListener('click', handleClick);
}

// once you win, all the other guess should be marked as losers
// maybe make a play again button that resets everything
// if you win, display a message telling them how awesome they are
// if they lose (you picked everyone but the winner), they should be told they lose
