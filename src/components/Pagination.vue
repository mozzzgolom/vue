<template>
  <div class="wrapper">
    <div class="left" @click="onClick(cur - 1)">-</div>
    <div
      class="pages"
      :class="{ active: cur === i }"
      v-for="i in pagesCount"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    cur: Number,
    count: {
      tipe: Number,
      default: 10,
    },
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.length / this.count);
    },
  },
  methods: {
    onClick(page) {
      if (page < 1 || page > this.pagesCount) {
        return;
      }
      this.$emit("changePage", page);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.left {
  padding-right: 10px;
}
.pages {
  padding-right: 10px;
  cursor: pointer;
}
.active {
  background: #ccc;
}
</style>