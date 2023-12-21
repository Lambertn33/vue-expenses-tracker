<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      :class="renderTransactionClass(transaction.amount)"
      v-for="transaction in transactions"
      :key="transaction.id"
    >
      {{ transaction.text }} <span>{{ transaction.amount }}</span
      ><button class="delete-btn">x</button>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
defineProps({
  transactions: Array,
});

const renderTransactionClass = computed(
  () => (amount) => amount > 0 ? "plus" : "minus"
);
</script>