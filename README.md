# Memory Game Project
This is a javaScript based memory card game in which you have to remember the symboles of the card as soon as possible within the given time of 3 seconds and then match them correctly in the least possible trials.

<h2>Rules for the game:</h2>
<ul>
  <li>Clicking two cards makes a move.</li>
  <li>You have 3 seconds to see and memorize all the cards.</li>
  <li>Find all the matches in the least posible moves(lowest 8 possible).</li>
  <li>Stars change as per your score depending on your moves and not time.</li>
  <li>There is a timer for extra challange to yourself.</li>
 </ul>
  
  <h2> How the app works? (Logical Thought)</h2>
  We have a bunch of divs which forms the cards and their innerHTML contains the icons which we have listed. So just grabbing one card as we click and holding that on for until the other card is clicked. As soon as another card is clicked the card's innerHTMLs are compared with themseles. If they match they are given Matched class. Else they are closed. then the variables of the cards are cleared again.
  SO how will be track that the user wins? we will keep track of the matched card pairs and as we have only 8 different cards. So as soon as the variable will hit 8 it should promte to open the win modal and stop the timer and give the stats.
