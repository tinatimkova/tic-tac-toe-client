'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Successfully signed up!')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed!')
}

const onSignInSuccess = function (response) {
  $('#message').text('Successfully signed in')
  store.user = response.user
  console.log(response)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create').show()
  $('form').trigger('reset')
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed!')
}

const changePasswordSuccess = function (response) {
  $('#message').text('Your password was successfully updated!')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Change password failed!')
}

const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('Successfully signed out!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#create').hide()
  $('#show').hide()
  $('#reset').hide()
  $('.gameboard').hide()
  $('#sign-out').hide()
  $('#index').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed!')
  $('form').trigger('reset')
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
