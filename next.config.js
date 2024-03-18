/** @type {import('next').NextConfig} */
const path = require('path') 

const nextConfig = { 
  basePath: "/wunhui",
  reactStrictMode: true,
  assetPrefix: 
    process.env.NODE_ENV === "production"
    ? "https://wunhui.github.io/newPortfolio"
    : "",  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./styles/scss/_variables.scss";`
  },
}
module.exports = nextConfig
