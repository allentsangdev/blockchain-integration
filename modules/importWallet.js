const Config = require(".././config");
const { ethers } = require('ethers');

// Use the provider for the local Ganache instance
const provider = new ethers.providers.JsonRpcProvider(Config.networkProvider);

async function importWallet(seedPhrase) {
  // Create a Wallet instance with the provided mnemonic
  const wallet = ethers.Wallet.fromMnemonic(seedPhrase)

  // Extract the seed phrase, account private key, public address, and the signTransaction function from the "Etherjs Wallet" instance
  const mnemonic = wallet.mnemonic.phrase;
  const privateKey = wallet.privateKey;
  const address = wallet.address;
  const signTransaction = wallet.signTransaction.bind(wallet);

  // Return the extracted info to the function caller
  return {
    mnemonic: mnemonic,
    privateKey: privateKey,
    address: address,
    signTransaction: signTransaction ,
  };
}

module.exports = {
  importWallet
}

/* Example usage
const mnemonic = 'stumble bean velvet aspect ocean come tuition lyrics cave weird warm dust'
importWallet(mnemonic).then((results) => {
  console.log(results);
}).catch((error) => {
  console.error(error);
});
*/