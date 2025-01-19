const path = require("path");

module.exports = {
  entry: "./src/Editor.js",
  output: {
    filename: "editorium.js",
    path: path.resolve(__dirname, "dist"),
    library: "Editorium",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
