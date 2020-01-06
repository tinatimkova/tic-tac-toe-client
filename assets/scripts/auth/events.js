'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
// const store = require('./../store')

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
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
  console.log(data)
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
  console.log(data)
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
  console.log(data)
}

module.exports = {
  addHandlers
}
