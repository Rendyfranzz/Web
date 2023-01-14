/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const NextConfig ={
  images: {
    domains: [
      "user-images.githubusercontent.com",
    ],
  },
  eslint: {
    dirs: ['src'],
  },
}
module.exports = withContentlayer(NextConfig)
