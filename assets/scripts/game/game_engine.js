'use strict'
const store = require('../store')

const addGameEngineHandlers = function () {
  $('.col-4').on('click', onClickBox)
  $('#reset').on('submit', onResetGameBoard)
}

const board = ['', '', '', '', '', '', '', '', '']

let currentPlayer

const switchPlayers = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    $('#message').text("X player's turn")
  } else {
    currentPlayer = 'X'
    $('#message').text("O player's turn")
  }
}

const onClickBox = function (event) {
  event.preventDefault()
  if (!store.gameIsOver) {
    if (!this.innerHTML) {
      switchPlayers()
      this.innerHTML = currentPlayer
      const getUserInput = $(this).attr('data-cell-index')
      board[getUserInput] = this.innerHTML
      checkForWinner()
      checkIfDraw()
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
    $('#message').text(`${currentPlayer} PLAYER WON!`)
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
