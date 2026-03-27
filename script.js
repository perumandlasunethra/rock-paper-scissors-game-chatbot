// script.js

let mode = ''; // 'bot' or 'two'
let player1Score = 0;
let player2Score = 0;
let player1Choice = '';
let player2Choice = '';
let isPlayer1Turn = true;

function selectMode(selectedMode) {
  mode = selectedMode;
  document.querySelector('.mode-selection').style.display = 'none';
  document.getElementById('scoreboard').style.display = 'flex';
  document.getElementById('choices').style.display = 'flex';
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerText = 'Game Started! Make your move.';
}

function makeMove(choice) {
  if (mode === 'bot') {
    const botChoices = ['rock', 'paper', 'scissors'];
    const botChoice = botChoices[Math.floor(Math.random() * 3)];
    const resultDiv = document.getElementById('result');

    if(choice === botChoice) {
      resultDiv.innerText = `Tie! Both chose ${choice} 🤝`;
    } else if (
      (choice === 'rock' && botChoice === 'scissors') ||
      (choice === 'paper' && botChoice === 'rock') ||
      (choice === 'scissors' && botChoice === 'paper')
    ) {
      resultDiv.innerText = `You Win! ${choice} beats ${botChoice} 🎉`;
      player1Score++;
    } else {
      resultDiv.innerText = `Bot Wins! ${botChoice} beats ${choice} 🤖`;
      player2Score++;
    }

    document.getElementById('player1-score').innerText = `Player: ${player1Score}`;
    document.getElementById('player2-score').innerText = `Bot: ${player2Score}`;

  } else if (mode === 'two') {
    if (isPlayer1Turn) {
      player1Choice = choice;
      document.getElementById('result').innerText = 'Player 2, make your move!';
      isPlayer1Turn = false;
    } else {
      player2Choice = choice;
      isPlayer1Turn = true;

      const resultDiv = document.getElementById('result');

      if(player1Choice === player2Choice) {
        resultDiv.innerText = `Tie! Both chose ${player1Choice} 🤝`;
      } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissors' && player2Choice === 'paper')
      ) {
        resultDiv.innerText = `Player 1 Wins! ${player1Choice} beats ${player2Choice} 🎉`;
        player1Score++;
      } else {
        resultDiv.innerText = `Player 2 Wins! ${player2Choice} beats ${player1Choice} 🎉`;
        player2Score++;
      }

      document.getElementById('player1-score').innerText = `Player 1: ${player1Score}`;
      document.getElementById('player2-score').innerText = `Player 2: ${player2Score}`;
    }
  }
}
