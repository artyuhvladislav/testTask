const webpack = require('webpack');
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./scripts/index.js",
  output: {
    filename: `./scripts/${filename("js")}`,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename("css")}`,
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src/assets"),
    //       to: path.resolve(__dirname, "dist/assets"),
    //       noErrorOnMissing: true,
    //     },
    //   ],
    // }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  devServer: {
    historyApiFallback: true,
    liveReload: isDev,
    hot: isDev,
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
    compress: true,
    port: 4200,
  },
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test:  /\.(?:|gif|png|jpg|jpeg|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `assets/img/[name][ext][query]`
        }
 
      },
      {
        test:  /\.(?:|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: `assets/fonts/[name][ext][query]`
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
};
