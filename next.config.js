const withLess = require('@zeit/next-less')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withLess({
  cssModules: true,
  webpack: (config, { isServer }) => {
    config.node = {
      fs: 'empty',
    }
    if (isServer) {
      require('./lib/sitemap')
    }
    return config
  },
  assetPrefix: isProd ? process.env.CDN_DOMAIN : '',
  images: {
    path: isProd
      ? process.env.CDN_DOMAIN + process.env.IMAGE_PATH
      : process.env.IMAGE_PATH,
  },
})
