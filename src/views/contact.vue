<template>
  <div>
    <topbar></topbar>
    <div class="main-content">
      <div id="header-container"></div>

      <!-- Start Breadcrumb Area -->
      <div
        class="axil-breadcrumb-area breadcrumb-style-default pt--170 pb--70 theme-gradient"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner">
                <ul class="axil-breadcrumb liststyle d-flex">
                  <li class="axil-breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="axil-breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ul>
                <h1 class="axil-page-title">Contact</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="shape-images">
          <img
            class="shape shape-1"
            src="assets/images/shape/bcm-01.svg"
            alt="Shape Images"
          />
          <img
            class="shape shape-2"
            src="assets/images/shape/bcm-02.svg"
            alt="Shape Images"
          />
          <img
            class="shape shape-3"
            src="assets/images/shape/bcm-03.svg"
            alt="Shape Images"
          />
        </div>
      </div>
      <!-- End Breadcrumb Area -->

      <main class="main-wrapper">
        <!-- Start Contact Area  -->
        <div
          class="axil-contact-area axil-shape-position ax-section-gap bg-color-white ppplr--100"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-xl-5 col-12">
                <div class="contact-form-wrapper">
                  <!-- Start Contact Form -->
                  <div class="axil-contact-form contact-form-style-1">
                    <h4 class="title">Get a development quote</h4>

                    <form id="contact-form" method="POST" action="">
                      <div class="form-group">
                        <input name="con_name" type="text" />
                        <label>Name</label>
                        <span class="focus-border"></span>
                      </div>
                      <div class="form-group">
                        <input name="con_email" type="email" />
                        <label>Email</label>
                        <span class="focus-border"></span>
                      </div>
                      <div class="form-group">
                        <input type="text" />
                        <label>Phone</label>
                        <span class="focus-border"></span>
                      </div>
                      <div class="form-group">
                        <textarea name="con_message"></textarea>
                        <label>Your message</label>
                        <span class="focus-border"></span>
                      </div>

                      <div class="form-group">
                        <input type="submit" value="Send message" />
                        <p class="form-messege"></p>
                      </div>
                    </form>
                  </div>
                  <!-- End Contact Form -->
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-xl-6 offset-xl-1 col-12 mt_md--40 mt_sm--40"
              >
                <div class="axil-address-wrapper">
                  <!-- Start Single Address  -->
                  <div class="axil-address wow move-up">
                    <div class="inner">
                      <div class="icon">
                        <i class="fas fa-phone"></i>
                      </div>
                      <div class="content">
                        <h4 class="title">Phone</h4>
                        <p>
                          Our customer care is open from Mon-Fri, 9:00 am to
                          5:00 pm
                        </p>
                        <p>
                          <a class="tel" href="tel:08134901464"
                            ><i class="fas fa-phone"></i>+(234) 813490-1464</a
                          >
                        </p>
                        <p>
                          <a class="tel" href="tel:08149848925"
                            ><i class="fas fa-phone"></i>+(234) 814984-8925</a
                          >
                        </p>
                        <p>
                          <a class="tel" href="tel:08164916168"
                            ><i class="fas fa-phone"></i>+(234) 816491-6168</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Address  -->
                  <!-- Start Single Address  -->
                  <div
                    class="axil-address wow move-up mt--60 mt_sm--30 mt_md--30"
                  >
                    <div class="inner">
                      <div class="icon">
                        <i class="fal fa-envelope"></i>
                      </div>
                      <div class="content">
                        <h4 class="title">Email</h4>
                        <p>
                          Our support team will get back to as fast as possible
                          during standard business hours.
                        </p>
                        <p>
                          <a class="axil-link" href="mailto:hello@fstackdev.net"
                            >Hello@fstackdev.net</a
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Address  -->
                </div>
              </div>
            </div>
          </div>
          <div class="shape-group">
            <div class="shape shape-01">
              <img
                src="assets/images/others/contact-01.svg"
                alt="Shape Images"
              />
            </div>
            <div class="shape shape-02">
              <img
                src="assets/images/others/contact-02.svg"
                alt="Shape Images"
              />
            </div>
            <div class="shape shape-03">
              <img
                src="assets/images/others/contact-03.svg"
                alt="Shape Images"
              />
            </div>
          </div>
        </div>
        <!-- End Contact Area  -->

        <!-- Start Office Location  -->
        <div class="axil-office-location-area ax-section-gap bg-color-lightest">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title text-center">
                  <span class="sub-title extra04-color wow">who we are</span>
                  <h2 class="title wow mb--0">Our office</h2>
                </div>
              </div>
            </div>
            <div class="row mt--30">
              <!-- Start Single Location  -->
              <div
                class="col-lg-12 col-md-12 col-sm-12 col-12 ppplr--100"
                style="align-self: center;"
              >
                <div class="axil-office-location mt--30 wow move-up" id="map">
                  <iframe
                    width="852"
                    height="348"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=852&amp;height=348&amp;hl=en&amp;q=FStackDev%20Abuja+(FStackDev)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://www.embedmap.net/"
                    >adding google map to website</a
                  >
                  <script
                    type="text/javascript"
                    src="https://embedmaps.com/google-maps-authorization/script.js?id=334d30f327f851e60b99e991c7acaaa7835aac41"
                  ></script>
                  <div class="content">
                    <h4 class="title">Abuja</h4>
                    <p>
                      784a Herbert Marculay Way Central Business District,
                      Second floor wing c reinsurane building.<br />
                      Nigeria
                    </p>
                    <a class="axil-button btn-transparent" href="#"
                      ><span class="button-text">View on Map</span
                      ><span class="button-icon"></span
                    ></a>
                  </div>
                </div>
              </div>
              <!-- End Single Location  -->
            </div>
          </div>
        </div>
        <!-- End Office Location  -->
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
import Footer from "@/components/footer";
export default {
  name: "contact",
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
