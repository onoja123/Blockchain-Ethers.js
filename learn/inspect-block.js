const { ethers } = require("ethers");

const INFURA_ID = ''; // Replace with your Infura Project ID
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const main = async () =>{
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log(`Block Number: ${blockNumber}\n`);

    const blockInfo = await provider.getBlock(blockNumber);
    console.log(blockInfo);

    const { transactions } = await provider.getBlockWithTransactions(blockNumber);
    console.log(`\nLogging first transaction in block:\n`);
    console.log(transactions[0]);
  } catch (error) {
    console.error("Error:", error.message || error);
  }
}

async function main() {
  await getBlockInfo();
}

main();
