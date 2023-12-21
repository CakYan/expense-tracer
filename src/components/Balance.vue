<script setup>
import { useTransactionStore } from '../stores/TransactionStore';
const transactionStore = useTransactionStore();
</script>

<template>
    <h4>Your Balance</h4>
    <h1 id="balance">{{ transactionStore.total }}</h1>
</template>