module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      use: ['@compiled/webpack-loader'],
    });

    return config;
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/taylorclaydev' : '',
};
