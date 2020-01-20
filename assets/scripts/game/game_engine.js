'use strict'
const store = require('../store')
const ui = require('./ui')
const api = require('./api')

const addGameEngineHandlers = function () {
  $('.col-4').on('click', onClickBox)
}

store.board = ['', '', '', '', '', '', '', '', '']

store.gameIsOver = false

const switchPlayers = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

const onClickBox = function (event) {
  event.preventDefault()
  if (!store.gameIsOver) {
    if (!this.innerHTML) {
      switchPlayers()
      this.innerHTML = store.currentPlayer
      store.userInput = $(this).attr('data-cell-index')
      store.board[store.userInput] = this.innerHTML
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
  if (checkWinnerPositions(store.board[0], store.board[1], store.board[2])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(store.board[3], store.board[4], store.board[5])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(store.board[6], store.board[7], store.board[8])) {
    store.gameIsOver = true
  }
}

const checkColumns = function () {
  if (checkWinnerPositions(store.board[0], store.board[3], store.board[6])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(store.board[1], store.board[4], store.board[7])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(store.board[2], store.board[5], store.board[8])) {
    store.gameIsOver = true
  }
}

const checkDiagonals = function () {
  if (checkWinnerPositions(store.board[0], store.board[4], store.board[8])) {
    store.gameIsOver = true
  } else if (checkWinnerPositions(store.board[2], store.board[4], store.board[6])) {
    store.gameIsOver = true
  }
}

const checkForWinner = function () {
  checkRows()
  checkColumns()
  checkDiagonals()
  if (store.gameIsOver) {
    $('#message').text(`${store.currentPlayer} PLAYER WON!`)
  }
}

const checkIfDraw = function () {
  if (!store.board.includes('') && (!store.gameIsOver)) {
    $('#message').text('DRAW!')
    store.gameIsOver = true
  }
}

module.exports = {
  addGameEngineHandlers
}
