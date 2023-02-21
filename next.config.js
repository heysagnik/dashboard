/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   "extends": "next",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  }
}

 
module.exports = nextConfig
