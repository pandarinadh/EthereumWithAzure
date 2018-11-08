/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks:{
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // match any network id
    },
    production: {
      host: "bchhej-dns-reg1.eastus.cloudapp.azure.com",
      port: 8545,
      gas:4712388,
      network_id: "*" // match any network id
    }
  }
};

/*
  truffle init 

  Copy from Portal SSH-TO-FIRST-TX-NODE-REGION1
ssh -p 4000 pandari@bchhej-dns-reg1.eastus.cloudapp.azure.com
open terminal enter the command

you have to enter the password - Password123456

geth attach

personal.unlockAccount(eth.coinbase)

enter password - Password123456

open other terminal window
truffle compile
truffle migrate --network production
if you get error, go to other terminal and enter passw2ord again by entering personal.unlockAccount(eth.coinbase)
password

truffle console type the following commands in truffle console

truffle console --network production
var mg

MyGame.deployed().then(function(deployed){mg=deployed;});
mg.showScore.call("Pandari").then(function(returnValue){console.log(returnValue);});

*/