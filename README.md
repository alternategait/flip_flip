# flip_flip

A simple card flip project to practice serverside and a client side java script. 

<img width="336" alt="Screen Shot 2022-08-03 at 8 09 54 AM" src="https://user-images.githubusercontent.com/102367926/182604522-37c97494-7129-45e0-b82a-e20acebdc584.png">.  <img width="330" alt="Screen Shot 2022-08-03 at 8 10 03 AM" src="https://user-images.githubusercontent.com/102367926/182604573-dd1145f7-b8c9-4f4b-9bac-f267dfcc2c0d.png">.<img width="340" alt="Screen Shot 2022-08-03 at 8 10 12 AM" src="https://user-images.githubusercontent.com/102367926/182604603-658c7b26-3f9b-4bb3-85f2-9350818f8135.png">. <img width="348" alt="Screen Shot 2022-08-03 at 8 10 27 AM" src="https://user-images.githubusercontent.com/102367926/182604648-e13fa827-72f9-42a7-9b62-e80782506a44.png">

### How it's Made
Tech used: HTML, CSS, client side Javascript, Node.js, Express

A very simple HTML scaffold for a card and a button. CSS styles the card and a borrowed animation provides a card "flip". Client side JS fires the CSS animation on card click and requests card information from server side JS (Node and Express) on button click and resets card text based on JSON response. On the server side I stored data about the tarot major arcana. A clientside fetch requests information for a random card which is provided as JSON. 

### Optimizations
X style card to include card image. (completed 8/4/22)
- figure out styling card for card image "reversed".
  - send information from server that card is "reversed".
- less awkward/more efficient method to present text on card as card is drawn.
- further site styling.
- host live site

### Lessons learned
- appropriate place for flipping function (client side js)
- method/data structure to get random card
- multiple lessons on use of github
- digesting JSON information and presenting to DOM.
- CSS translate/transform
