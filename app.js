document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'fries',
            img: 'image/fries.png'
        },
        {
            name: 'fries',
            img: 'image/fries.png'
        },
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'image/hotdog.png'
        },
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'image/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'image/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'image/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },
        {
            name: 'pizza',
            img: 'image/pizza.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'image/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
            
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'image/white.png')
            cards[optionTwoId].setAttribute('src', 'image/white.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'image/blank.png')
            cards[optionTwoId].setAttribute('src', 'image/blank.png')

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (carsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "You win"
        }

    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard()
})