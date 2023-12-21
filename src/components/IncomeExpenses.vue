<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ totalIncome }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ totalExpense }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  totalIncome: {
    type: Number,
    required: true,
  },
  totalExpense: {
    type: Number,
    required: true,
  },
});
</script>