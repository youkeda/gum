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
    config.plugin("monaco-editor").use(MonacoWebpackPlugin, [
      {
        publicPath:"monaco",
        // Languages are loaded on demand at runtime
        languages: [
          "json",
          "javascript",
          "html",
          "xml",
          "typescript",
          "java",
          "python",
          "css",
          "scss",
          "kotlin",
          "less",
          "markdown",
          "shell",
          "sql",
          "yaml",
          "go",
          "csp",
          "cpp",
          "dockerfile",
          "mysql",
          "rust",
          "scheme"
        ]
      }
    ]);
  },
  configureWebpack: {
    plugins: [new MonacoWebpackPlugin()]
  }
};
