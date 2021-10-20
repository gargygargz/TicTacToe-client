'use strict'
const config = require('../config')
const store = require('../store')

// Launching a new game
const newGame = function (formData) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/games`,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  newGame
}
