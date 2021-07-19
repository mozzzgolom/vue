<template>
  <div id="app">
    <div :class="$style.header">
      <h1>My personal cost</h1>
    </div>
    <div class="menu">
      <a href="#" @click="goToPage('about')">About</a> /
      <a href="#" @click="goToPage('dashboard')">Dashboard</a>
      <!-- <router-link to="/about"> About </router-link> /
      <router-link to="/dashboard"> Dashboard </router-link> -->
      <!-- <a href="about">About</a> / <a href="dashboard">Dashboard</a> /
      <a href="404">404</a> -->
    </div>
    <br />
    <div class="content">
      <router-view />
      <!-- <PageAbout v-if="pageName === 'about'" />
      <PageDashboard v-if="pageName === 'dashboard'" />
      <Page404 v-if="pageName === '404'" /> -->
    </div>
  </div>
</template>



<script>
// import PageAbout from "./page/PageAbout.vue";
// import PageDashboard from "./page/PageDashboard.vue";
// import Page404 from "./page/Page404.vue";

export default {
  name: "App",
  components: {
    // PageAbout,
    // PageDashboard,
    // Page404,
  },
  data() {
    return {
      clicked: 0,
      page: 1,
      count: 10,
      pageName: "",
      // paymetslist: [],
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },
    // setPage() {
    //   this.pageName = location.pathname.slice(1);
    // },
  },
  created() {
    // this.paymetslist = this.fetchData();
    // this.$store.commit("setPaymentsListData", this.fetchData());
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
    this.$store.dispatch("fetchCategoryList");
  },
  mounted() {
    // this.setPage();
    // const links = document.querySelectorAll("a");
    // links.forEach((link) => {
    //   link.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     history.pushState({}, "", link.href);
    //     this.setPage();
    //   });
    // });
    // window.addEventListener("popstate", () => {
    //   this.setPage();
    // });
    // this.setPage();
    // window.addEventListener("hashchange", () => {
    //   console.log("hashchange");
    //   this.setPage();
    // });
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
