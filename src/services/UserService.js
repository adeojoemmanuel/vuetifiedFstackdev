import Api from "@/services/Api";

export default {
  update(userId, payload) {
    return Api().put(`users/${userId}`, payload.user);
  },
  avatar(userId, payload) {
    return Api().put(`ppic/${userId}`, payload.pictureUrl, {
      headers: {
        "x-access-token": payload.token
      }
    });
  },
  user(userId) {
    return Api().get(`users/${userId}`);
  },
  dashboard(userId) {
    return Api().get(`users/${userId}/dashboardinfo`);
  },
  transactions(userId) {
    return Api().get(`product/dashboard/${userId}`);
  },
  following(payload) {
    return Api().post(`users/${payload.userid}/followseller`, payload);
  }
};
