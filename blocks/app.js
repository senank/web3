// inspecting blocks using web3
// - web3.getBlock and web3.getBlockNumber

const Web3 = require("web3")
const web3 = new Web3("https://mainnet.infura.io/v3/a81c1d2f62994ffebf16c025bdc3f371")

// Getting latest block number
web3.eth.getBlockNumber().then(console.log) // promise chaining instead of passing callback function with then()


// Getting latest block object
web3.eth.getBlock('latest').then((block) => { // can use a blockHash or blockNumber instead of 'latest'
    console.log({
        blockHash: block.hash,
        blockNumber: block.number,
    })
})


// Looping through multiple blocks
web3.eth.getBlockNumber().then((latest) => { // getting block number
    for (let i = 0; i < 10; i ++) {
        web3.eth.getBlock(latest - i).then((block) => { // looping through max height - 10 for latest 10 blocks
            console.log(block.hash)
        })
    }
})

// ==================================================================================================================


//                                                Analyzing data from block


// ==================================================================================================================
// web3.eth.getBlock('latest').then(console.log)
// - Difficulty to solve block using POW
// - GasLimit
// - Miner
// - ParentHash
// - etc


// getting block transaction count
web3.eth.getBlockTransactionCount('latest').then(console.log)

// getting block hash
const hash = web3.eth.getBlock('latest').then((b) => {console.log(b.hash)})
web3.eth.getTransactionFromBlock(hash, 2).then(console.log) // the second param in getTransactionFromBlock = # of the transaction in the block

