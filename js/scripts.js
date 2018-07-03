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
let done = '', sec = -3, trigger = '',min = 0, left = 0; //Initialising -3 seconds to fix the bug caused due to using timer function in settimeout

//trigger2
let trigger2 = '';

// defining variables for wining the game
let matchedCards = 0;

//setting cariables to compare cards
let card1 = ''; let card2 = '';

// Definig toggleCards function to open and close the cards for few seconds to memorize
function toggleCards() {
	let allCards = cardsBox.children;
	for (let i = 0; i < allCards.length; i++) {
		allCards[i].classList.toggle('open');
    allCards[i].classList.toggle('disable');
	}

}

// defining function for timer to start
function startTimer () {
		trigger = setInterval(timeCounter,1000);
}

// defining  function to count the seconds and displaying into min:sec form
function timeCounter() {
	sec++;
	min = 0;
	min = Math.floor(sec/60);
	left = sec%60;
  if(sec > -1){
	   document.getElementById('timer').innerHTML = " " + min + ":" + left;
   }else {document.getElementById('timer').innerHTML = " 0:0 ";}
}

// defining function with trigger to stop timer
function stopTimer() {
	clearInterval(trigger);
	sec = -3;
	document.getElementById('timer').innerHTML = "  0:0 ";
}

// defining function to complete all the starting checks before the game
// reseting moves shuffling cards showing the cards for few seconds etc.

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
	startTimer();
	// reseting the matchedCards variable as the new game;
	matchedCards = 0;
}

// defining the function to win conditions and making the modal ready to display the stats
function gameWon() {
  document.getElementById('score').innerHTML = " " + score + " Stars";
  document.getElementById('moves2').innerHTML = moves + " Moves";
  document.getElementById('timer2').innerHTML = min  + " Minutes And " + left + " Seconds" ;

  // the above same procedure for giing the stats to the optional Modal
  document.getElementById('score3').innerHTML = " " + score + " Stars";
  document.getElementById('moves3').innerHTML = moves + " Moves";
  document.getElementById('timer3').innerHTML = min  + " Minutes And " + left + " Seconds" ;

  // When the game is won the another modal will appear (The wining modal Js)

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

// WHen the cards do not matched this function is run to add failed class and remove open class
function failed () {
  card1.classList.add('failed');
	card2.classList.add('failed');
  card1.classList.remove('open');
	card2.classList.remove('open');

}

// When the cards do match this function adds the class matched to the card and removes the open card
function matched () {
	card1.classList.add('matched');
	card2.classList.add('matched');
  card1.classList.remove('open');
	card2.classList.remove('open');

// Adding the number of matches of cards
	matchedCards++;
  // Checking for the game wining condition and triggers the wining function
	if(matchedCards === 8){
		gameWon();
	}
}

// THis function checks that is two cards opend or are they the same card
// Then this function will increase the moves determine the score and check the cards if they are matching
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

  // After checking the cards making the cariables ready to get other two cards to compare
	card2 = card1 = '';

} else if (card1 === card2) { //if the same card is clicked then the cards are made ready for other pair
  card1 = card2 = '';
}
}

// This function uses the nodal method to make an array and then suffle and again adding to the DOM
function shuffle() {
    let divs = Array.prototype.slice.call(cardsBox.childNodes);  //Converted to array the nodal list
    while (divs.length) {
        cardsBox.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

// Defining a function to call when the resseting is required
function restartFun() {
    // Changing matchedCards to zero
    matchedCards = 0;

    // Solving the bug for cards carried to the next game after reseting
    card1 = card2 = '';

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
    // and cancle the previous 3 sec if reset again in the first 3 seconds
    clearTimeout(trigger2);
  	toggleCards();
  	trigger2 = setTimeout(toggleCards,3000);
  	stopTimer();
  	startTimer();
}


//Adding eventlistener to the restart button and linking it to the restartFun function
restart.addEventListener('click', restartFun);


//Adding eventlistener to the deck of cards so when the card is clicked its
// We will trace it by target and add to cariables to send to compare.

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

// The optional modal Js this modal is made as the modal shown in the video of the project descriptions

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
