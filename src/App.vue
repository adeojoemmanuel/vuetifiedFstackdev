<template>
  <div id="app">
    <topbar></topbar>
    <transition name="page-animation">
      <div class="tdx-main-view">
        <router-view />
      </div>
    </transition>
    <!-- <Footer></Footer> -->
    <Footer></Footer>
    <notifications group="errors" :speed="500" />
    <notifications group="notify" :speed="500" />
  </div>
</template>

<style></style>
<script>


import topbar from "@/components/header";
import router from "@/router";
import Footer from "@/components/footer";

export default {
  data() {
    return {
      isloading: false
    };
  },
  components: {
    topbar,
    Footer
  },
  methods: {
    sync() {}
  },
  watch: {
    $route: "sync"
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  created() {
    this.sync();
  }
};
</script>
