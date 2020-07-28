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
                    <!-- Start Contact Form -->
                    <div class="contact-form-wrapper" style="margin-buttom:10%;">
                        <div class="axil-contact-form contact-form-style-1">
                            <h3 class="title">Bootcamp Registration Form</h3>
                            <form action="#">
                                <div class="form-group">
                                    <input type="text">
                                    <label>Surname</label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text">
                                    <label>First Name</label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text">
                                    <label>Other Name</label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="form-group">
                                    <input type="email">
                                    <label>Email</label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text">
                                    <label>Phone Number</label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="form-group">
                                    <input type="text">
                                    <label>Address</label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="form-group">
                                    <button class="axil-button btn-large btn-transparent w-100">
                                        <span class="button-text">Register Now</span><span
                                            class="button-icon"></span>
                                    </button>
                                </div>
                            </form>
                            <div class="callto-action-wrapper text-center">
                                <span class="text">Or call us now</span>
                                <span><i class="fal fa-phone-alt"></i> <a href="#">+(234)
                                    813490-1464</a></span>
                            </div>
                        </div>
                    </div>
                    <!-- End Contact Form -->
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
