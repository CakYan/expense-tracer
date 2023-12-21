<script setup>
import { useTransactionStore } from '../stores/TransactionStore';
const transactionStore = useTransactionStore();
    // import { defineProps } from 'vue';
    // const props = defineProps ({
    //     income: {
    //         type: Number,
    //         required: true,
    //     },
    //     expense: {
    //         type: Number,
    //         requrired: true,
    //     },
    // });
</script>
<template>
    <div class="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">+${{ transactionStore.income }}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">-${{ transactionStore.expense }}</p>
        </div>
    </div>        
</template>