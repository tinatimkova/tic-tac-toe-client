'use strict'

const store = require('./../store')

const onIndexSuccess = function (response) {
  $('#message').text(`You played ${response.games.length} games!`)
}

const onIndexFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong here...')
}

const onCreateGameSuccess = function (response) {
  console.log(response)
  store.game = response.game
  $('#message').text("X player's turn")
  $('.gameboard').show()
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
  const moves = store.board.filter(cell => cell !== '').length
  if (!store.gameIsOver) {
    $('#message').text(`Game status: game is on! \n Number of moves: ${moves}.`)
  } else {
    $('#message').text(`Game status: game is over. \n ${store.currentPlayer} player won!\n Number of moves: ${moves}`)
  }
}

const onShowGameFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong here...')
}

const onUpdateGameSuccess = function (response) {
  if (store.currentPlayer === 'O') {
    $('#message').text("X player's turn")
  } else if (store.currentPlayer === 'X') {
    $('#message').text("O player's turn")
  }
  // console.log(response)
}

const onUpdateGameFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong!')
}

const onResetGameSuccess = function (response) {
  console.log(response)
  store.game = response.game
  $('.col-4').empty()
  store.gameIsOver = false
  store.board = ['', '', '', '', '', '', '', '', '']
  $('#message').text("X player's turn")
}

const onResetGameFailure = function (error) {
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
  onUpdateGameFailure,
  onResetGameSuccess,
  onResetGameFailure
}
