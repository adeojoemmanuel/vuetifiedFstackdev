<template>
  <div>
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

                    <form>
                      
                      
                      <div class="form-group" :class="[$v.name.$error ? 'form-group--error' : '']">
                          <input type="text" v-model="name" @blur="$v.name.$touch()">
                          <label>Name</label>
                          <!-- <span class="focus-border"></span> -->
                          <div v-if="$v.name.$error">
                              <span v-if="!$v.name.minLength" class="error-text">Your  name must have at least {{$v.otherNames.$params.minLength.min}} letters.</span>
                          </div>
                      </div>
                      <div class="form-group" :class="[$v.email.$error ? 'form-group--error' : '']">
                          <input type="email" v-model="email" @blur="$v.email.$touch()">
                          <label>Email</label>
                          <!-- <span class="focus-border"></span> -->
                          <div v-if="$v.email.$error">
                              <span v-if="!$v.email.required" class="error-text">Your email is needed for registration</span>
                              <span v-if="!$v.email.email" class="error-text">Your email is not valid</span>
                          </div>
                      </div>
                      <div class="form-group" :class="[$v.phone.$error ? 'form-group--error' : '']">
                          <input type="text" v-model="phone" @blur="$v.phone.$touch()">
                          <label>Phone Number</label>
                          <!-- <span class="focus-border"></span> -->
                          <div v-if="$v.phone.$error">
                              <span v-if="!$v.phone.numeric" class="error-text">Phone number cant contain letters, thanks.</span>
                              <span v-if="!$v.phone.required" class="error-text">Your phone is needed for registration</span>
                              <span v-if="!$v.phone.minLength" class="error-text">Your phone must have at least {{$v.phone.$params.minLength.min}} digits</span>
                              <span v-if="!$v.phone.maxLength" class="error-text">Ahhhh Nigerian phone numbers cant be this long naw, cant be longer than {{$v.phone.$params.maxLength.max}} digits</span>
                          </div>
                      </div>
                      <div class="form-group" :class="[$v.address.$error ? 'form-group--error' : '']">
                          <input type=" text" v-model="address" @blur="$v.address.$touch()">
                          <label>Your Message</label>
                          <!-- <span class="focus-border"></span> -->
                          <div v-if="$v.address.$error">
                              <span v-if="!$v.address.required" class="error-text">Type In Your Message</span>
                          </div>
                      </div>
                      <div class="form-group">
                          <LoadingButton class="axil-button btn-large btn-transparent w-100" :styled="false" :loading="loading" aria-label='Register Now ' @buttonClick="formSubmit" buttonText="Send Message" />
        
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
                    width="100%"
                    height="398"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=852&amp;height=348&amp;hl=en&amp;q=FStackDev%20Abuja+(FStackDev)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>

                  <div class="content">
                    <h4 class="title">Abuja</h4>
                    <p>
                      784a Herbert Marculay Way Central Business District,
                      Second floor wing c reinsurane building.<br />
                      Nigeria
                    </p>
                    <a class="axil-button btn-transparent" href="http://maps.google.com/?q=FStackDev, Herbert Macaulay Way, Abuja" target="_blank"
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
  </div>
</template>
<script>
import LoadingButton from '@/components/LoadingButton'
import { validationMixin } from 'vuelidate'
import db from '@/firebase';
import { required, minLength, email, maxLength, numeric } from 'vuelidate/lib/validators';
export default {
    components: { LoadingButton },
    data() {
        return {
            loading: false,
            name: '',
            email: '',
            phone: '',
            address: '',
            submitStatus: null,
            users: []
        }
    },
    mixins: [validationMixin],
    validations: {
        name: { minLength: minLength(3) },
        address: { required },
        phone: { required, minLength: minLength(11), maxLength: maxLength(11), numeric },
        email: { required, email }
    },
    firestore() {
        return {
            users: db.collection('users'),
        }
    },
    methods: {
        async formSubmit() {
            this.loading = true;
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$firestore.users.add({
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    address: this.address,
                    timestamp: new Date()
                }).then(docRef => {
                    this.successOperation()
                }).catch(error => { this.failedRequest() })
            } else {
                this.submitStatus = 'Error, please fill out all the requred details thanks.'
                this.$swal({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 7000,
                    timerProgressBar: true,
                    title: this.submitStatus,
                    icon: 'error'
                });
                let as = this;
                setTimeout(function() { as.loading = false; }, 2000)
            }
        },
        successOperation() {
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Message Successfully Sent',
                text: `${this.firstName}, You have successfully Sent Your Message, check your mail for further information`,
                icon: 'success'
            });
            setTimeout(function() { location.reload() }, 3000)
            this.loading = false;
        },
        failedRequest() {
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: "Server Error",
                text: 'Sorry please try again later, thanks.',
                icon: 'error'
            });
            this.loading = false;
        }
    },
    // created() {
    //     db.collection('users').get().then(querySnapshot => {
    //         querySnapshot.forEach(doc => {
    //             // console.log(doc)
    //             const data = {
    //                 'id': doc.id,
    //                 user: doc.data()
    //             }
    //             this.users.push(data)
    //         })
    //     })
    //     console.log(users);
    // }
}
</script>