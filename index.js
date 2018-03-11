module.exports.decorateConfig = config => {
  return Object.assign({}, config, {
    cursorColor: 'rgba(191, 157, 183, 0.5)',
    foregroundColor: '#FBF9F9',
    backgroundColor: '#30343F',
    borderColor: '#30343F',
    colors: {
      black: '#30343F',
      red: '#BF9DB7',
      green: '#A9DDD6',
      yellow: '#FCEDC3',
      blue: '#91ADC2',
      magenta: '#BF9DB7',
      cyan: '#91ADC2',
      white: '#FBF9F9',
      lightBlack: '#3B404D',
      lightRed: '#BF9DB7',
      lightGreen: '#A9DDD6',
      lightYellow: '#FCEDC3',
      lightBlue: '#91ADC2',
      lightMagenta: '#BF9DB7',
      lightCyan: '#91ADC2',
      lightWhite: '#FBF9F9',
    },
  });
};
