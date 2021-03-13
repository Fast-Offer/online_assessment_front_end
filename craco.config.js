/* craco.config.js */
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');

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
            localIdentName: '[local]--[hash:base64:5]',
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
};
