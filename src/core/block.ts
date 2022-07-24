import Transaction from "./transaction";
import { sha256 as SHA256 } from 'js-sha256';

class Block {
    public index: number = 0;
    public hash: string = '';
    private previousHash: string = '';
    public transactions: Transaction[] = [];
    public timestamp: number;
    public nonce: number = 0;

    constructor() {
        this.timestamp = Date.now();
    }

    addTransaction(transaction: Transaction): Transaction[] {
        this.transactions.push(transaction);
        return this.transactions;
    }

    generateHash(): string {
        let hash = '';
        
        while(hash.startsWith('000') == false) {
            hash = SHA256(
                this.index +
                this.previousHash + 
                this.timestamp +
                this.nonce + 
                JSON.stringify(this.transactions)
            ).toString();

            this.nonce++;
            console.log(hash)
        }
        
        return hash;
    }

    setPreviousHash(previousHash: string): string{
        this.previousHash = previousHash;
        return this.previousHash;
    }

}

export default Block;