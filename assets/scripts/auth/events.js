'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the API
  // handle the API response
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
  // console.log(data)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the API
  // handle the API response
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the API
  // handle the API response
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the API
  // handle the API response
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  addHandlers
}
