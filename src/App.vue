<template>
  <div id="app">
    <div :class="$style.header">
      <h1>My personal cost</h1>
    </div>
    <div>
      <button @click="clicked = !clicked">Add new cost</button>
      <AddPaymetForm @addNewPayment="addNewPaymentData" v-show="clicked" />
    </div>
    <br />
    <div class="wrapper"><PaymentsDisplay :items="paymetslist" /></div>
  </div>
</template>



<script>
import AddPaymetForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";

export default {
  name: "App",
  components: {
    AddPaymetForm,
    PaymentsDisplay,
  },
  data() {
    return {
      clicked: 0,
      paymetslist: [],
    };
  },
  methods: {
    addNewPaymentData(data) {
      this.paymetslist = [...this.paymetslist, data];
    },
    fetsData() {
      return [
        {
          date: "04.07.2021",
          category: "1",
          value: 180,
        },
        {
          date: "04.06.2021",
          category: "2",
          value: 1800,
        },
        {
          date: "04.05.2021",
          category: "3",
          value: 18000,
        },
        {
          date: "04.04.2021",
          category: "4",
          value: 180000,
        },
      ];
    },
  },
  created() {
    this.paymetslist = this.fetsData();
  },
};
</script>

<style lang="scss" module scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  font-size: 20px;
}
button {
  padding: 10px 20px;
  border: none;
  background-color: seagreen;
  color: white;
}
</style>
