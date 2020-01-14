
const api = require('./api')
const ui = require('./ui')

const addGameHandlers = function () {
  $('#index').on('click', onGetGames)
  $('#create').on('click', onCreateGame)
  $('#show').on('click', onShowGame)
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

module.exports = {
  addGameHandlers
}
