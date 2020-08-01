<template>
  <!-- Start Contact Form -->
    <div class="contact-form-wrapper">
      <!-- Start Contact Form -->
      <div class="contact-f">
          <h3 class="title">Bootcamp Registration Form</h3>
          <form>
            <div
              class="form-group"
              :class="[$v.surname.$error ? 'form-group--error' : '']"
            >
              <input type="text" v-model="surname" @blur="$v.surname.$touch()" />
              <label>Surname</label>
              <!-- <span class="focus-border"></span> -->
              <div v-if="$v.surname.$error">
                <span v-if="!$v.surname.required" class="error-text"
                  >Your Surname is needed for registration.</span
                >
                <span v-if="!$v.surname.minLength" class="error-text"
                  >Your surname must have at least
                  {{ $v.surname.$params.minLength.min }} letters.</span
                >
              </div>
            </div>
            <div
              class="form-group"
              :class="[$v.firstName.$error ? 'form-group--error' : '']"
            >
              <input
                type="text"
                v-model="firstName"
                @blur="$v.firstName.$touch()"
              />
              <label>First Name</label>
              <!-- <span class="focus-border"></span> -->
              <div v-if="$v.firstName.$error">
                <span v-if="!$v.firstName.required" class="error-text"
                  >Your first name is needed for registration.</span
                >
                <span v-if="!$v.firstName.minLength" class="error-text"
                  >Your first name must have at least
                  {{ $v.firstName.$params.minLength.min }} letters.</span
                >
              </div>
            </div>
            <div
              class="form-group"
              :class="[$v.otherNames.$error ? 'form-group--error' : '']"
            >
              <input
                type="text"
                v-model="otherNames"
                @blur="$v.otherNames.$touch()"
              />
              <label>Other Name</label>
              <!-- <span class="focus-border"></span> -->
              <div v-if="$v.otherNames.$error">
                <span v-if="!$v.otherNames.minLength" class="error-text"
                  >Your other name must have at least
                  {{ $v.otherNames.$params.minLength.min }} letters.</span
                >
              </div>
            </div>
            <div
              class="form-group"
              :class="[$v.email.$error ? 'form-group--error' : '']"
            >
              <input type="email" v-model="email" @blur="$v.email.$touch()" />
              <label>Email</label>
              <!-- <span class="focus-border"></span> -->
              <div v-if="$v.email.$error">
                <span v-if="!$v.email.required" class="error-text"
                  >Your email is needed for registration</span
                >
                <span v-if="!$v.email.email" class="error-text"
                  >Your email is not valid</span
                >
              </div>
            </div>
            <div
              class="form-group"
              :class="[$v.phone.$error ? 'form-group--error' : '']"
            >
              <input type="text" v-model="phone" @blur="$v.phone.$touch()" />
              <label>Phone Number</label>
              <!-- <span class="focus-border"></span> -->
              <div v-if="$v.phone.$error">
                <span v-if="!$v.phone.numeric" class="error-text"
                  >Phone number cant contain letters, thanks.</span
                >
                <span v-if="!$v.phone.required" class="error-text"
                  >Your phone is needed for registration</span
                >
                <span v-if="!$v.phone.minLength" class="error-text"
                  >Your phone must have at least
                  {{ $v.phone.$params.minLength.min }} digits</span
                >
                <span v-if="!$v.phone.maxLength" class="error-text"
                  >Ahhhh Nigerian phone numbers cant be this long naw, cant be
                  longer than {{ $v.phone.$params.maxLength.max }} digits</span
                >
              </div>
            </div>
            <div
              class="form-group"
              :class="[$v.address.$error ? 'form-group--error' : '']"
            >
              <input type=" text" v-model="address" @blur="$v.address.$touch()" />
              <label>Address</label>
              <!-- <span class="focus-border"></span> -->
              <div v-if="$v.address.$error">
                <span v-if="!$v.address.required" class="error-text"
                  >Your address is needed for registration</span
                >
              </div>
            </div>
            <div>
              <p>Do you want to pay now:</p>
              <input type="radio" id="yes" name="yes" value="Yes" :checked="shouldPay === 'yes'"  @change="onChange($event.target.value)">
              <label for="yes">Yes</label><br>
            </div>
            <div>
              <input type="radio" id="no" name="no" value="no" :checked="shouldPay === 'no'"  @change="onChange($event.target.value)">
              <label for="no">No</label><br>
            </div>
            <div class="form-group">
              <LoadingButton
                class="axil-button btn-large btn-transparent w-100"
                :styled="false"
                :loading="loading"
                aria-label="Register Now "
                @buttonClick="formSubmit"
                buttonText="Register Now"
              />
            </div>
          </form>
      </div>
      <!-- End Contact Form -->
  </div>
  <!-- import end -->
  <!-- End Contact Form -->
</template>
<script>
import LoadingButton from "@/components/LoadingButton";
import { validationMixin } from "vuelidate";
import db from "@/firebase";
import {
  required,
  minLength,
  email,
  maxLength,
  numeric
} from "vuelidate/lib/validators";
export default {
  components: { LoadingButton },
  data() {
    return {
      loading: false,
      surname: "",
      firstName: "",
      otherNames: "",
      email: "",
      phone: "",
      address: "",
      submitStatus: null,
      users: [],
      shouldPayu: "no",
      shouldPayu2: "yes"
    };
  },
  mixins: [validationMixin],
  validations: {
    surname: { required, minLength: minLength(3) },
    firstName: { required, minLength: minLength(3) },
    otherNames: { minLength: minLength(3) },
    address: { required },
    phone: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
      numeric
    },
    email: { required, email }
  },
  firestore() {
    return {
      users: db.collection("users")
    };
  },
  methods: {
    check(event){
       this.shouldPay = event.target.value;
      console.log(event.target.value);
    },
    onChange(e) {
        this.radio = e
    },
    onChange2(e) {
        this.radio2 = e
    },
    async formSubmit() {
      console.log(this.shouldPay);
      // this.loading = true;
      // this.$v.$touch();
      // if (!this.$v.$invalid) {
      //   this.$firestore.users
      //     .add({
      //       surname: this.surname,
      //       firstname: this.firstName,
      //       othernames: this.otherNames,
      //       email: this.email,
      //       phone: this.phone,
      //       address: this.address,
      //       timestamp: new Date()
      //     })
      //     .then(docRef => {
      //       this.successOperation();
      //     })
      //     .catch(error => {
      //       this.failedRequest();
      //     });
      // } else {
      //   this.submitStatus =
      //     "Error, please fill out all the requred details thanks.";
      //   this.$swal({
      //     toast: true,
      //     position: "top-end",
      //     showConfirmButton: false,
      //     timer: 3000,
      //     timerProgressBar: true,
      //     title: this.submitStatus,
      //     icon: "error"
      //   });
      //   let as = this;
      //   setTimeout(function() {
      //     as.loading = false;
      //   }, 2000);
      // }
    },
    successOperation() {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: "Registered Successfully",
        text: `${this.firstName}, You have successfully registered for our training programme, check your mail for further information`,
        icon: "success"
      });
      setTimeout(function() {
        location.reload();
      }, 3000);
      this.loading = false;
    },
    failedRequest() {
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: true,
        title: "Server Error",
        text: "Sorry please try again later, thanks.",
        icon: "error"
      });
      this.loading = false;
    }
  }
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
};
</script>
<style lang="scss" scoped>
.form-group--error input,
.form-group--error textarea,
.form-group--error input:focus,
.form-group--error input:hover {
  border-color: #f79483;
}

.error-text {
  color: #f79483;
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
</style>
