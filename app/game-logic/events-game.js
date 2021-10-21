'use strict'

const api = require('./api-game.js')
const ui = require('./ui-game.js')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame().then(ui.newGameSuccess).catch(ui.newGameFailure)
}

const launch = document.getElementById('new-game')
const squares = document.querySelectorAll('.box')
const outcome = document.getElementById('game-outcome')
const reset = document.getElementById('reset-game')

const playerWinConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
]

let boardFull = false
let turn = 0

const activePlayer = function (turn) {
  return turn % 2 === 0 ? 'X' : 'O'
}

const boardClick = function (box) {
  if (box.innerText === '' && boardFull === false) {
    box.textContent = activePlayer(turn)
    determineGameWinner()
    return turn++
  }
}

launch.addEventListener('click', () => {
  squares.forEach((box) =>
    box.addEventListener('click', boardClick.bind(this, box))
  )
})

const determineGameWinner = function () {
  for (let i = 0; i < squares.length - 1; i++) {
    if (
      squares[playerWinConditions[i][0]].innerText ===
        squares[playerWinConditions[i][1]].innerText &&
      squares[playerWinConditions[i][1]].innerText ===
        squares[playerWinConditions[i][2]].innerText &&
      squares[playerWinConditions[i][0]].innerText !== ''
    ) {
      outcome.innerText = `${
        squares[playerWinConditions[i][0]].innerText
      } wins, woohoo!`
      boardFull = true
      return
    }
  }
  if (turn === 8) {
    boardFull = true
    outcome.innerText = 'A good-ole-fashioned tie!'
  }
}

const resetGame = function () {
  squares.forEach((box) => {
    outcome.innerText = ''
    box.innerText = ''
    boardFull = false
    turn = 0
  })
}

reset.addEventListener('click', resetGame)

module.exports = {
  onNewGame,
  activePlayer,
  boardClick,
  determineGameWinner,
  resetGame
}
