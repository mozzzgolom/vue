<template>
  <v-card class="pa-10">
    <h2 class="mb-4 text-h4">Add New Payment</h2>
    <v-menu
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template #activator="{ on }">
        <v-text-field v-model="date" label="Date" v-on="on"></v-text-field>
      </template>
      <v-date-picker v-model="date"></v-date-picker>
    </v-menu>

    <v-select :items="getCategoriesList" label="Category" v-model="category">
    </v-select>

    <v-text-field label="Value" v-model.number="value"></v-text-field>
    <v-btn @click="sendPayment">Save</v-btn>
  </v-card>
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
</style>