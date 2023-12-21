<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses />
    <TransactionsList :transactions="transactions" />
    <TransactionsForm />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionsForm from "./components/TransactionsForm.vue";
import TransactionsList from "./components/TransactionsList.vue";

const transactions = ref([
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
]);

const total = computed(() => {
  return transactions.value.reduce((tot, transaction) => {
    return tot + transaction.amount;
  }, 0);
});
</script>