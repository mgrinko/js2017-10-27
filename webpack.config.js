const path = require('path');

module.exports = {
  entry: './frontend/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },
  watch: true,
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};