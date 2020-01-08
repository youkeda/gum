const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 80,
    disableHostCheck: true,
    watchOptions: {
      poll: true
    }
  },
  parallel: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // modify the options...
        // options.transpileOnly = false;
        options.target = {
          ie: 11
        };
        return options;
      });

    config.module.rule('ts').uses.delete('cache-loader');
    // config.module.rule("tsx").uses.delete("cache-loader");

    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap(opts => {
        opts.transpileOnly = false;
        opts.happyPackMode = false;
        return opts;
      });
  },
  configureWebpack: {}
};
