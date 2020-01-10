'use strict'

const store = require('./../store')

const onIndexSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#message').text("All user's game!")
}

const onIndexFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong here...')
}

const onCreateGameSuccess = function (response) {
  console.log(response)
  // store.user = response.user
  store.game = response.game
  $('.gameboard').show()
  $('#message').text('')
  $('#change-password').hide()
  $('#show').show()
  $('#index').show()
  $('#reset').show()
  $('#create').hide()
}

const onCreateGameFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong here...')
}

const onShowGameSuccess = function (response) {
  console.log(response)
  // store.user = response.user
  $('#message').text('Show the game!')
}

const onShowGameFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong here...')
}

const onUpdateGameSuccess = function (response) {
  // store.user = response.user
  // store.game = response.game
  console.log(response)
}

const onUpdateGameFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong!')
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onShowGameSuccess,
  onShowGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
