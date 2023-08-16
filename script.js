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
        card.innerHTML = `<img src= "${item.img_source}">`;
        grid.appendChild(card);
    })
}
showCardBoard();

grid.addEventListener('click', function(e){
    let selectedCard = e.target.parentElement;
    if(e.target.classList.contains('grid')){
        return;
    }
    if(count <2){
        count++;
        if(count ==1){
            firstGuess = selectedCard.dataset.name;
            console.log(firstGuess);
            selectedCard.classList.add('selected', 'is-clicked');
        }else{
            if(!selectedCard.classList.contains('is-clicked')){
                secondGuess = selectedCard.dataset.name;
                console.log(secondGuess);
                selectedCard.classList.add('selected');
                checkCardMatch(firstGuess, secondGuess);
                document.querySelectorAll('.card').forEach((card)=>{
                    card.classList.remove('is-clicked');
                });
            } else{
                count--;
            }
        }
    }

});


function checkCardMatch(guess1, guess2){
    if(guess1 == guess2) match();
    else unmatch();

}

let match = function(){
    let selectedCards = document.querySelectorAll('.selected');
    selectedCards.forEach(card =>{
        card.classList.add('matched');
        card.querySelector('img').style.opacity = "1";
        card.style.pointerEvents = "none";
        card.style.opacity = "0.8";
        card.classList.remove('selected');
    });
    count = 0;
};

let unmatch = function(){
    let selectedCards = document.querySelectorAll('.selected');
    setTimeout(() => {
        selectedCards.forEach((card) =>{
            card.classList.remove('selected');
        }, 500);
    });
    count = 0;
}