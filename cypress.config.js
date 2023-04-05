const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://buger-eats.vercel.app/',
    env: {
      hideCredentials: true,
      requestMode: true
    },
    experimentalRunAllSpecs: true
  },
  fixturesFolder: false,
  video: false
})
