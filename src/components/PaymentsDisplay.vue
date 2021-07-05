<template>
  <div class="list">
    <div :class="$style.top_list">
      <span>#</span><span>Date</span><span>Category</span><span>Price</span>
    </div>
    <div :class="$style.list" v-for="(item, idx) in items" :key="idx">
      <div>{{ idx + 1 }}.</div>
      <div>{{ item.date }}</div>
      <div>{{ item.category }}</div>
      <div>{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      defoult: () => [],
      required: true,
    },
  },
};
</script>

<style  lang="scss" module>
.top_list {
  display: grid;
  justify-content: center;
  grid-template-columns: 20px 154px 154px 154px;
  margin-bottom: 20px;
  width: 600px;
  font-size: 20px;
}
.list {
  display: grid;
  justify-content: center;
  grid-template-columns: 30px 154px 154px 154px;
  margin-bottom: 10px;
  width: 600px;
}
.list:nth-child(odd) {
  background-color: aquamarine;
}
.list:nth-child(even) {
  background-color: aqua;
}
</style>