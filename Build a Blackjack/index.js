let sum = 0
let cards =[]//array - ordered list of items
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let player = {
	name: "Karthik",
	chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $" +player.chips
//let cardsEl = document.getElementById('cards-el')
function getRandomCard(){
	let randomNumber = Math.floor(Math.random()*13 ) + 1
	if (randomNumber>10) {
		return 10
	}else if (randomNumber === 1) {
		return 11
	}else {
		return randomNumber
	}
}
function startgame(){
	isAlive = true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
}
function renderGame(){
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++){
		cardsEl.textContent += cards[i] + " "
	}
	sumEl.textContent = "Sum: " + sum
	//cardsEl.textContent = "Cards: " + cards[0] + " "+cards[1]
	if(sum <= 20){
        message = "Do you wnat to draw a new card?"
     }else if (sum === 21){
        message = "You've got BlackJack"
        hasBlackJack = true
    }else{
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard(){
	if (isAlive===true && hasBlackJack===false) {
		let card= getRandomCard()
		sum += card
		cards.push(card)
		console.log(cards)
		renderGame()
	}
}