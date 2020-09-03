import $ from 'jquery'

const stringToColour = function (str) {
  const colors = [
    '#795548',
    '#607D8B',
    '#D50000',
    '#C51162',
    '#E91E63',
    '#9C27B0',
    '#7E57C2',
    '#512DA8',
    '#283593',
    '#1565C0',
    '#00ACC1',
    '#009688',
    '#388E3C',
    '#00796B',
    '#B38827',
    '#EF6C00',
    '#EF6C00'
  ]
  let hash = 0
  let colour = ''
  let numbers = []

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF
    colour += (`00${value.toString(16)}`).substr(-2)
  }

  numbers = colors.map((colors) => parseInt(colors.substring(1), 16)).sort((a, b) => a - b)

  for (let i = 0; i < numbers.length; i++) {
    if (parseInt(colour, 16) < numbers[i]) {
      colour = numbers[i].toString(16)
      break
    }
  }

  return ` #${colour}`
}

$('body').css('background-color', stringToColour('letItCurl')) // eslint-disable-line
