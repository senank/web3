// ================================================================================


//                          Building a Account for Wallet


// ================================================================================

Web3 = require("web3")
web3 = new Web3() // not connecting blockchain -> building blockchain in native web3 lib

// Creating account
account = web3.eth.accounts.create() // can add a string to increase randomness

// Adding password to account
encryption = web3.eth.accounts.encrypt(account.privateKey, 'password')

// decrypting the account
web3.eth.accounts.decrypt(encryption, 'password')



// Account Data
// { address: '...',
//   privateKey: '...',
//   signTransaction: [Function: signTransaction],
//   sign: [Function: sign],
//   encrypt: [Function: encrypt] }




// ================================================================================


//                            Building a Web3 Wallet


// ================================================================================
// Wallets hold multiple accounts

// creating wallet
wallet = web3.eth.accounts.wallet.create() // can make multiple address by passing number

// Adding password and decrypting the same process as accounts
encryption_ = web3.eth.accounts.wallet.encrypt(account.privateKey, 'password') // Adding password/encrypting the wallet
web3.eth.accounts.wallet.decrypt(encryption_, 'password') // decrypting the wallet
