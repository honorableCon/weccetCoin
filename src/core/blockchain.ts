import Block from "./block";

class Blockchain{
    private static GENESIS_BLOCK_HASH = "0000000000000000";
    private chain: Block[] = [];

    addBlock(block: Block): Block {
        if (this.chain.length){
            const previousBlock = this.getPreviousBlock();
            block.setPreviousHash(previousBlock.hash);
            block.index = this.chain.length
        } else {
            block.setPreviousHash(Blockchain.GENESIS_BLOCK_HASH);
            block.index = 0;         
        }
        block.hash = block.generateHash();
        this.chain.push(block);

        return block;
    }

    getPreviousBlock(): Block{
        return this.chain[this.chain.length - 1];
    }

    getLastBlock(): Block{
        return this.chain[this.chain.length]
    }
}


export default Blockchain;