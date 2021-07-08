<template>
  <div class="payment-form">
    <div><input placeholder="date" type="text" v-model.trim="date" /></div>
    <!-- <div>
      <input placeholder="category" type="text" v-model.trim="category" />
    </div> -->
    <div>
      <select v-model="category">
        <option v-for="(item, idx) in categoryList" :value="item" :key="idx">
          {{ item }}
        </option>
      </select>
    </div>
    <div>
      <input placeholder="amout" type="number" v-model.number="value" />
    </div>

    <button @click="onClick">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymetForm",
  props: ["categoryList"],
  data() {
    return {
      date: "",
      category: "",
      value: 0,
    };
  },
  methods: {
    getCurrentDate() {
      const today = new Date();
      const d = ("0" + today.getDate()).slice(-2);
      const m = ("0" + (today.getMonth() + 1)).slice(-2);
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    onClick() {
      // console.log("saved");
      const { value, category } = this;
      const data = {
        date: this.date || this.getCurrentDate(),
        category,
        value,
      };
      console.log(data);
      this.$emit("addNewPayment", data);
      this.date = "";
      this.category = "";
      this.value = 0;
    },
  },
};
</script>

<style lang="scss" scoped module>
button {
  padding: 10px 45px;
  border: none;
}
button:enabled {
  background-color: seagreen;
  color: white;
}
input {
  margin-bottom: 5px;
}

input:first-child {
  margin-top: 5px;
}
</style>