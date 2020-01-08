
const api = require('./api')
const ui = require('./ui')

const addGameHandlers = function () {
  $('#index').on('click', onGetGames)
  $('#create').on('click', onCreateGame)
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

module.exports = {
  addGameHandlers
}
