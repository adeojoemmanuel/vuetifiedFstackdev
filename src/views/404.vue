<template>
  <div>
    <div class="main-content">
      <div id="header-container"></div>
      <!-- Start Page Wrapper -->
      <main class="page-wrapper page-error">
        <!-- Start Page Error Area  -->
        <div
          class="axil-error-not-found fullscreen d-flex align-items-center theme-gradient-7 list-active"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="axil-error text-center">
                  <div class="inner">
                    <h1 class="title mb--20">Page not Found</h1>
                    <p class="subtitle-2 mb--30">Error</p>
                    <a
                      class="axil-button btn-large btn-transparent"
                      href="index.html"
                      ><span class="button-text">Go Back</span
                      ><span class="button-icon"></span
                    ></a>
                    <img
                      class="text-image"
                      src="assets/images/others/404.svg"
                      alt="404 Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shape-group">
            <div class="shape shape-01">
              <img src="assets/images/shape/404-01.svg" alt="Shape Images" />
            </div>
            <div class="shape shape-02">
              <img src="assets/images/shape/404-01.svg" alt="Shape Images" />
            </div>
            <div class="shape shape-03">
              <img src="assets/images/shape/404-02.svg" alt="Shape Images" />
            </div>
            <div class="shape shape-04">
              <img src="assets/images/shape/404-03.svg" alt="Shape Images" />
            </div>
          </div>
        </div>
        <!-- End Page Error Area  -->
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: "p404",
  methods: {
    sync() {
      // console.log("Jquery mounted");
    }
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
    // this.$forceUpdate();
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
