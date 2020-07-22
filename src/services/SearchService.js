import Api from "@/services/Api";

export default {
  search(keyword) {
    return Api().get(`product/search/${keyword}`);
  },
  }