const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const newCardBtn = document.getElementById("newcard-btn");
const playerEl = document.getElementById("player-el");

let player = {
  name: "DK",
  chips: 200,
};

let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";

playerEl.textContent = player.name + ": £" + player.chips;

function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

startBtn.addEventListener("click", function () {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
});

function renderGame() {
  cardsEl.textContent = "Cards: ";
  //for loop that renders out all the cards
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

newCardBtn.addEventListener("click", function () {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
});
