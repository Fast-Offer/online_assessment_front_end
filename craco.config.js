/* craco.config.js */
const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]--[hash:base64:5]",
          },
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src/')
  //   }
  // },
  // webpack: {
  //   configure: webpackConfig => {
  //     const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
  //       ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
  //     );

  //     webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
  //     return webpackConfig;
  //   }
  // }
};
