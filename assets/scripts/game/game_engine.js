'use strict'
const store = require('../store')

const addGameEngineHandlers = function () {
  $('#0').on('click', onClickBox)
  $('#1').on('click', onClickBox)
  $('#2').on('click', onClickBox)
  $('#3').on('click', onClickBox)
  $('#4').on('click', onClickBox)
  $('#5').on('click', onClickBox)
  $('#6').on('click', onClickBox)
  $('#7').on('click', onClickBox)
  $('#8').on('click', onClickBox)
  $('#reset').on('submit', onResetGameBoard)
}

let board = ['', '', '', '', '', '', '', '', '']

// [0, 1, 2], [3, 4, 5], [6, 7, 8] rows
// [0, 3, 6], [1, 4, 7], [2, 5, 8] columns
// [0, 4, 8], [2, 4, 6] diagonals

let gameIsOver = false
let currentPlayer
store.player = currentPlayer
store.over = gameIsOver

const switchPlayers = function () {
  if (!currentPlayer) {
    currentPlayer = 'X'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else if (currentPlayer === 'X') {
    currentPlayer = 'O'
  }
}

const onClickBox = function (event) {
  event.preventDefault()
  if (!this.innerHTML) {
    switchPlayers()
    if (currentPlayer === 'X') {
      $('#message').text(`O player's turn`)
    } else if (currentPlayer === 'O') {
      $('#message').text(`X player's turn`)
    }
    this.innerHTML = currentPlayer
    const getUserInput = this.id
    board[getUserInput] = this.innerHTML
    checkForWinner()
    checkIfDraw()
  } else {
    $('#message').text('This space is taken')
    console.log('This space is taken')
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
    gameIsOver = true
    return gameIsOver
  } else if (checkWinnerPositions(board[3], board[4], board[5])) {
    gameIsOver = true
    return gameIsOver
  } else if (checkWinnerPositions(board[6], board[7], board[8])) {
    gameIsOver = true
    return gameIsOver
  }
}

const checkColumns = function () {
  if (checkWinnerPositions(board[0], board[3], board[6])) {
    gameIsOver = true
    return gameIsOver
  } else if (checkWinnerPositions(board[1], board[4], board[7])) {
    gameIsOver = true
    return gameIsOver
  } else if (checkWinnerPositions(board[2], board[5], board[8])) {
    gameIsOver = true
    return gameIsOver
  }
}

const checkDiagonals = function () {
  if (checkWinnerPositions(board[0], board[4], board[8])) {
    gameIsOver = true
    return gameIsOver
  } else if (checkWinnerPositions(board[2], board[4], board[6])) {
    gameIsOver = true
    return gameIsOver
  }
}

const checkForWinner = function () {
  checkRows()
  checkColumns()
  checkDiagonals()
  if (gameIsOver) {
    $('#message').text(`${currentPlayer} PLAYER WON!`)
  }
}

const checkIfDraw = function () {
  if (gameIsOver) {
    setTimeout(reset, 3000)
  } else if (!board.includes('')) {
    console.log('DRAW!')
    $('#message').text('DRAW!')
  }
}

const onResetGameBoard = function (event) {
  event.preventDefault()
  reset()
}

const reset = function () {
  board = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'O'
  gameIsOver = false
  $('.col-4').text('')
  $('#message').text('')
}

console.log(board)

module.exports = {
  addGameEngineHandlers
}
