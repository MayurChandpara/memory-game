# Memory Game Project
This is a javaScript based memory card game in which you have to remember the symboles of the card as soon as possible within the given time of 3 seconds and then match them correctly in the least possible trials.

## Rules for the game:
<ul>
  <li>Clicking two cards makes a move.</li>
  <li>You have 3 seconds to see and memorize all the cards.</li>
  <li>Find all the matches in the least posible moves(lowest 8 possible).</li>
  <li>Stars change as per your score depending on your moves and not time.</li>
  <li>There is a timer for extra challange to yourself.</li>
 </ul>
  
  ## How the app works? (Logical Thought)
  We have a bunch of divs which forms the cards and their innerHTML contains the icons which we have listed. So just grabbing one card as we click and holding that on for until the other card is clicked. As soon as another card is clicked the card's innerHTMLs are compared with themseles. If they match they are given Matched class. Else they are closed. then the variables of the cards are cleared again.
  SO how will be track that the user wins? we will keep track of the matched card pairs and as we have only 8 different cards. So as soon as the variable will hit 8 it should promte to open the win modal and stop the timer and give the stats.
  
## Implementations

### Dependencies
The project uses two dependencies for the use of icons & fonts in the cards:
<ul>
  <li>Google Fonts through CDN : https://fonts.googleapis.com</li>
  <li>Font Awsome through CDN : https://use.fontawesome.com</li>
</ul>
### Usage
Anyone who like can use the app. The game is usable by any person without age restrictions.

## Demo
Check the live version of the app : 

## Contributing
Open an issue first to discuss potential changes/additions.

## License
**(The MIT License)**
Copyright (c) 2018 Mayur Chandpara

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    `The above copyright notice and this permission notice shall be`
included in all copies or substantial portions of the Software.

    `THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF`
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
