/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@cloudscape-design/components",
    "@cloudscape-design/component-toolkit",
    "@cloudscape-design/global-styles"
  ],
  output: 'export',
  trailingSlash: true
};
