import UserService from "@/services/UserService";
import ash from "lodash";
const DefaultState = () => {
  return {
    errors: null,
    success: null,
    walletData: 0,
    dashboardStuff: []
  };
};
const state = DefaultState();
const getters = {
  getUpdateSuccess(state) {
    if (state.success !== null && state.success !== undefined) {
      return state.success;
    }
    return;
  },
  getUpdateErrors(state) {
    if (state.errors !== null && state.errors !== undefined) {
      return state.errors;
    }
    return;
  },
  getDashboard(state) {
    if (state.dashboardStuff !== null && state.dashboardStuff.length !== 0) {
      return state.dashboardStuff;
    }
    return null;
  }
};
const actions = {
  updateUser({ rootState, commit }, payload) {
    // set loading
    commit("auth/SET_LOADING", true, { root: true });
    // clear previous errors
    commit("SET_ERRORS", null);
    commit("SET_SUCCESS_MSG", null);
    payload.data.token = rootState.auth.user.token;
    return UserService.update(rootState.auth.user.id, {
      user: payload.data
    })
      .then(({ data }) => {
        commit("auth/SET_LOADING", false, { root: true });
        console.log(data);
        commit("SET_SUCCESS_MSG", "Successfully updated your profile");
      })
      .catch(error => {
        commit("auth/SET_LOADING", false, { root: true });
        if (error.status == 500) {
          commit("SET_ERRORS", "Server Error, Please Try Again...");
        } else if (error.status == 404) {
          commit(
            "SET_ERRORS",
            "Network Error, Please make sure you are connected.."
          );
        } else {
          commit("SET_ERRORS", "please try again...");
        }
      });
  },
  uploadProfileImage({ commit, rootState }, payload) {
    commit("auth/SET_LOADING", true, { root: true });
    commit("SET_ERRORS", null);
    commit("SET_SUCCESS_MSG", null);
    return UserService.avatar(rootState.auth.user.id, {
      pictureUrl: payload.image,
      token: rootState.auth.user.token
    })
      .then(({ data }) => {
        commit("auth/SET_LOADING", false, { root: true });
        // console.log(data);
      })
      .catch(error => {
        commit("auth/SET_LOADING", false, { root: true });
        // console.log(error.response);
      });
  },
  followSeller({ commit, rootState }, payload) {
    // commit("auth/SET_LOADING", true, { root: true });
    const refinedPayload = {
      userid: rootState.auth.user.id,
      data: payload
    };
    UserService.following(refinedPayload)
      .then(({ data }) => {
        // console.log(data);
        let followingArr = [];
        followingArr = ash.split(data.following, ",");
        commit("auth/SET_USER_FOLLOWING", followingArr, { root: true });
      })
      .catch(error => {
        console.log(error);
      });
  },
  fetchDashboardDetails({ commit, rootState, dispatch }) {
    commit("auth/SET_LOADING", true, { root: true });
    commit("SET_ERRORS", null);
    commit("SET_SUCCESS_MSG", null);
    UserService.dashboard(rootState.auth.user.id)
      .then(({ data }) => {
        commit("auth/SET_LOADING", true, { root: true });
        dispatch("fetchDashboardTransactions", data);
        // console.log(data);
      })
      .catch(error => {
        commit("auth/SET_LOADING", false, { root: true });
        // console.log(error);
      });
  },
  fetchDashboardTransactions({ commit, rootState }, payload) {
    commit("auth/SET_LOADING", true, { root: true });
    commit("SET_ERRORS", null);
    commit("SET_SUCCESS_MSG", null);
    UserService.transactions(rootState.auth.user.id)
      .then(({ data }) => {
        commit("auth/SET_LOADING", false, { root: true });
        let dashboardArr = [];
        dashboardArr.push(payload);
        dashboardArr.push(data);
        commit("SET_DASHBOARD_DETAILS", dashboardArr);
        // console.log(dashboardArr);
      })
      .catch(error => {
        commit("auth/SET_LOADING", false, { root: true });
        // console.log(error);
      });
  },
  FetchUser({ commit }, payload) {
    commit("auth/SET_LOADING", true, { root: true });
    commit("SET_ERRORS", null);
    commit("SET_SUCCESS_MSG", null);
    return UserService.user(payload.userId)
      .then(({ data }) => {
        commit("auth/SET_LOADING", false, { root: true });
        console.log(data);
      })
      .catch(error => {
        commit("auth/SET_LOADING", false, { root: true });
        console.log(error);
      });
  }
};
const mutations = {
  resetState(state) {
    Object.assign(state, DefaultState());
  },
  SET_ERRORS(state, error) {
    state.errors = error;
  },
  SET_USER_WALLET(state, error) {
    state.walletData = error;
  },
  SET_SUCCESS_MSG(state, success) {
    state.success = success;
  },
  SET_DASHBOARD_DETAILS(state, details) {
    state.dashboardStuff = details;
  }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
