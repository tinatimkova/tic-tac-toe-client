
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const addGameHandlers = function () {
  $('#index').on('click', onGetGames)
  $('#create').on('click', onCreateGame)
  $('#show').on('click', onShowGame)
  $('.gameboard .col-4').on('click', onUpdateGameState)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onShowGame = function (event) {
  event.preventDefault()
  api.showGame()
    .then(ui.onShowGameSuccess)
    .catch(ui.onShowGameFailure)
}

const onUpdateGameState = function (event) {
  event.preventDefault()
  const data = event.target
  api.updateGameState(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  addGameHandlers
}
