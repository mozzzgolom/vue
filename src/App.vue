<template>
  <div id="app">
    <div :class="$style.header">
      <h1>My personal cost</h1>
    </div>
    <div>
      <button @click="clicked = !clicked">Add new cost</button>
      <AddPaymetForm
        @addNewPayment="addNewPaymentData"
        v-show="clicked"
        :category-list="categorylist"
      />
    </div>
    <div class="wrapper">
      <PaymentsDisplay :items="currentElements" />
    </div>
    <Pagination
      :length="paymetslistLength"
      @changePage="onPaginate"
      :count="count"
      :cur="page"
    />
  </div>
</template>



<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import AddPaymetForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    AddPaymetForm,
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
      clicked: 0,
      page: 1,
      count: 10,
      // paymetslist: [],
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentList"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    addNewPaymentData(value) {
      this.addDataToPaymentList(value);
    },
    onPaginate(p) {
      this.page = p;
    },
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    getFullValue() {
      return this.getFullPaymentValue;
    },
    paymetslist() {
      return this.$store.getters.getPaymentList;
    },
    paymetslistLength() {
      return this.$store.getters.getPaymentList.length;
    },
    categorylist() {
      return this.$store.getters.getCategoryList;
    },
    currentElements() {
      const { count, page } = this;
      return this.paymetslist.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
  },
  created() {
    // this.paymetslist = this.fetchData();
    // this.$store.commit("setPaymentsListData", this.fetchData());
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
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
