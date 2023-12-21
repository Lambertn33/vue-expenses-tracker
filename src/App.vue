<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :totalIncome="totalIncomes" :totalExpense="totalExpenses" />
    <TransactionsList
      @onDeleteTransaction="deleteTransactionHandler"
      :transactions="transactions"
    />
    <TransactionsForm @onCreateTransaction="createTransactionHandler" />
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";

import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionsForm from "./components/TransactionsForm.vue";
import TransactionsList from "./components/TransactionsList.vue";

const toast = useToast();

const transactions = ref([]);

//create transaction
const createTransactionHandler = (newTransaction) => {
  const transaction = {
    ...newTransaction,
    id: Math.floor(Math.random() * 1000000),
  };
  transactions.value.push(transaction);
  saveTransactionsToLocalStorage();
  toast.success("new transaction created successfully");
};

//delete transaction
const deleteTransactionHandler = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
  saveTransactionsToLocalStorage();
  toast.success("transaction deleted successfully");
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

// initially fetch data
onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});
// save to localstorage
const saveTransactionsToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>