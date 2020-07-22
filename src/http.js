import axios from "axios";
import store from "./store";

export default () =>
  axios.create({
    baseURL: store.state.baseUrl,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${store.state["auth/user"]}`,
      Accept: "application/json",
      "x-access-token": `${store.state["auth/user"]}`
    }
  });
