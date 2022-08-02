const card = document.getElementById('card')
const button = document.getElementById('button')

card.addEventListener('click', flipCard)
button.addEventListener('click', newCard)

let frontText = "A card from the major arcana"
let backText = "A description of that card's meaning"

function flipCard(){
    card.classList.toggle('flipCard')
    document.getElementById('frontText').innerText = frontText
    document.getElementById('backText').innerText = backText
} 
function newCard(){
    fetch ("/newCard")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            frontText = data.cardFront;
            backText = data.cardBack;
            flipCard()
            flipCard()
        });
}