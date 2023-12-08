import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5175/calculatrice',
    /* setupNodeEvents(on, config) {
      // implement node event listeners here
    }, */
  },
})
