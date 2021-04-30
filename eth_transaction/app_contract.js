// https://remix.ethereum.org/ for compling, deploying and storing smart contracts
// this gives you the data for the contract too inside details after compiling

var Tx = require("ethereumjs-tx").Transaction
const Web3 = require('web3')
const web3 = new Web3("http://127.0.0.1:7545") // connection to host node of blockchain

const account1 = '0x2B971b5C69720433b73EA8c94d840124F31b98d7'
const account2 = '0x8402C10BB0c73056A898D52043Cf458fC28bfB03'

// $ export PrivateKey="x" -> Buffer.from(process.env.PrivateKey, 'hex')
// locally assigned environment variable
const privateKey1 = Buffer.from(process.env.PrivateKey, 'hex')
const privateKey2 = '2f8db62babb0d4e16b6816674233d781259958a1817f5576b19909c5555e6976'

// ==========================================================================================


//                         1. Creating Smart Contract and Deploying to Network


// ==========================================================================================

web3.eth.getTransactionCount(account1, (err, txCount) => { // getting nonce value
    // contract data from https://remix.ethereum.org/
    const data = 'FILL ME' // fill in with data from details tab after compiling contract 

    // Build transaction
    const txObject = {
        // must convert values to hexidecimals for the blockchain network to read
        nonce : web3.utils.toHex(txCount),
        gasLimit : web3.utils.toHex(21000),
        gasPrice : web3.utils.toHex(web3.utils.toWei('10' , 'gwei')),
        data : data
    }

    // Sign the transaction
    const tx = new Tx(txObject)
    tx.sign(privateKey1)

    // serialize signature and convert to hex string
    const txSerialized = tx.serialize()
    const raw = '0x' + txSerialized.toString('hex')


    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log("txHash: ", txHash)
    })
})



// checking account 1 balance
// web3.eth.getBalance(account1, (err, bal) => {
//     console.log('account 1 balance:', web3.utils.fromWei(bal, 'ether'))
// }) 




// ==========================================================================================


//                          2. Utilizing Smart Contract on Network


// ==========================================================================================

// TODO: assign const ABI and address
const contractAddress = 'FILL ME' // get from network etherscan code
const contractABI = 'FILL ME' // get from network etherscan code
const tokenContract = new web3.eth.Contract(contractABI, contractAddress) // var vs const??

web3.eth.getTransactionCount(account1, (err, txCount) => {
    const txObject = {
        nonce : web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10' , 'gwei')),
        to: contractAddress,
        data: contract.methods.transfer(account2, 100).encodeABI() // web3 usage for hexidecimal representation
    }
})