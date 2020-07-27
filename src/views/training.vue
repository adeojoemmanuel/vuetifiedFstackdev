<template>
  <div>
    <topbar></topbar>
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
