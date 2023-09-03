const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = ''

const main = async () => {
    try {
        const balance = await provider.getBalance(address)
        console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
    } catch (error) {
        console.error('Error:', error.message || error);
    }
}

main()
 