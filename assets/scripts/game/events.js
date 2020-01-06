
const addHandlers = function () {
  $('.box').on('click', onClickBox)
}

const onClickBox = function (event) {
  event.preventDefault()
  if (!this.innerHTML) {
    const dice = Math.floor(Math.random() * 2)
    if (dice === 1) {
      this.innerHTML = 'O'
    } else {
      this.innerHTML = 'X'
    }
  } else {
    // $('#message').text('This space is taken')
    console.log('This space is taken')
  }
}

module.exports = {
  addHandlers
}
