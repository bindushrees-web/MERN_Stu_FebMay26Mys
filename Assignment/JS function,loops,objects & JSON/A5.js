//Wallet with this keyword
const wallet = {
    owner: "Anu",
    balance: 0,
    lastTransaction: null,

    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return;
        }

        this.balance += amount;

        this.lastTransaction = {
            type: "DEPOSIT",
            amount: amount,
            balanceAfter: this.balance
        };
    },

    withdraw: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            return;
        }

        if (amount <= this.balance) {
            this.balance -= amount;

            this.lastTransaction = {
                type: "WITHDRAWAL",   
                amount: amount,
                balanceAfter: this.balance
            };
        }
    }
};
wallet.owner = "Anu";

wallet.deposit(4000);
console.log("Balance after deposit:", wallet.balance);

wallet.withdraw(2000);
console.log("Balance after withdrawal:", wallet.balance);

console.log("Last Transaction:", wallet.lastTransaction);