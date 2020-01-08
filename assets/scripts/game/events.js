'use strict'

const addHandlers = function () {
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

let currentPlayer

const switchPlayers = function () {
  if (!currentPlayer) {
    currentPlayer = 'X'
  } else if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

const onClickBox = function (event) {
  event.preventDefault()
  if (!this.innerHTML) {
    checkForWinner()
    switchPlayers()
    this.innerHTML = currentPlayer
    const getUserInput = this.id
    board[getUserInput] = this.innerHTML
  } else {
    $('#message').text('This space is taken')
    console.log('This space is taken')
  }
}

const board = ['', '', '', '', '', '', '', '', '']

// [0, 1, 2], [3, 4, 5], [6, 7, 8] rows
// [0, 3, 6], [1, 4, 7], [2, 5, 8] columns
// [0, 4, 8], [2, 4, 6] diagonals

const checkWinnerPositions = function (boxOne, boxTwo, boxThree) {
  if ((boxOne === boxTwo) && (boxTwo === boxThree) && (boxThree === currentPlayer)) {
    return 'True'
  } else {
    return 'False'
  }
}

const checkRows = function () {
  for (let i = 0; i < board.length; i = +3) {
    if (checkWinnerPositions(board[i], board[i + 1], board[i + 2]) === 'True') {
      console.log(`${currentPlayer} won!`)
      $('#message').text(`${currentPlayer} player won!`)
    } else {
      return
    }
  }
}

const checkColumns = function () {
  for (let i = 0; i < 3; i++) {
    if (checkWinnerPositions(board[i], board[i + 3], board[i + 6]) === 'True') {
      console.log(`${currentPlayer} won!`)
      $('#message').text(`${currentPlayer} player won!`)
    } else {
      return
    }
  }
}

const checkDiagonals = function () {
  if (checkWinnerPositions(board[0], board[4], board[8]) === 'True') {
    console.log(`${currentPlayer} won!`)
    $('#message').text(`${currentPlayer} player won!`)
  } else if (checkWinnerPositions(board[2], board[4], board[6]) === 'True') {
    console.log(`${currentPlayer} won!`)
    $('#message').text(`${currentPlayer} player won!`)
  }
}

const checkForWinner = function () {
  checkRows()
  checkColumns()
  checkDiagonals()
}

console.log(board)

module.exports = {
  addHandlers
}
