'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#sign-up-message').html('Successfully signed up!').css({'color': 'green', 'font-size': '1.5em'})
  setTimeout(function () {
    $('#sign-up-message').html('')
  }, 1000)
  $('#sign-up')[0].reset()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed!').css({'color': 'red', 'font-size': '1.5em'})
  setTimeout(function () {
    $('#message').text('')
  }, 1000)
  $('#sign-up')[0].reset()
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message-sign-in').text('Successfully signed in!').css({'color': 'green', 'font-size': '1.5em'})
  setTimeout(function () {
    $('#message-sign-in').empty()
  }, 1000)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create').show()
  $('#sign-in')[0].reset()
}

const onSignInFailure = function () {
  $('#message-sign-in').text('Sign in failed!').css({'color': 'red', 'font-size': '1.5em'})
  setTimeout(function () {
    $('#message-sign-in').text('')
  }, 1000)
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (response) {
  $('#message-password').text('Your password has been successfully updated!').css({'color': 'green', 'font-size': '1.5em'})
  setTimeout(function () {
    $('#message-password').text('')
  }, 1000)
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#message-password').text('Password Reset Failed!').css({'color': 'red', 'font-size': '1.5em'})
  setTimeout(function () {
    $('#message-password').text('')
  }, 1000)
  $('#change-password')[0].reset()
}

const onSignOutSuccess = function (response) {
  store.user = null
  store.game = null
  $('.col-4').empty()
  $('#message').text('Successfully Sign Out!').css({'color': 'green', 'font-size': '1.5em'})
  setTimeout(function () {
    $('#message').empty()
  }, 1000)
  $('#create').hide()
  $('#show').hide()
  $('#reset').hide()
  $('.gameboard').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#index').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed!').css({'color': 'red', 'font-size': '1.5em'})
  setTimeout(function () {
    $('#message').text('')
  }, 1000)
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
