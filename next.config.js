const path = require('path')

const appPath = process.env.APP_PATH;

  module.exports = {
    output: "standalone",
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "dev-test-go-for-umrah.vercel.app",
        },
        {
          protocol: "https",
          hostname: "dev-test-goforumrah.ilhamirfan.my.id",
        },
        {
          hostname: "localhost",
        },
      ],
      path: `${appPath}/_next/image/`,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }