<template>
            <!-- Start Portfolio Area -->
            <!-- <div class="axil-portfolio-area ax-section-gap bg-color-lightest ppplr--100">
                <div class="container axil-masonary-wrapper">
                    <div class="row align-items-end">
                        <div class="col-lg-5 col-md-12">
                            <div class="section-title mb_md--20 mb_sm--20">
                                <span class="sub-title extra07-color wow" >our projects</span>
                                <h2 class="title wow mb--0" >Some of our finest work.</h2>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="messonry-button text-left text-lg-right">
                                <button data-filter="*" class="is-checked"><span class="filter-text">All</span></button>
                                <button data-filter=".cat--1"><span class="filter-text">Web</span></button>
                                <button data-filter=".cat--2"><span class="filter-text">App</span></button>
                                <button data-filter=".cat--3"><span class="filter-text">DevUps</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="mesonry-list grid-metro3 mt--20"> -->
                                <!-- Start Single Portfolio -->
                                <!-- <div
                                    class="portfolio portfolio_style--1 axil-control active portfolio-33-33 cat--1 cat--2">
                                    <div class="inner move-up wow">
                                        <div class="thumb paralax-image">
                                            <a href="single-case-study.html"><img
                                                    src="assets/images/portfolio/portfolio-01.jpg"
                                                    alt="Portfolio Images" /></a>
                                        </div>
                                        <div class="port-overlay-info">
                                            <div class="hover-action">
                                                <h4 class="title"><a href="single-case-study.html">Creative Agency</a>
                                                </h4>
                                                <span class="category">ios, design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- End Single Portfolio -->

                                <!-- Start Single Portfolio -->
                                <!-- <div class="portfolio portfolio_style--1 axil-control portfolio-33-33 cat--3">
                                    <div class="inner move-up wow">
                                        <div class="thumb paralax-image">
                                            <a href="single-case-study.html"><img
                                                    src="assets/images/portfolio/portfolio-02.jpg"
                                                    alt="Portfolio Images" /></a>
                                        </div>
                                        <div class="port-overlay-info">
                                            <div class="hover-action">
                                                <h4 class="title"><a href="single-case-study.html">Rant bike</a></h4>
                                                <span class="category">Branding</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- End Single Portfolio -->

                                <!-- Start Single Portfolio -->
                                <!-- <div class="portfolio portfolio_style--1 portfolio-33-33 cat--2 cat--3">
                                    <div class="inner move-up wow">
                                        <div class="thumb paralax-image">
                                            <a href="single-case-study.html"><img
                                                    src="assets/images/portfolio/portfolio-03.jpg"
                                                    alt="Portfolio Images" /></a>
                                        </div>
                                        <div class="port-overlay-info">
                                            <div class="hover-action">
                                                <h4 class="title"><a href="single-case-study.html">All Volees</a></h4>
                                                <span class="category">Web application</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- End Single Portfolio -->

                                <!-- Start Single Portfolio -->
                                <!-- <div class="portfolio portfolio_style--1 portfolio-33-33 cat--1 cat--2">
                                    <div class="inner move-up wow">
                                        <div class="thumb paralax-image">
                                            <a href="single-case-study.html"><img
                                                    src="assets/images/portfolio/portfolio-04.jpg"
                                                    alt="Portfolio Images" /></a>
                                        </div>
                                        <div class="port-overlay-info">
                                            <div class="hover-action">
                                                <h4 class="title"><a href="single-case-study.html">Larq</a></h4>
                                                <span class="category">Branding, design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- End Single Portfolio -->

                                <!-- Start Single Portfolio -->
                                <!-- <div class="portfolio portfolio_style--1 portfolio-33-33 cat--3">
                                    <div class="inner move-up wow">
                                        <div class="thumb paralax-image">
                                            <a href="single-case-study.html"><img
                                                    src="assets/images/portfolio/portfolio-05.jpg"
                                                    alt="Portfolio Images" /></a>
                                        </div>
                                        <div class="port-overlay-info">
                                            <div class="hover-action">
                                                <h4 class="title"><a href="single-case-study.html">Rant bike</a></h4>
                                                <span class="category">Branding</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- End Single Portfolio -->

                                <!-- Start Single Portfolio -->
                                <!-- <div class="portfolio portfolio_style--1 portfolio-33-33 cat--2 cat--3">
                                    <div class="inner move-up wow">
                                        <div class="thumb paralax-image">
                                            <a href="single-case-study.html"><img
                                                    src="assets/images/portfolio/portfolio-01.jpg"
                                                    alt="Portfolio Images" /></a>
                                        </div>
                                        <div class="port-overlay-info">
                                            <div class="hover-action">
                                                <h4 class="title"><a href="single-case-study.html">Creative Agency</a>
                                                </h4>
                                                <span class="category">ios, design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- End Single Portfolio -->
                            <!-- </div>
                            <div class="view-all-portfolio-button mt--60 text-center move-up wow">
                                <a class="axil-button btn-extra-large btn-transparent" href="#"><span
                                        class="button-text">Discover More Projects</span><span
                                        class="button-icon"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- End Portfolio Area -->
</template>
<script>
import topbar from "@/components/header";
import Footer from "@/components/footer";
export default {
  name: "p404",
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