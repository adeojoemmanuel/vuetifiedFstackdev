import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("auth/signup", credentials);
  },
  login(credentials) {
    return Api().post("auth/login", credentials);
  },
  logout(credentials) {
    return Api().post("auth/logout", credentials);
  },
  reset(credentials) {
    return Api().post("auth/reset", credentials);
  },
  referee(refcode) {
    return Api().get(`auth/referal/${refcode}`);
  }
};
