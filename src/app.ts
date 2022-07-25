import Blockchain from './core/blockchain'
import Block from './core/block'
import Transaction from './core/transaction'

const express = require('express')
const app = express();
const port = process.argv[2] || 8020
const blockchain = new Blockchain();
const block = new Block();

app.use(express.json())


app.get('/blockchain', (req:any, res:any) => {
    blockchain.addBlock(block);
    return res.json(blockchain);
})


app.post('/transactions', async (req:any, res:any) => {
    const { from, to, amount } = req.body;
    const transaction = new Transaction(from, to, amount);
    block.addTransaction(transaction);
    return res.json(block);
})


app.listen(port, ()=>{
    console.log('listening on port', port);
})
