class Transaction{
    private from: string;
    private to: string;
    private amount: number;

    constructor(from: string, to: string, amount: number){
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
}

export default Transaction