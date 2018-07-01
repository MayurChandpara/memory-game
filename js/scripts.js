// The starting modal Js

// Getting modal
let modal = document.getElementById('startModal');

// Get the button that closes the modal
let modalBtn = document.getElementById('startButton');

// When page loads the modal pops in
document.addEventListener("DOMContentLoaded", function(event) {
    modal.style.display = "block";
  });

modalBtn.onclick = function(){
	modal.style.display = "none";
	// Starting the game with all new refreshed hard coded boxes shuffled and resting
	startGame();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
	// Starting the game with all new refreshed hard coded boxes shuffled and resting
        startGame();
    }
}

// Modal Ends and the other starts

// adding listner to the whole collection of cards for performance
let cardsBox = document.getElementById('cards-box');

//getting restart button
let restart = document.getElementById('restart');

//defining the moves variable and score
let moves = 0, score = 0;

//defining variables for timer
let done = '', sec = 0, trigger = '',min = 0, left = 0;

//trigger2 var for delay in Animation
let trigger2 = '', cond = 0;

// defining variables for wining the game
let matchedCards = 0;

//setting cariables to compare cards
let card1 = ''; let card2 = '';

function toggleCards() {
	let allCards = cardsBox.children;
	for (let i = 0; i < allCards.length; i++) {
		allCards[i].classList.toggle('open');

	}

}

function startTimer () {
		trigger = setInterval(timeCounter,1000);
}

function timeCounter() {
	sec++;
	min = 0;
	min = Math.floor(sec/60);
	left = sec%60;
	document.getElementById('timer').innerHTML = " " + min + ":" + left;
}

function stopTimer() {
	clearInterval(trigger);
	sec = 0;
	document.getElementById('timer').innerHTML = "  0:0 ";
}

function startGame() {
	// Resetting the moves counter
	moves = 0;
	document.getElementById('moves').innerHTML = moves;

	// Shuffling the cards
	shuffle();

	//opening and closing the cards for the player to memorize
	toggleCards();
	setTimeout(toggleCards,3000);
	// Starting the timer after the cards are done showing
	setTimeout(startTimer,3000);
	// reseting the matchedCards variable as the new game;
	matchedCards = 0;
}

function gameWon() {
  document.getElementById('score').innerHTML = " " + score + " Stars";
  document.getElementById('moves2').innerHTML = moves + " Moves";
  document.getElementById('timer2').innerHTML = min  + " Minutes And " + left + " Seconds" ;

  // the above same procedure for giing the stats to the optional Modal
  document.getElementById('score3').innerHTML = " " + score + " Stars";
  document.getElementById('moves3').innerHTML = moves + " Moves";
  document.getElementById('timer3').innerHTML = min  + " Minutes And " + left + " Seconds" ;

  // When the game is won the another modal will appear

	// The wining modal Js

	// Getting modal
	let winModal = document.getElementById('winModal');

	// Get the button that closes the modal
	let modalBtn = document.getElementById('restartButton');

	// When this function loads the modal pops in
	    winModal.style.display = "block";

	modalBtn.onclick = function(){
		winModal.style.display = "none";
		// Starting the game with all new refreshed hard coded boxes shuffled and resting
		restartFun();
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
		// Starting the game with all new refreshed hard coded boxes shuffled and resting
	        restartFun();
	    }
	}

	// Win Modal Ends Here
}


// Removing failed cards from everywhere
function removeFailed() {

  let allCards = cardsBox.children;
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove('failed');
  }
}

function failed () {
  card1.classList.add('failed');
	card2.classList.add('failed');

  card1.classList.remove('open');

	card2.classList.remove('open');

}

function matched () {
	card1.classList.add('matched');
	card2.classList.add('matched');
  card1.classList.remove('open');
	card2.classList.remove('open');

	matchedCards++;
	if(matchedCards === 8){
		gameWon();
	}
}

function checkForMatch (){
	if (card2 !== '' && card1 !== card2){

		//increasing the moves and displaying
      moves++;
      document.getElementById('moves').innerHTML = moves;

    // Calculate the score the score will be as:
    // used 10 moves to finish 3 stars and then for next 4 moves 2 stars and later 1 star
    if (moves >= 0 && moves <11) {
      score = 3;
      document.getElementById('stars').innerHTML = "<li><i class=\"far fa-star\"></i></li><li><i class=\"far fa-star\"></i></li><li><i class=\"far fa-star\"></i></li>";
    }else if(moves > 10 && moves <= 14){
        score = 2;
        document.getElementById('stars').innerHTML = "<li><i class=\"far fa-star\"></i></li><li><i class=\"far fa-star\"></i></li>";
      }else if (moves > 14) {
        score = 1;
        document.getElementById('stars').innerHTML = "<li><i class=\"far fa-star\"></i></li>";
      }
      document.getElementById('score').innerHTML = score;

	if (card1.innerHTML === card2.innerHTML) {

		matched();

	}else {

		failed();

	}

	card2 = card1 = '';

} else if (card1 === card2) {
  card1 = card2 = '';
}
}

function shuffle() {
    let divs = Array.prototype.slice.call(cardsBox.childNodes);  //Converted to array the nodal list
    while (divs.length) {
        cardsBox.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

function restartFun() {
    // Changing matchedCards to zero
    matchedCards = 0;

  	// Resetting the moves counter
  	moves = 0;
  	document.getElementById('moves').innerHTML = moves;

  	// Shuffling the cards
  	shuffle();

  	// Remove the matched, failed and opened cards
  	let allCards = cardsBox.children;
  	for (let i = 0; i < allCards.length; i++) {
  		allCards[i].classList.remove('matched');
  		allCards[i].classList.remove('open');
      allCards[i].classList.remove('failed');
  	}

  	//opening and closing the cards for the player to memorize
  	toggleCards();
  	setTimeout(toggleCards,3000);
  	stopTimer();
  	setTimeout(startTimer,3000);
}


//Adding eventlistener to the restart button
restart.addEventListener('click', restartFun);


//Adding eventlistener to the deck of cards
cardsBox.addEventListener('click', function (evt) {
	const card = evt.target;

    if (card.nodeName === 'DIV' && !card.classList.contains("matched")) {  // ← verifies target is div of card and also the card is not already matched

      // remoe all failed cards
      removeFailed();

      // toggles open and show class to display cards
        card.classList.toggle('open');

    	//checking and sending for comparing
    	if (card1 === ''){
    		card1 = card;
    	} else if ( card1 !== ''){
    		card2 = card;
    	}
    	checkForMatch();
    }
});

// The optional modal Js

// Getting modal
let optModal = document.getElementById('optModal');

// Get the button that closes the modal
let playAgainBtn = document.getElementById('playAgain');

// Get the button that will open the modal and use it to pop in
let clickHereBtn = document.getElementById('clickHere');

    clickHereBtn.onclick = function () {
      optModal.style.display = "block";
      winModal.style.display = "none";
    }

playAgainBtn.onclick = function(){
	optModal.style.display = "none";
  // Starting the game with all new refreshed hard coded boxes shuffled and resting
  restartFun();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Starting the game with all new refreshed hard coded boxes shuffled and resting
        restartFun();
    }
}

// Optional Modal Ends and the other starts
