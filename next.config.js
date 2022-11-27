/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/ecovision'
  : '';

module.exports = {
  reactStrictMode: true,
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
}




module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};