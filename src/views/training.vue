<template>
  <div>
    <topbar></topbar>

    <Footeer></Footeer>
  </div>
</template>
<script>
import topbar from "@/components/header";
import Footeer from "@/components/footer";
export default {
  name: "service",
  components: {
    topbar,
    Footeer
  },
  methods: {
    sync() {}
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
  },
  beforeCreate() {
    // console.log("this is before created");
  },
  beforeMount() {
    // console.log("this is before mounted");
  },
  mounted() {
    // console.log("this route just got mounted");
  },
  beforeRouteLeave: function(to, from, next) {
    // console.log("this route is about to leave ");
    next();
  }
};
</script>
