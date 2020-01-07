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
  checkForWinner()
  if (!this.innerHTML) {
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

const winPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
              [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
              [0, 4, 8], [6, 4, 2]] //diagonals

const checkForWinner = function () {
  // check the rows
  if
})
  {
    console.log(`${currentPlayer} won!`)
  // check the columns
  // check the diagonals
  } else {
    console.log('Current player:' + currentPlayer)
  }
}
console.log(board)

module.exports = {
  addHandlers
}
