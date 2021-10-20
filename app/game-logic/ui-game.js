'use strict'
const store = require('../store')

const newGameSuccess = function (responseData) {
  store.game = responseData.game
  console.log('store is', store)

  $('#success-message').text("Let's start playing Tic Tac Toe!")
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  $('button').trigger('reset')
  $('#after-new-game').show()

  console.log('responseData is', responseData)

  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const newGameFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('New game failed to load, try again.')
  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')
  // print the error
  console.error('error is', error)

  setTimeout(() => {
    // remove the message from error-message
    $('#error-message').html('')
    // remove the red color caused by `text-danger`
    $('#error-message').removeClass('text-danger')
  }, 5000)
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
