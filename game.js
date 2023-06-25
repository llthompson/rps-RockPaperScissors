'use strict';

const rockPaperScissors = (hand1, hand2) => {
    const validHands = ['rock', 'paper', 'scissors'];
    hand1 = hand1.toLowerCase().trim();
    hand2 = hand2.toLowerCase().trim();

    if (!validHands.includes(hand1) || !validHands.includes(hand2)) {
        return 'Oops, not a valid hand! Please choose either rock, paper, or scissors. Duh.';
    }

    if (hand1 === hand2) {
        return "It's a tie!";
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        return 'Hand one wins!';
    } else {
        return 'Hand two wins!';
    }
};

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;

    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';
}

function playGame() {
    const hand1 = document.getElementById('hand1').value;
    const hand2 = document.getElementById('hand2').value;

    const result = rockPaperScissors(hand1, hand2);
    displayResult(result);
}

document.getElementById('play-button').addEventListener('click', playGame);

const resetGame = () => {
    document.getElementById('hand1').value = '';
    document.getElementById('hand2').value = '';
    document.getElementById('result').textContent = '';
}

module.exports = rockPaperScissors;
