'use strict'

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
}

let board = ['', '', '', '', '', '', '', '', '']

// [0, 1, 2], [3, 4, 5], [6, 7, 8] rows
// [0, 3, 6], [1, 4, 7], [2, 5, 8] columns
// [0, 4, 8], [2, 4, 6] diagonals

let gameOver = false
let currentPlayer = 'O'

const switchPlayers = function () {
  if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else if (currentPlayer === 'X') {
    currentPlayer = 'O'
  }
}

const onClickBox = function (event) {
  event.preventDefault()
  if (!this.innerHTML) {
    $('#message').text(`${currentPlayer} player turn`)
    switchPlayers()
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
  if ((boxOne === boxTwo) && (boxOne === boxThree) && (boxOne === currentPlayer)) {
    return true
  } else {
    return false
  }
}

const checkRows = function () {
  for (let i = 0; i < 7; i = i + 3) {
    if (checkWinnerPositions(board[i], board[i + 1], board[i + 2])) {
      console.log(`${currentPlayer} won!`)
      $('#message').text(`${currentPlayer} PLAYER WON!`)
      gameOver = true
    } else {
      return false
    }
  }
}

const checkColumns = function () {
  for (let i = 0; i < 3; i++) {
    if (checkWinnerPositions(board[i], board[i + 3], board[i + 6])) {
      console.log(`${currentPlayer} won!`)
      $('#message').text(`${currentPlayer} PLAYER WON!`)
      gameOver = true
    } else {
      return false
    }
  }
}

const checkDiagonals = function () {
  if (checkWinnerPositions(board[0], board[4], board[8])) {
    console.log(`${currentPlayer} won!`)
  } else if (checkWinnerPositions(board[2], board[4], board[6])) {
    console.log(`${currentPlayer} won!`)
    $('#message').text(`${currentPlayer} PLAYER WON!`)
  } else {
    return false
  }
}

const checkForWinner = function () {
  checkRows()
  checkColumns()
  checkDiagonals()
}

const checkIfDraw = function () {
  if (!board.includes('')) {
    console.log('DRAW!')
    $('#message').text('DRAW!')
  }
}

console.log(board)

module.exports = {
  addGameEngineHandlers
}
