<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" />
      <input v-model.number="operand2" />
      = {{ sum }}
    </div>
    <div class="keyboard">
      <button v-on:click="sum = operand1 + operand2">+</button>
      <button v-on:click="sum = operand1 - operand2">-</button>
      <button v-on:click="sum = operand1 / operand2">/</button>
      <button v-on:click="sum = operand1 * operand2">*</button>
      <button v-on:click="sum = Math.pow(operand1, operand2)">Степень</button>
      <button v-on:click="sum = operand1 % operand2">%</button>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      sum: 0,
    };
  },
};
</script>