'use strict'

const store = require('./../store')

const onIndexSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#message').text("You've got all the user's game!")
}

const onIndexFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong here...')
}

const onCreateGameSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#message').text('New game was created!')
}

const onCreateGameFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong here...')
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}
