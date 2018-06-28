// adding listner to the whole collection of cards for performance
let cardsBox = document.getElementById('cards-box');

//getting restart button
let restart = document.getElementById('restart');

//defining the moves variable
let moves = 0;

//setting cariables to compare cards
let card1 = ''; let card2 = '';

function toggleCards() {
	console.log("togglingCards");
	let allCards = cardsBox.children;
	for (let i = 0; i < allCards.length; i++) {
		allCards[i].classList.toggle('open');
		allCards[i].classList.toggle('show');
	}

}

function startGame() {
	console.log("startGame");
	// Resetting the moves counter
	moves = 0;
	document.getElementById('moves').innerHTML = moves;
	
	// Shuffling the cards
	shuffle();

	//opening and closing the cards for the player to memorize
	toggleCards();
	setTimeout(toggleCards,3000);
}

function failed () {
	card1.classList.toggle('open');
	card1.classList.toggle('show');
	card2.classList.toggle('open');
	card2.classList.toggle('show');
}

function matched () {
	card1.classList.add('match');
	card2.classList.add('match');
}

function checkForMatch (){
	if (card2 !== '' && card1 !== card2){

		//increasing the moves and displaying
        moves++;
        document.getElementById('moves').innerHTML = moves;
    	
	if (card1.innerHTML === card2.innerHTML) {
	
		matched();

	}else {

		failed();

	}
	
	card2 = card1 = '';
	
	}
}

function shuffle() {
    let divs = Array.prototype.slice.call(cardsBox.childNodes);  //Converted to array the nodal list
    while (divs.length) {
        cardsBox.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

//Adding eventlistener to the restart button
restart.addEventListener('click', function () {
	// Resetting the moves counter
	moves = 0;
	document.getElementById('moves').innerHTML = moves;
	
	// Shuffling the cards
	shuffle();
	
	// Remove the matched cards
	let allCards = cardsBox.children;
	for (let i = 0; i < allCards.length; i++) {
		allCards[i].classList.remove('match');
		allCards[i].classList.remove('open');
		allCards[i].classList.remove('show');
	}
});


//Adding eventlistener to the deck of cards
cardsBox.addEventListener('click', function (evt) {
	const card = evt.target;
    if (card.nodeName === 'DIV') {  // ← verifies target is div of card
    	// toggles open and show class to display cards
        card.classList.toggle('open');
        card.classList.toggle('show');

    	//checking and sending for comparing
    	if (card1 === ''){
    		card1 = card;
    	} else if ( card1 !== ''){
    		card2 = card;
    	}
    	setTimeout(checkForMatch, 800);
    }
});

// Starting the game with all new refreshed hard coded boxes shuffled and resting
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    startGame();
  });