const path = require('path');
module.exports = {
  entry: './assets/js/src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
         test: /\.tsx?$/,
         loader: 'babel-loader',
       },
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
     },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
         test: /\.js$/,
         loader: "source-map-loader"
         },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/js/built')
  },
  stats: {
    errorDetails: true
  }
};