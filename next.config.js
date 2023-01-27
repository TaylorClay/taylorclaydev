module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      use: ['@compiled/webpack-loader'],
    });

    return config;
  },
  basePath: process.env.NODE_ENV === 'production' ? '/taylorclaydev' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/taylorclaydev/' : '',
};
