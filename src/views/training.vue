<template>
  <div>
    <topbar></topbar>
      <div class="main-content">
        <div id="header-container"></div>
        <main class="main-wrapper">
            <!-- Start Slider Area -->
            <div class="axil-slider-area axil-slide-activation position-relative">
                <!-- Start Single Slide -->
                <div class="axil-slide slide-style-5 theme-gradient-8 d-flex align-items-center">
                    <div class="container" style="margin-top: 5%;">
                        <div class="row align-items-center w-100">
                            <div class="col-lg-8 col-12">
                                <div class="content">
                                    <div class="inner">
                                        <h1 class="axil-display-1 mb--40 wow slideFadeInUp" data-wow-duration="1s" data-wow-delay="500ms">Technology <br /> & design studio</h1>
                                            <a class="axil-button  btn-large btn-transparent wow slideFadeInUp" data-wow-duration="1s" data-wow-delay="800ms" href="#"><span
                                                class="button-text">View Showcase</span><span
                                                class="button-icon"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <training-form />
                </div>
                <!-- End Single Slide -->
            </div>
            <!-- End Slider Area -->
        </main>

        <!-- Start Footer Area -->
        <div id="footer-container"></div>
        <!-- End Footer Area -->
    </div>
    <Footeer></Footeer>
  </div>
</template>
<script>
import TrainingForm from '@/components/TrainingForm.vue';
import topbar from "@/components/header";
import Footeer from "@/components/footer";
export default {
  name: "service",
  components: {
    topbar,
    Footeer,
    TrainingForm
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
