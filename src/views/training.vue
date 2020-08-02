<template>
  <div>
    <div class="main-content">
        <div id="header-container"></div>
        <!-- Start Breadcrumb Area -->
        <div class="axil-breadcrumb-area breadcrumb-style-default pt--170 pb--70 theme-gradient">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner">
                            <ul class="axil-breadcrumb liststyle d-flex">
                                <li class="axil-breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="axil-breadcrumb-item active" aria-current="page">Bootcamp</li>
                            </ul>
                            <h1 class="axil-page-title">Bootcamp</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Breadcrumb Area -->
        <main class="main-wrapper">
            <!-- Start Contact Area  -->
            <div class="axil-contact-area  ax-section-gap   ppplr--100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xl-12 col-12">
                            <training-form />
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Contact Area  -->
        </main>
        <!-- Start Footer Area -->
        <div id="footer-container"></div>
        <!-- End Footer Area -->
    </div>
  </div>
</template>
<script>
import TrainingForm from "@/components/TrainingForm.vue";
export default {
  name: "service",
  components: {
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
 <style>
    .contact-f {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .btn-s {
        width: 30%;
        color: white;
        padding: 14px 20px;
        margin: auto;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        align-items: center;
    }
</style>
