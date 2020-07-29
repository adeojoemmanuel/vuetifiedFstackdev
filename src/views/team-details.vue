<template>
  <div>
    <topbar></topbar>
    <div class="main-content">
      <div id="header-container"></div>

      <!-- Start Team Details Area  -->
      <div
        class="axil-team-details-area axil-team-details-wrapper theme-gradient-4 ppplr--100"
      >
        <div class="container">
          <div class="row align-items-center row--60">
            <div class="col-lg-6 col-xl-5 col-md-12 col-12 order-2 order-lg-1">
              <div class="team-details-inner">
                <div class="inner">
                  <h1 class="title">Calvin Guzman</h1>
                  <span class="subtitle">Executive chairman</span>
                  <ul
                    class="social-share d-flex justify-content-start liststyle flex-wrap"
                  >
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-pinterest-p"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-vimeo-v"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-dribbble"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-behance"></i></a>
                    </li>
                  </ul>
                  <p class="subtitle-2">
                    Phasellus in libero et nunc malesuada tincidunt. Morbi
                    auctor tristique semper. Nunc condimentum dapibus felis, non
                    volutpat ligula dapibus non. Quisque varius massa magna,
                    eget iaculis ipsum tincidunt sed. Sed tempus magna id nunc
                    posuere auctor. Morbi aliquam a justo eget cursus. Donec at
                    quam id ex mollis dapibus eget ac sem. Maecenas pharetra
                    bibendum massa, ut tincidunt lectus.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-xl-6 offset-xl-1 col-md-12 col-12 mt_md--40 mt_sm--40 order-1 order-lg-2 mb_sm--20 mb_md--20"
            >
              <div class="thumbnail text-right">
                <div class="inner">
                  <img
                    class="w-100 paralax-image"
                    src="assets/images/team/team-group.svg"
                    alt="Team images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Team Details Area  -->
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
  name: "teamDetails",
  components: {
    topbar,
    Footeer
  },
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
