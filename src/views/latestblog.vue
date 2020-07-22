<template>
  <!-- Start Blog Area -->
  <div>
    <topbar></topbar>
    <div class="axil-blog-area ax-section-gap bg-color-lightest ppplr--100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <span class="sub-title extra04-color">what's going on</span>
              <h2 class="title">Latest stories</h2>
              <p class="subtitle-2">
                In vel varius turpis, non dictum sem. Aenean in efficitur ipsum,
                in egestas ipsum. Mauris in mi ac tellus.
              </p>
            </div>
          </div>
        </div>
        <div class="row blog-list-wrapper mt--20">
          <!-- Start Blog Area -->
          <div class="col-lg-6 col-md-6 col-12">
            <div class="axil-blog axil-control mt--40 active move-up wow">
              <div class="content">
                <div class="content-wrap paralax-image">
                  <div class="inner">
                    <span class="category">Lifestyle</span>
                    <h5 class="title">
                      <a href="blog-details.html"
                        >Choosing the right features for your custom</a
                      >
                    </h5>
                    <p>
                      Quisque eget erat augue. Cras gravida enim nulla, a dictum
                      erat fringilla at.
                    </p>
                  </div>
                </div>
              </div>
              <div class="thumbnail">
                <div class="image">
                  <img src="assets/images/blog/blog-01.jpg" alt="Blog images" />
                </div>
              </div>
            </div>
          </div>
          <!-- End Blog Area -->
          <!-- Start Blog Area -->
          <div class="col-lg-6 col-md-6 col-12">
            <div class="axil-blog axil-control mt--40 move-up wow">
              <div class="content">
                <div class="content-wrap paralax-image">
                  <div class="inner">
                    <span class="category">Lifestyle</span>
                    <h5 class="title">
                      <a href="blog-details.html"
                        >Choosing the right features for your custom</a
                      >
                    </h5>
                    <p>
                      Quisque eget erat augue. Cras gravida enim nulla, a dictum
                      erat fringilla at.
                    </p>
                  </div>
                </div>
              </div>
              <div class="thumbnail">
                <div class="image">
                  <img src="assets/images/blog/blog-02.jpg" alt="Blog images" />
                </div>
              </div>
            </div>
          </div>
          <!-- End Blog Area -->
        </div>
      </div>
    </div>
    <Footeer></Footeer>
  </div>
</template>
<script>
import topbar from "@/components/header";
import Footer from "@/components/footer";
export default {
  name: "latestBlog",
  components: {
    topbar,
    Footer
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
