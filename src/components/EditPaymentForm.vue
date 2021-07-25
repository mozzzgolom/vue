<template>
  <div>
    <input type="date" v-model="dateToHTML" />
    <select v-model="item.category">
      <option
        v-for="(option, index) in getCategoriesList"
        :value="option"
        :key="index"
      >
        {{ option }}
      </option>
    </select>
    <input type="number" placeholder="Value" v-model.number="item.value" />
    <button @click="updatePayment">Save</button>
    <button @click="closeForm">Cancel</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EditPaymentForm",
  data() {
    return {
      dateToHTML: "",
    };
  },
  props: {
    item: Object,
    settings: Object,
  },

  computed: {
    ...mapGetters(["getCategoriesList"]),
    dateWithCorrectTimezone() {
      const offset = new Date().getTimezoneOffset() * 60000;
      return new Date(new Date(this.item.date).getTime() - offset)
        .toISOString()
        .slice(0, 10);
    },
  },

  methods: {
    updatePayment() {
      this.$context.emitAction(
        { ...this.item, date: this.dateToHTML },
        this.settings.name + this.settings.itemName
      );

      this.closeForm();
      this.$context.hide();
    },
    closeForm() {
      this.$context.hideContentWindow();
    },
  },

  mounted() {
    this.dateToHTML = this.dateWithCorrectTimezone;
  },
};
</script>

<style lang='sass'>
button
  margin: 5px
input[type=date]
  padding: 5px
  margin: 5px
select
  padding: 7px 32px 7px 10px
  margin: 5px
input[type=number]
  padding: 5px
  width: 140px
  margin: 5px
</style>