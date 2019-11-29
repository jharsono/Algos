const reverse = (str) => (
  str.split('').reduce((reversed, char) => char + reversed, '')
)

module.exports = reverse;
