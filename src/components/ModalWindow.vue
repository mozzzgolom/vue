<template>
  <div class="wrapper">
    <div class="header">{{ settings.header }}</div>
    <br />
    <div class="content">
      <AddPaymentForm v-if="settings.compName === 'add'" />
      <Auth v-if="settings.compName === 'auth'" />
    </div>
    <br />
    <div class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
    <br />
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import Auth from "./Auth.vue";
export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm,
    Auth,
  },
  props: {
    settings: {
      type: Object,
    },
  },
  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss" module scoped>
.wrapper {
  padding: 10px;
  position: absolute;
  background: #e3e3e3;
  top: 0px;
}
button {
  padding: 10px 45px;
  border: none;
}
button:enabled {
  background-color: seagreen;
  color: white;
}
</style>