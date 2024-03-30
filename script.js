const playerNumSpan = document.getElementById("player-num");
const playerOneScoreSpan = document.getElementById("player-1-score");
const playerTwoScoreSpan = document.getElementById("player-2-score");
const playerOneButton = document.getElementById("player-1-btn");
const playerTwoButton = document.getElementById("player-2-btn");
const resetButton = document.getElementById("reset-btn");
const diceImg = document.getElementById("dice-img");

const data = {

    currentPlayer: 1,
    playerOneScore: 0,
    playerTwoScore: 0,

}

const setCurrentPlayer = playerNum => {
    data.currentPlayer = playerNum;
    playerNumSpan.innerText = data.currentPlayer;
    if (data.currentPlayer == 1) {
        playerOneButton.removeAttribute("disabled")
        playerTwoButton.setAttribute("disabled","disabled")
    }
    else {
        playerOneButton.setAttribute("disabled", "disabled")
        playerTwoButton.removeAttribute("disabled")
    }

}

const startGame = () => {
    diceImg.src = "https://img.freepik.com/premium-photo/green-dice-isolated-white-surface-top-view_118047-6996.jpg?w=2000"
    setCurrentPlayer(Math.ceil(Math.random() * 2));
    data.playerOneScore = 0;
    data.playerTwoScore = 0;
    playerTwoScoreSpan.innerText = data.playerTwoScore;
    playerOneScoreSpan.innerText = data.playerOneScore;
}

const rollTheDice = () => {
    const intervalId = setInterval(() => {
         const randomNum = Math.ceil(Math.random() * 6);
    diceImg.src = `./public/${randomNum}.png`;    
    }, 50)
    setTimeout(() => {
        clearInterval(intervalId);
        const randomNum = Math.ceil(Math.random() * 6);
        diceImg.src = `./public/${randomNum}.png`;
        if (data.currentPlayer == 1) {
            data.playerOneScore += randomNum;
            playerOneScoreSpan.innerText = data.playerOneScore;
        }
        else {
            data.playerTwoScore += randomNum;
            playerTwoScoreSpan.innerText = data.playerTwoScore;
        }
    },1000)
} 

playerOneButton.addEventListener("click", () => {
    rollTheDice()
    playerOneButton.setAttribute("disabled", "disabled")
    setTimeout(() => {
        if (data.playerOneScore >= 30) {
            setTimeout(() => alert("Player 1 Won The Game"), 100)
            resetButton.removeAttribute("disabled")
        }
        else {
            setCurrentPlayer(2)
        }
    },1000)
})

playerTwoButton.addEventListener("click", () => {
    rollTheDice()
    playerTwoButton.setAttribute("disabled", "disabled")
    setTimeout(() => {
        if (data.playerTwoScore >= 30) {
            setTimeout(() => alert("Player 2 Won The Game"), 100)
       
            resetButton.removeAttribute("disabled")
        }
        else {
            setCurrentPlayer(1)
        }
    },1000)
})

resetButton.addEventListener("click", () => {
    startGame()
    resetButton.setAttribute("disabled", "disabled")
    
})

window.onload = () => {
    startGame()
}
 