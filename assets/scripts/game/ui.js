'use strict'

const store = require('./../store')

const onIndexSuccess = function (response) {
  if (response.games.length === 1) {
    $('#message').text(`You played ${response.games.length} game!`)
  } else {
    $('#message').text(`You played ${response.games.length} games!`)
  }
}

const onIndexFailure = function () {
  $('#message').text('Something went wrong here...')
}

const onCreateGameSuccess = function (response) {
  store.game = response.game
  $('#message').text("X player's turn")
  $('.gameboard').show()
  $('#change-password').hide()
  $('#show').show()
  $('#index').show()
  $('#reset').show()
  $('#create').hide()
}

const onCreateGameFailure = function () {
  $('#message').text('Something went wrong here...')
}

const onShowGameSuccess = function (response) {
  const moves = store.board.filter(cell => cell !== '').length
  if (!store.gameIsOver) {
    $('#message').text(`Game status: game is on! \n Number of moves: ${moves}.`)
  } else {
    $('#message').text(`Game status: game is over. \n ${store.currentPlayer} player won!\n Number of moves: ${moves}`)
  }
}

const onShowGameFailure = function () {
  $('#message').text('Something went wrong here...')
}

const onUpdateGameSuccess = function (response) {
  if (!store.gameIsOver) {
    if (store.currentPlayer === 'O') {
      $('#message').text("X player's turn")
    } else if (store.currentPlayer === 'X') {
      $('#message').text("O player's turn")
    }
  }
}

const onUpdateGameFailure = function () {
  $('#message').text('Something went wrong!')
}

const onResetGameSuccess = function (response) {
  store.game = response.game
  $('.col-4').empty()
  store.gameIsOver = false
  store.board = ['', '', '', '', '', '', '', '', '']
  $('#message').text("X player's turn")
}

const onResetGameFailure = function () {
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
