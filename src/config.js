const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    apiUrl: 'http://35.230.85.79:9090',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'http://35.230.85.79:9090',
  },
}

// const paths = {
//   login: '/path'
// }

module.exports = merge(config.all, config[config.all.env])
