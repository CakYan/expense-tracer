import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transactionStore",{
    state: () => ({
        transactions: []
    }),
    actions: {
        generateUniqueId(){
            return Math.floor(Math.random() * 1000000);
        },
        addTransactionStore(transactionData){
            this.transactions.push({
                id: this.generateUniqueId(),
                text: transactionData.text,
                amount: transactionData.amount,
            });
            this.saveTransactionsToLocalStorage();
        },
        deleteTransactionStore(id){
            this.transactions = this.transactions.filter((transaction) => transaction.id !== id);

            this.saveTransactionsToLocalStorage();
        },
        saveTransactionsToLocalStorage(){
            localStorage.setItem('transactions', JSON.stringify(this.transactions));
        },
        loadTransactionStore(){
            const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
            if (savedTransactions) {
                this.transactions = savedTransactions;
            }
        },
    },
    getters: {
        total() {
            return this.transactions.reduce((acc, transaction) => {
                return acc + transaction.amount;
            }, 0);
        },
        income() {
            return this.transactions
            .filter((transaction) => transaction.amount > 0)
            .reduce((acc, transaction) => {
                return acc + transaction.amount;
            }, 0)
            .toFixed(2);
        },
        expense() {
            return this.transactions
            .filter((transaction) => transaction.amount < 0)
            .reduce((acc, transaction) => {
                return acc + transaction.amount;
            }, 0)
            .toFixed(2);
        }
    },
});