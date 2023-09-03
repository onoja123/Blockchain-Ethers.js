const { ethers } = require('ethers');

const INFURA_ID = ''; // Replace with your Infura Project ID
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address = '';

const ERC_20_ABI = []; 

const main = async () =>{
  try {

    const contract = new ethers.Contract(address, ERC_ABI, provider)

    const block = await provider.getBlockNumber()

    const transferEvents = await contract.queryFilter('Transfer', block - 1, block)
    console.log(transferEvents)

  } catch (error) {
    console.error('Error:', error.message || error);
  }
}

main();
