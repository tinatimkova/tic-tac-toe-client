'use strict'
const store = require('../store')
const ui = require('./ui')
const api = require('./api')

const addGameEngineHandlers = function () {
  $('.col-4').on('click', onClickBox)
  $('#reset').on('submit', onResetGameBoard)
}

const board = ['', '', '', '', '', '', '', '', '']

store.gameIsOver = false

const switchPlayers = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
    $('#message').text("X player's turn")
  } else {
    store.currentPlayer = 'X'
    $('#message').text("O player's turn")
  }
}

const onClickBox = function (event) {
  event.preventDefault()
  if (!store.gameIsOver) {
    if (!this.innerHTML) {
      switchPlayers()
      this.innerHTML = store.currentPlayer
      store.userInput = $(this).attr('data-cell-index')
      board[store.userInput] = this.innerHTML
      checkForWinner()
      checkIfDraw()
      api.updateGameState(store.userInput, store.currentPlayer, store.gameIsOver)
        .then(ui.onUpdateGameSuccess)
        .catch(ui.onUpdateGameFailure)
    } else {
      $('#message').text('This space is taken')
    }
  }
}

const checkWinnerPositions = function (boxOne, boxTwo, boxThree) {
  if ((boxOne === boxTwo) && (boxOne === boxThree) && (boxOne !== '')) {
    return true
  } else {
    return false
  }
}

const checkRows = function () {
  if (checkWinnerPositions(board[0], board[1], board[2])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(board[3], board[4], board[5])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(board[6], board[7], board[8])) {
    store.gameIsOver = true
  }
}

const checkColumns = function () {
  if (checkWinnerPositions(board[0], board[3], board[6])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(board[1], board[4], board[7])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(board[2], board[5], board[8])) {
    store.gameIsOver = true
  }
}

const checkDiagonals = function () {
  if (checkWinnerPositions(board[0], board[4], board[8])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(board[2], board[4], board[6])) {
    store.gameIsOver = true
  }
}

const checkForWinner = function () {
  checkRows()
  checkColumns()
  checkDiagonals()
  if (store.gameIsOver) {
    $('#message').text(`${store.currentPlayer} PLAYER WON!`)
    $('.col-4').off('click')
  }
}

const checkIfDraw = function () {
  if (!board.includes('') && (!store.gameIsOver)) {
    $('#message').text('DRAW!')
    store.gameIsOver = true
    $('.col-4').off('click')
  }
}

const onResetGameBoard = function (event) {
  event.preventDefault()
  // resetGameBoard()
}

console.log(board)

module.exports = {
  addGameEngineHandlers
}
