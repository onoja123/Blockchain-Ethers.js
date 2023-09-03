const { ethers } = require('ethers');

const INFURA_ID = ''; // Replace with your Infura Project ID
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const account1 = ''; // Replace with your Ethereum address
const account2 = ''; // Replace with the recipient Ethereum address
const privateKey1 = ''; // Replace with the private key of account1

const ERC_20_ABI = []; // Replace with the ABI of your ERC-20 contract
const contractAddress = ''; // Replace with the address of your ERC-20 contract

const main = async () =>{
  try {
    const wallet = new ethers.Wallet(privateKey1, provider);

    const contract = new ethers.Contract(contractAddress, ERC_20_ABI, provider);
    const contractWithWallet = contract.connect(wallet);

    const balance = await contractWithWallet.getBalance(account1);
    console.log(`Account 1 balance: ${ethers.utils.formatUnits(balance, 'ether')} ETH`);

    const tx = await contractWithWallet.transfer(account2, balance);
    await tx.wait();

    console.log(`Transaction hash: ${tx.hash}`);
    console.log('Transaction completed.');

  } catch (error) {
    console.error('Error:', error.message || error);
  }
}

main();
