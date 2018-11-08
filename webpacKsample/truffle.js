// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }

  }
}


/*
truffle unbox webpack
npm install -g webpack
 npm install -g webpack-dev-server
  npm install babel-register

  to strat the application 
  truffle compile
  start the testrpc in other terminal

  update the truffle.js with devleopment
  truffle migrate
  npm run dev
*/