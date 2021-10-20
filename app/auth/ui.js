const store = require('../store')

const signUpSuccess = function (responseData) {
  // tell the user it was successful
  $('#success-message').text('Signed up successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  // clear (reset) all of the forms
  $('form').trigger('reset')
  console.log('responseData is', responseData)

  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const signUpFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign up failed, please try again.')
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

const signInSuccess = function (responseData) {
  // Add the `user` we got back in our response's data to the `store` object. So we can access the user's token later in api.js
  store.user = responseData.user
  console.log('store is', store)
  // tell the user it was successful
  $('#success-message').text('Signed in successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  // clear (reset) all of the forms
  $('form').trigger('reset')
  // After we sign in, hide the section with the id `before-sign-in`
  $('#before-sign-in').hide()
  // After we sign in, show the section with the id `after-sign-in`
  $('#after-sign-in').show()

  console.log('responseData is', responseData)
  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const signInFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign in failed, please try again.')
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

const signOutSuccess = function (responseData) {
  // tell the user it was successful
  $('#success-message').text('Signed out successfully!')
  // remove existing classes, then add a green text-success class from bootstrap
  $('#success-message').removeClass()
  $('#success-message').addClass('text-success')
  // clear (reset) all of the forms
  $('form').trigger('reset')
  // After we sign out, hide the section with the id `after-sign-in`
  $('#after-sign-in').hide()
  // After we sign out, show the section with the id `before-sign-in`
  $('#before-sign-in').show()
  // After we sign out, hide the section with the id `after-new-game`
  $('#after-new-game').hide()

  console.log('responseData is', responseData)
  setTimeout(() => {
    // remove the message from success-message
    $('#success-message').html('')
    // remove the green color caused by `text-success`
    $('#success-message').removeClass('text-success')
  }, 5000)
}

const signOutFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign out failed, please try again.')
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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
