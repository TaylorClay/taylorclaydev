const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      use: ['@compiled/webpack-loader'],
    });

    return config;
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};
