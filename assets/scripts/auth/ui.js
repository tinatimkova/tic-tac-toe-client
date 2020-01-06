'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Successfully signed up!')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed!')
}

const onSignInSuccess = function (response) {
  $('#message').text('Successfully signed in!')
  store.user = response.user
  console.log(response)
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed!')
}

const changePasswordSuccess = function (response) {
  $('#message').text('Your password was successfully updated!')
}

const changePasswordFailure = function () {
  $('#message').text('Change password failed!')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
