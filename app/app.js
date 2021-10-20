// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game-logic/events-game.js')

// use require without a reference to ensure a file is bundled

$(() => {
  // When the #sign-up form is submitted, call the `onSignUp` function
  $('#sign-up').on('submit', authEvents.onSignUp)
  // When the #sign-in form is submitted, call the `onSignIn` function
  $('#sign-in').on('submit', authEvents.onSignIn)
  // When the #new-game button is clicked, call the 'onNewGame' function
  $('#new-game').on('click', gameEvents.onNewGame)
  // When the #sign-out button is clicked, call the 'onSignOut' function
  $('#sign-out').on('click', authEvents.onSignOut)
})
