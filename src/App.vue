<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionsList />
    <TransactionsForm />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionsForm from "./components/TransactionsForm.vue";
import TransactionsList from "./components/TransactionsList.vue";
</script>