let cardsList = [
    {"name" : "house1", "img_source" : "images/baratheon.jpg"},
    {"name" : "house2", "img_source" : "images/bolton.jpg"},
    {"name" : "house3", "img_source" : "images/greyjoy.jpg"},
    {"name" : "house4", "img_source" : "images/lannister.jpg"},
    {"name" : "house5", "img_source" : "images/martell.jpg"},
    {"name" : "house6", "img_source" : "images/stark.jpg"},
    {"name" : "house7", "img_source" : "images/targaryen.jpg"},
    {"name" : "house8", "img_source" : "images/tully.jpg"},
    {"name" : "house9", "img_source" : "images/tyrell.jpg"},
];

let count = 0;
let firstGuess ="";
let secondGuess ="";
let cardBoard = document.getElementById('card-board');
let grid= document.createElement('div');
grid.setAttribute('class', 'grid');
cardBoard.appendChild(grid);



let cardGrid = cardsList.concat(cardsList);
function shuffleArray(arr){
    for( let i = arr.lenght -1; i>0; i--){
        const j = Math.floor(Math.random()* (i+1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let shuffledCards = shuffleArray(cardGrid);

function showCardBoard(){
    shuffledCards.forEach(item => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name;
        card.innerHTML = `<img src= "${item.img_src}">`;
        grid.appendChild(card);
    })
}
showCardBoard();