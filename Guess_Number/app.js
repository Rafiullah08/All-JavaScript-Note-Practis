const randomNumber = Math.floor(Math.random() *100 + 1)

const submt = document.querySelector("#submt")
const userInput = document.querySelector("#guessField")
const Guesses = document.querySelector(".Guesses")
const lastResult = document.querySelector(".lastResult")
const loworhigh = document.querySelector(".loworhigh")
const resultParas = document.querySelector(".resultParas")
const newgame = document.querySelector("#newgame")

 


let para = document.createElement("p")

let prevGuess = []
let numberGuess = 1
let playGame = true

if(playGame){
    submt.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid message")
    } else if(guess <1){
        alert("Please enter a number greater than 0")

    }  else if(guess >100){
        alert("Please enter a number less than 100")

    }else{
        prevGuess.push(guess)
        if(numberGuess === 11){
            displayGuess(guess)
            displayMeassage(` Game over,random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMeassage('You Guessed it Right')
        endGame()
    }else if(guess < randomNumber){
        displayMeassage('Number is Too Low')
    }
    else if(guess>randomNumber){
        displayMeassage('Number is Too High')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    Guesses.innerHTML +=`${guess} `
    numberGuess++;
    lastResult.innerHTML = `${11 -numberGuess}`
    
}

function displayMeassage(message) {
    loworhigh.innerHTML = message

}



let btn = document.createElement("button")
btn.innerHTML = "Start New Game"

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', 'sd')
    submt.setAttribute('disabled', 'sd')
    resultParas.appendChild(btn)
playGame = false
newGame()
}


function newGame() {
    btn.addEventListener('click', function(){
        const randomNumber = Math.floor(Math.random() *100 + 1)
        Guesses.innerHTML = ''
       
        numberGuess = 1
        lastResult.innerHTML = `${11 -numberGuess}`
        userInput.removeAttribute('disabled')
        submt.removeAttribute('disabled')

        loworhigh.innerHTML = ''
        playGame = true
        btn.style.display = "none"
    })
}

