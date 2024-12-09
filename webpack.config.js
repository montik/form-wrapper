const path = require("path");
const container = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dependencies } = require("./package.json");


module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    filename: "bundle.js",
    publicPath: "http://localhost:8000/",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new container.ModuleFederationPlugin({
        name: "form_registration",
        filename: 'remoteEntry.js',
        remotes: {
          form_step: "form_step@http://localhost:8001/remoteEntry.js",
        },
        exposes: {
          "./useInputValues": "./src/hooks/useInputValues",
        },
        shared: {
          ...dependencies,
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
          zustand: { singleton: true, eager: true },
        }

    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Development',
      }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8000,
    hot: true,
  },
};
