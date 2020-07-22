<template>
<!-- Start Social Icon -->
<div>
<footer class="axil-footer footer-default theme-gradient-2 ppplr--100">
    <div class="bg_image--2">
        <div class="ft-social-icon-wrapper ax-section-gapTop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="ft-social-share d-flex justify-content-center liststyle flex-wrap">
                            <li>
                                <a href="facebook.com/fstackdev"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="twitter.com/fstackdev"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="linkedin.com/fstackdev"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href="instagram.com/fstackdev"><i class="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Social Icon -->
        <!-- Start Footer Top Area -->
        <div class="footer-top ax-section-gap">
            <div class="container">
                <div class="row">
                    <!-- Start Single Widget -->
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="footer-widget-item axil-border-right">
                            <h3>Join our drive</h3>
                            <p>Receive our weekly newsletter to get special <br> offers and trending tech
                                updates straight to your inbox.
                            </p>
                            <div class="axil-newsletter">
                                <form class="newsletter-form" action="#">
                                    <input type="email" placeholder="Email" />
                                    <a class="axil-button btn-transparent" href="#"><span
                                            class="button-text">Subscribe</span><span class="button-icon"></span></a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Widget -->

                    <!-- Start Single Widget -->
                    <div class="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                        <div class="footer-widget-item">
                            <h6 class="title">Services</h6>
                            <div class="footer-menu-container">
                                <ul class="ft-menu liststyle link-hover">
                                    <li>Web Development</li>
                                    <li>Mobile App Development</li>
                                    <li>Project Support</li>
                                    <li>Search Engine Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Widget -->

                    <!-- Start Single Widget -->
                    <div class="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 mt_lg--30 mt_md--30 mt_sm--30">
                        <div class="footer-widget-item">
                            <h6 class="title">Resourses</h6>
                            <div class="footer-menu-container">
                                <ul class="ft-menu liststyle link-hover">
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Case Studies</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Widget -->

                    <!-- Start Single Widget -->
                    <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6 mt_lg--30 mt_md--30 mt_sm--30">
                        <div class="footer-widget-item">
                            <h6 class="title">Support</h6>
                            <div class="footer-menu-container">
                                <ul class="ft-menu liststyle link-hover">
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Single Widget -->
                </div>
            </div>
        </div>
        <!-- End Footer Top Area -->

        <!-- Start Copyright -->
        <div class="copyright copyright-default">
            <div class="container">
                <div class="row row--0 ptb--20 axil-basic-thine-line">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="inner text-center text-md-left">
                            <p>© 2020. All rights reserved by FStackDev.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="quick-contact">
                            <ul class="link-hover d-flex justify-content-center justify-content-md-end liststyle">
                                <li><a data-hover="Privacy Policy" href="privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright -->

    </div>
</footer>
</div>
<!-- End Footer Area -->
</template>

<script>
import moment from "moment";
export default {
  name: "Footer",
  methods: {
    format_date() {
      return moment().format("YYYY");
    }
  }
};
</script>