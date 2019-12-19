const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  parallel: false,

  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // modify the options...
        // options.transpileOnly = false;
        options.target = {
          ie: 11
        };
        return options;
      });

    config.module.rule("ts").uses.delete("cache-loader");
    // config.module.rule("tsx").uses.delete("cache-loader");

    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader")
      .tap(opts => {
        opts.transpileOnly = false;
        opts.happyPackMode = false;
        return opts;
      });
  },
  configureWebpack: {
    entry: {
      "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
      "json.worker": "monaco-editor/esm/vs/language/json/json.worker",
      "css.worker": "monaco-editor/esm/vs/language/css/css.worker",
      "html.worker": "monaco-editor/esm/vs/language/html/html.worker",
      "ts.worker": "monaco-editor/esm/vs/language/typescript/ts.worker"
    }
  }
};
