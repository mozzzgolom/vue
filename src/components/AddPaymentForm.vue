<template>
  <div>
    <div>
      <input type="date" placeholder="Date" v-model="date" />
    </div>
    <div>
      <select v-model="category">
        <option
          v-for="(option, index) in getCategoriesList"
          :value="option"
          :key="index"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <div>
      <input type="number" placeholder="value" v-model.number="value" />
    </div>
    <div>
      <button
        class="btn_save"
        v-bind:disabled="category === ''"
        @click="sendPayment"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: "",
      category: "",
      date: new Date().toISOString().slice(0, 10),
    };
  },

  computed: {
    ...mapGetters(["getCategoriesList", "getTotalPayments"]),
  },

  methods: {
    sendPayment() {
      const { category, value } = this;

      const data = {
        id: Date.now(new Date()),
        value,
        category,
        date: this.date,
      };
      this.$emit("addNewPayment", data);
      this.date = "";
      this.category = "";
      this.value = 0;
    },

    acceptQuickPayment() {
      if (this.$route.params.category) {
        this.category = this.$route.params.category;
      }

      if (this.$route.query.value) {
        this.value = this.$route.query.value;
        this.sendPayment();
      }
    },
  },

  watch: {
    $route() {
      this.acceptQuickPayment();
    },
  },

  mounted() {
    this.acceptQuickPayment();
  },
};
</script>

<style lang='sass'>
div
  padding-bottom: 5px
input[type=date]
  padding: 5px
select
  padding: 7px 32px 7px 10px
input[type=number]
  padding: 5px
  width: 140px
.btn_save:disabled
  background-color: grey
  color: black
.btn_save:enabled
  background-color: seagreen
  color: white
</style>