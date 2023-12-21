<script setup>
import { useTransactionStore } from '../stores/TransactionStore';
const transactionStore = useTransactionStore();
    // import { defineProps } from 'vue';
    // const props = defineProps ({
    //     total: {
    //         type: Number,
    //         required: true,
    //     }
    // })
</script>
<template>
    <h4>Your Balance</h4>
    <h1 id="balance">{{ transactionStore.total }}</h1>
</template>