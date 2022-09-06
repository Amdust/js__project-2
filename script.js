
let cards = []
let sum = 0;

let hasBlackJack = false
let isAlive = false
let posibStarNewtGame = true
let message = ""
let messageEl = document.querySelector('#message-el')
let startGame = document.querySelector('.start__game')
let sumEl = document.querySelector('#sum__el')
let cardsEl = document.querySelector('#cards__el')
let newCard = document.querySelector('.new__card')

const playerEl = document.querySelector('#playet-el')

let player = {
  name:'Странник',
  chips: 145
}
function changePlayerScore () {
  playerEl.textContent = player.name + ": $" + player.chips
}
function getRandomCard () {
  let randomCard =  Math.floor(Math.random()*13 + 1)
    if (randomCard ===1 ) {
      return 11
    } else if  (randomCard >= 11) {
      return 10
    } else {
      return randomCard
    }
}
  const starGame = startGame.onclick = () => {
    if (posibStarNewtGame === true && player.chips>15) {
  isAlive = true
  hasBlackJack = false
  posibStarNewtGame = false
  player.chips -= 15
  changePlayerScore ()
  let firstCard = getRandomCard ()
  let secondCard = getRandomCard ()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard;
  renderGame () } else if (posibStarNewtGame === true && player.chips<15){
    alert('Деньги закончились странник, приходи, когда они появятся')
    alert('Пссс, обнови страницу')
  }
}

function renderGame () {
  sumEl.textContent = "Sum:" + sum
  cardsEl.textContent = "Cards: " 
  for( let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  if (sum < 21) {
    message = 'Тяни карту, странник' 
} else if (sum === 21) {
    message ='Поздравляю, странник, в этот раз смерть обошла тебя стороной' 
    hasBlackJack = true
    posibStarNewtGame = true
    player.chips += 30
  changePlayerScore ()
}  else {
    message = 'Судьба не благосклонна к тебе, странник, прощай' 
    isAlive = false
    posibStarNewtGame = true
}
  messageEl.textContent = message
}

  let newCardFn = newCard.onclick= () => { 
    if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard ()
    cards.push(card)
    sum += card
    renderGame()
    }
  }
