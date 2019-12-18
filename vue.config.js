const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  chainWebpack: config => {
    config.plugin("monaco-editor").use(MonacoWebpackPlugin, [
      {
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
  }
};
