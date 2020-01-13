'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
const gameEngineEvents = require('./game/game_engine.js')
// const gameEvents = require('./game/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#index').hide()
  $('#create').hide()
  $('#show').hide()
  // $('.gameboard').hide()
  $('#reset').hide()
  // your JS code goes here
  authEvents.addHandlers()
  gameEvents.addGameHandlers()
  gameEngineEvents.addGameEngineHandlers()
})
