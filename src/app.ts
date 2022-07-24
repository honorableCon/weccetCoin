import Blockchain from './core/blockchain'
import Block from './core/block'
import Transaction from './core/transaction'

const blockchain = new Blockchain();
const transaction = new Transaction("bibou", "penda", 123);

const block = new Block();
block.addTransaction(transaction);
blockchain.addBlock(block);
console.log(blockchain);