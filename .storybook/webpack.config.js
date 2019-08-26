const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ts$/,
    include: [path.join(__dirname, '../')],
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }
    ]
  })
  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  config.resolve.extensions.push('.ts')
  config.resolve.alias['@'] = path.join(__dirname, '../')
  config.resolve.alias['~'] = path.join(__dirname, '../')

  return config
}
