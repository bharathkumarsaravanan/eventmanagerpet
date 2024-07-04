// craco.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // Modify the MiniCssExtractPlugin options for filenames
      const miniCssExtractPlugin = webpackConfig.plugins.find(
        (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
      );

      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.filename =
          env === 'production'
            ? 'static/css/folder/[name].[contenthash:8].css'
            : 'static/css/folder/[name].css';
        miniCssExtractPlugin.options.chunkFilename =
          env === 'production'
            ? 'static/css/folder/[name].[contenthash:8].chunk.css'
            : 'static/css/folder/[name].chunk.css';
      }
      // Ensure correct output filenames
      webpackConfig.output = {
        ...webpackConfig.output,
        chunkFilename: 'static/js/folder/[name].[contenthash:8].chunk.js',
        filename: 'static/js/folder/[name].[contenthash:8].js',
      };

      return webpackConfig;
    },
  },
};
