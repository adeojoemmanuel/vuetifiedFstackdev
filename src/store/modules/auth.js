import ash from "lodash";
import router from "../../router";
// import axios from "axios";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";

const DefaultState = () => {
  return {
    registerData: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      password: "",
      confirmPassword: "",
      rcountry: ""
    },
    loginData: {
      email: "",
      password: ""
    },
    loading: false,
    user: null,
    loginErrors: null,
    registerErrors: null,
    errors: null,
    referee: null,
    message: null,
    following: []
  };
};
const state = DefaultState();

const getters = {
  errors(state) {
    if (state.errors !== null && state.errors !== undefined) {
      return state.errors;
    }
    return null;
  },
  getLoginError(state) {
    if (state.loginErrors !== null && state.loginErrors !== undefined) {
      return state.loginErrors;
    }
  },
  logoutError(state) {
    return state.logoutError;
  },
  getMessage(state) {
    if (state.message !== null && state.message !== undefined) {
      return state.message;
    }
    return null;
  },
  registerErrors(state) {
    return state.registerErrors;
  },
  getReferee(state) {
    return state.referee;
  },
  isLoggedIn(state) {
    if (ash.isEmpty(state.user) || state.user == null) {
      return false;
    }
    return !!state.user;
  },
  getUser(state) {
    if (state.user !== null && state.user !== undefined) {
      return state.user;
    }
    return null;
  },
  getFollowing(state) {
    if (state.following !== null && state.following !== undefined) {
      return state.following;
    }
    return null;
  },
  firstName(state) {
    if (ash.isEmpty(state.user) || state.user == null) {
      return false;
    }
    return state.user.firstname;
  },
  loading(state) {
    return state.loading;
  }
};

const actions = {
  registerUser({ commit, state }, payload) {
    // set inputs to state
    commit("SET_REGISTER_STATE", payload);
    commit("SET_REGISTER_ERRORS", null);
    commit("SET_LOADING", true);
    return AuthService.register({
      firstname: state.registerData.firstName,
      lastname: state.registerData.lastName,
      email: state.registerData.email,
      address: state.registerData.address,
      phone: state.registerData.phone,
      password: state.registerData.password,
      rcountry: state.registerData.rcountry
    })
      .then(({ data }) => {
        commit("SET_LOADING", false);
        // set user state with results
        const newUser = {
          id: data.id,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          token: data.token,
          referalId: data.referalId,
          status: data.status,
          phone: data.phone,
          address: data.address,
          rcountry: data.rcountry
        };
        commit("SET_USER_DATA", newUser);
        // send user to dashboard
        router.push("/maindashboard");
      })
      .catch(error => {
        commit("SET_LOADING", false);
        // console.log(error.response);
        // check if error obj is empty
        if (ash.isEmpty(error.response.data)) {
          // if empty then user cant be found
          commit("SET_REGISTER_ERRORS", "please try again");
        } else if (error.response.status == 404) {
          commit("SET_REGISTER_ERRORS", "Network error, please try again");
        } else {
          // else account not verified or something else
          commit("SET_REGISTER_ERRORS", error.response.data);
        }
      });
  },
  fetchUserReferee({ commit }, payload) {
    commit("auth/SET_LOADING", true, { root: true });
    commit("SET_ERRORS", null);
    commit("SET_REGISTER_ERRORS", null);
    commit("SET_LOGIN_ERRORS", null);
    // console.log(payload)
    let refree = [];
    return AuthService.referee(payload.refcode)
      .then(({ data }) => {
        //   console.log(data);
        const data1 = data;
        for (let i in data1) {
          UserService.user(data[i].userId).then(({ data }) => {
            const data2 = data;
            refree.push(Object.assign(data1[i], data2));
          });
        }
        // console.log(refree);
        commit("auth/SET_LOADING", false, { root: true });
        commit("SET_REFEREE", refree);
      })
      .catch(error => {
        // console.log(error);
        commit("auth/SET_LOADING", false, { root: true });
        if (ash.isEmpty(error.response.data)) {
          // if empty then user cant be found
          commit(
            "SET_ERRORS",
            "Network Error, Please check your connection..."
          );
        } else if (error.response.status == 404) {
          commit("SET_ERRORS", "Network error, please try again");
        } else {
          // else account not verified or something else
          commit("SET_ERRORS", error.response.data.message);
        }
      });
  },
  loginUser({ commit, state }, payload) {
    commit("SET_LOGIN_STATE", payload);
    commit("SET_LOADING", true);
    commit("SET_ERRORS", null);
    commit("SET_LOGIN_ERRORS", null);
    return AuthService.login({
      email: state.loginData.email,
      password: state.loginData.password
    })
      .then(({ data }) => {
        // console.log(data)
        commit("SET_LOADING", false);
        // set user state with results
        const loggedUser = {
          id: data.id,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          token: data.token,
          referalId: data.referalId,
          status: data.status,
          phone: data.phone,
          address: data.address,
          rcountry: data.rcountry,
          pictureUrl: data.pictureUrl,
          activation: data.activation
        };
        let followArr = [];
        followArr = ash.split(data.following, ",");
        // console.log(followArr);
        commit("SET_USER_DATA", loggedUser);
        commit("SET_USER_FOLLOWING", followArr);
        // send user to home
        router.push("/");
      })
      .catch(error => {
        commit("SET_LOADING", false);
        // check if error obj is empty
        if (ash.isEmpty(error.response.data)) {
          // if empty then user cant be found
          commit("SET_LOGIN_ERRORS", "Account not found, please try again");
        } else if (error.response.status == 404) {
          commit("SET_LOGIN_ERRORS", "Network error, please try again");
        } else {
          // else account not verified or something else
          commit("SET_LOGIN_ERRORS", error.response.data.message);
        }
      });
  },
  resetUser({ commit, state }, payload) {
    commit("SET_LOGIN_STATE", payload);
    commit("SET_LOADING", true);
    commit("SET_ERRORS", null);
    commit("SET_LOGIN_ERRORS", null);
    return AuthService.reset({
      email: payload.email
    })
      .then(({ data }) => {
        // console.log(data)
        commit("SET_LOADING", false);
        commit("SET_MESSAGE", "Check your mail for The reset link");
      })
      .catch(error => {
        commit("SET_LOADING", false);
        // check if error obj is empty
        if (ash.isEmpty(error.response.data)) {
          // if empty then user cant be found
          commit("SET_ERRORS", "Account not found, please try again");
        } else if (error.response.status == 404) {
          commit("SET_ERRORS", "Network error, please try again");
        } else {
          // else account not verified or something else
          commit("SET_ERRORS", error.response.data);
        }
      });
  },
  logoutUser({ commit, rootState }) {
    commit("SET_LOADING", true);
    return AuthService.logout({
      id: rootState.auth.user.id
    })
      .then(() => {
        // console.log(data)
        commit("SET_LOADING", false);
        commit("SET_LOGIN_ERRORS", null);
        commit("SET_REGISTER_ERRORS", null);
        commit("SET_MESSAGE", "Logging you out...");
        // reset all state to default after logout.
        commit('resetState');
        commit('product/resetState', {root: true});
        commit('valueAdded/resetState', {root: true});
        commit('user/resetState', {root: true});
        commit('chat/resetState', {root: true});
        commit('transactions/resetState', {root: true});
        commit('search/resetState', {root: true});
        commit('cart/resetState', {root: true});
        // send user to login page
        router.push("/login");
        // window.location.href = "/#/login";
      })
      .catch(error => {
        commit("SET_LOADING", false);
        // check if error obj is empty
        // else account not verified or something else
        commit(
          "SET_ERRORS",
          "Error logging out your account, please try again."
        );
      });
  }
};

const mutations = {
  resetState(state) {
    Object.assign(state, DefaultState());
  },
  SET_REFEREE(state, data) {
    state.referee = data;
  },
  SET_ERRORS(state, data) {
    state.errors = data;
  },
  SET_REGISTER_STATE(state, { newUser }) {
    state.registerData.firstName = newUser.firstName;
    state.registerData.lastName = newUser.lastName;
    state.registerData.email = newUser.email;
    state.registerData.address = newUser.address;
    state.registerData.phone = newUser.phone;
    state.registerData.password = newUser.password;
    state.registerData.rcountry = newUser.rcountry;
  },
  SET_LOGIN_STATE(state, { user }) {
    state.loginData.email = user.email;
    state.loginData.password = user.password;
  },
  SET_RESET_SUCCESS: (state, success) => (state.loginErrors = success),
  SET_LOGIN_ERRORS: (state, errors) => (state.loginErrors = errors),
  SET_REGISTER_ERRORS: (state, errors) => (state.registerErrors = errors),
  SET_USER_DATA(state, loggedUser) {
    state.user = loggedUser;
  },
  SET_LOADING: (state, loading) => (state.loading = loading),
  RESET_REGISTER_STATE(state, nullVal) {
    state.registerData.firstName = nullVal;
    state.registerData.lastName = nullVal;
    state.registerData.email = nullVal;
    state.registerData.address = nullVal;
    state.registerData.phone = nullVal;
    state.registerData.password = nullVal;
    state.registerData.confirmPassword = nullVal;
    state.registerData.rcountry = nullVal;
  },
  SET_USER_FOLLOWING(state, data) {
    state.following = data;
  },
  SET_LOGOUT_ERRORS(state, error) {
    state.errors = error;
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
