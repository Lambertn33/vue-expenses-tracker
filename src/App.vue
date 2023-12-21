<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :totalIncome="totalIncomes" :totalExpense="totalExpenses" />
    <TransactionsList :transactions="transactions" />
    <TransactionsForm @onCreateTransaction="createTransactionHandler" />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useToast } from "vue-toastification";

import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionsForm from "./components/TransactionsForm.vue";
import TransactionsList from "./components/TransactionsList.vue";

const toast = useToast();

const transactions = ref([
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
]);

//create transaction
const createTransactionHandler = (newTransaction) => {
  const transaction = {
    ...newTransaction,
    id: Math.floor(Math.random() * 1000000),
  };
  transactions.value.push(transaction);
  toast.success("new transaction created successfully");
};

// Get total balance
const total = computed(() => {
  return transactions.value.reduce((tot, transaction) => {
    return tot + transaction.amount;
  }, 0);
});

//Get total expenses
const totalExpenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((tot, transaction) => {
      return tot + transaction.amount;
    }, 0);
});

//Get total expenses
const totalIncomes = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((tot, transaction) => {
      return tot + transaction.amount;
    }, 0);
});
</script>