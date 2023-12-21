<script setup>
  import Header from '../components/Header.vue'
  import Balance from '../components/Balance.vue'
  import IncomeExpenses from '../components/IncomeExpenses.vue'
  import TransactionList from '../components/TransactionList.vue'
  import AddTransaction from '../components/AddTransaction.vue'
  import { ref, computed, onMounted } from 'vue';
  import { useToast } from 'vue-toastification';
  import { useTransactionStore } from '../stores/TransactionStore';

  // const transactions = ref([]);
  const toast = useToast();
  const transactionStore = useTransactionStore();
  const total = transactionStore.total;
  const income = transactionStore.income;
  const expense = transactionStore.expense;
  const transactions = transactionStore.transactions

  onMounted(() => {
    transactionStore.loadTransactionStore();
  });

  const handleTransactionSubmitted = (transactionData) => {
    transactionStore.addTransactionStore(transactionData);
    toast.success('Transaction added!!');
  };


  const handleTransactionDeleted = (id) => {
    transactionStore.deleteTransactionStore(id);
    toast.success('Transaction deleted!!!');
  };

</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="total"/>
    <IncomeExpenses :income="+income" :expense="+expense"/>
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted"/>
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted"/>
  </div>
</template>