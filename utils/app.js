const Web3 = require("web3")
const web3 = new Web3("https://mainnet.infura.io/v3/a81c1d2f62994ffebf16c025bdc3f371")

// Checking avg gas price
web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'))
})

// Hashing functions with web3
web3.utils.sha3('FILL ME') // Must be used on a string, sha3 == keccak256 
// Can use soliditySha3 for creating ABI converted arguments


// Randomness
web3.utils.randomHex(1) // Val is length of random hexidecimal


//Underscore.js library
// web3.utils._
const _ = web3.utils._

// maping object using _
_.each({key1: 'value1', key2: 'value2'}, (value, key) => { // iterating over keys of dict object and give access to values
    console.log(key)
})