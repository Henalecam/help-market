const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: "development",
  entry: "./src/Main.tsx",
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
  }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve('src/manifest.json'), to: path.resolve('dist') },
      ],
      }),
    ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "index.js",
  }

}