// Importing Config file
const Config = require(".././config");
// Adding web3.js into project
const Web3 = require("web3");
// Create web3 instance
let web3 = new Web3(Config.networkProvider);

// Factory function to create a wallet account object
function createWallet() {
  let newWallet = web3.eth.accounts.wallet.create(1);
  return newWallet;
}

module.exports = {
  createWallet,
};
