var Tx = require("ethereumjs-tx").Transaction
const Web3 = require('web3')
const web3 = new Web3("http://127.0.0.1:7545") // connection to host node of blockchain

const account1 = '0x2B971b5C69720433b73EA8c94d840124F31b98d7'
const account2 = '0x8402C10BB0c73056A898D52043Cf458fC28bfB03'

// $ export PrivateKey="692c3192a48907e48385cf90c9106eb19e267f1b6bac3660495843c66ca93d34"
// locally assigned environment variable
const privateKey1 = Buffer.from(process.env.PrivateKey, 'hex')
const privateKey2 = '2f8db62babb0d4e16b6816674233d781259958a1817f5576b19909c5555e6976'

// getting nonce value
web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Build transaction
    const txObject = {
        // must convert values to hexidecimals for the blockchain network to read
        nonce : web3.utils.toHex(txCount),
        value : web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        to : account2,
        gasLimit : web3.utils.toHex(21000),
        gasPrice : web3.utils.toHex(web3.utils.toWei('10' , 'gwei')),
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