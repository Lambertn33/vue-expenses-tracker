<template>
  <h3>Add new transaction</h3>
  <form @submit.prevent="submitHandler">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input type="text" v-model="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const text = ref("");
const amount = ref("");

const emit = defineEmits(["onCreateTransaction"]);

const submitHandler = () => {
  if (!amount || !text) {
    toast.error("Both fields must be filled");
    return;
  }

  const newTransaction = { text: text.value, amount: parseFloat(amount.value) };
  emit("onCreateTransaction", newTransaction);
  resetForm();
};

const resetForm = () => {
  amount.value = "";
  text.value = "";
};
</script>