const { ethers } = require('ethers');


const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const account1 = ''
const account2 = ''

const privateKey1 = ''

const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () =>{
    try {
        const senderBalanceBefore = await wallet.getBalance(account1)
        const recieverBalanceBefore = await wallet.getBalance(account2)
    
        console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
        console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)
    
    
        const tx = await wallet.sendTransaction({
            to: account1,
            value: ethers.utils.parseEther("0.025")
        })
    
    
        await tx.wait()
        console.log(tx)
    
        const senderBalanceAfter = await provider.getBalance(account1)
        const recieverBalanceAfter = await provider.getBalance(account2)
    
        console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
        console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
    } catch (error) {
        console.error('Error:', error.message || error);
    }
}

main()