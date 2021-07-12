<template>
  <div>
    <div>
      <button @click="clicked = !clicked">Add new cost</button>
      <div class="autpaiments">
        <button @click="quickPayment('food', 200)" v-show="clicked">
          Add - Food / 200
        </button>
        <br />
        <button @click="quickPayment('transport', 50)" v-show="clicked">
          Add - Transport / 50
        </button>
        <br />
        <button @click="quickPayment('education', 2000)" v-show="clicked">
          Add - Education / 2000
        </button>
      </div>
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
import AddPaymetForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
export default {
  name: "PageDashboard",
  components: {
    AddPaymetForm,
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
      clicked: false,
      page: 1,
      count: 10,
      pageName: "",
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
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },
    quickPayment(category, value) {
      this.$router.push({ path: `/add/payment/${category}?value=${value}` });
    },
    // setPage() {
    //   this.pageName = location.pathname.slice(1);
    // },
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
button {
  padding: 10px 20px;
  border: none;
  background-color: seagreen;
  color: white;
  margin-bottom: 10px;
}
</style>