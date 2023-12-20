<script setup>
  import Header from './components/Header.vue'
  import Balance from './components/Balance.vue'
  import IncomeExpenses from './components/IncomeExpenses.vue'
  import TransactionList from './components/TransactionList.vue'
  import AddTransaction from './components/AddTransaction.vue'
  import { ref, computed, onMounted } from 'vue';
  import { useToast } from 'vue-toastification';
</script>

<template>
  <router-view></router-view>
</template>