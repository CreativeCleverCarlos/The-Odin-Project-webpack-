//everything from line 3 to line 11 was copied and pasted from the site "webpack.js.org getting started"

const path = require('path'); 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};