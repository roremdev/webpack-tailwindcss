import { resolve, join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default () => {
  return {
    entry: "./src/index",
    output: {
      path: resolve(__dirname, "dist"),
      filename: "bondle.js",
    },
    resolve: {
      extensions: [".js"],
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, "./public/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],
    devServer: {
      contentBase: join(__dirname, "dist"),
      port: 8080,
    },
  };
};
