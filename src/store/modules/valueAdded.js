import ash from "lodash";
import router from "../../router";
import TransactionService from "@/services/TransactionService";
import UserService from "@/services/UserService";
// import ash from 'lodash';

const DefaultState = () => {
  return {
    valueadded: [],
    payment: null,
    transaction: null,
    success: null,
    errors: null
  };
};
const state = DefaultState();
const getters = {
  billerListings(state) {
    if (state.valueadded !== null && state.valueadded !== undefined) {
      return state.valueadded;
    }
    return;
  },
  getTransaction(state) {
    if (state.transaction !== null && state.transaction !== undefined) {
      return state.transaction;
    }
    return null;
  },
  getBillerCategories(state) {
    let categories = [];
    let sortedCategories = [];
    let allBillers = state.valueadded;
    if (allBillers !== null && allBillers !== undefined) {
      for (let biller in allBillers) {
        // add all biller categories into an array for sorting
        categories.push(allBillers[biller].categoryname);
      }
      // sort array of categories, remove duplicate categories
      sortedCategories = ash.sortedUniq(categories);
      return sortedCategories;
    }
    return;
  },
  getErrors(state) {
    if (state.errors !== null && state.errors !== undefined) {
      return state.errors;
    }
    return;
  },
  getSuccess(state) {
    if (state.success !== null || state.success !== undefined) {
      return state.success;
    } else {
      return;
    }
  },
  paymentItems(state) {
    if (state.payment !== null || state.payment !== undefined) {
      return state.payment;
    }
  }
};
const actions = {
  fetchAllBillers({ commit }) {
    commit("auth/SET_LOADING", true, { root: true });
    commit("SET_SUCCESS_MSG", null);
    commit("SET_ERRORS", null);
    commit("SET_TRANSACTION_DETAILS", null);
    commit("transactions/SET_PAYMENT_RESPONSE", null, { root: true });
    return TransactionService.billers()
      .then(({ data }) => {
        commit("auth/SET_LOADING", false, { root: true });
        commit("SET_BILLERS", data.billers);
      })
      .catch(() => {
        commit("auth/SET_LOADING", false, { root: true });
        commit(
          "SET_ERRORS",
          "Network Error, Please make sure you are connected..."
        );
      });
  },
  paymentItem({ commit }, payload) {
    commit("auth/SET_LOADING", true, { root: true });
    commit("SET_SUCCESS_MSG", null);
    commit("SET_ERRORS", null);
    return TransactionService.payment(payload)
      .then(({ data }) => {
        commit("auth/SET_LOADING", false, { root: true });
        commit("SET_PAYMENT_ITEMS", data);
      })
      .catch(error => {
        commit("auth/SET_LOADING", false, { root: true });
        commit("SET_ERRORS", "Network Error, Cant connect to server...");
      });
  },
  validatePaymentOption({ commit, dispatch, rootState }, payload) {
    // console.log(payload);
    commit("auth/SET_LOADING", true, { root: true });
    commit("SET_SUCCESS_MSG", null);
    commit("SET_ERRORS", null);
    commit("SET_TRANSACTION_DETAILS", null);
    payload.custId = "00000000" + rootState.auth.user.id;
    console.log(rootState.auth.user);
    // add user email to rootstate and attach to payload
    // console.log(payload);
    return TransactionService.paymentOption(payload)
      .then(({ data }) => {
        // console.log(data);
        commit("auth/SET_LOADING", true, { root: true });
        commit("SET_SUCCESS_MSG", "Payment request validated successfully...");
        commit("SET_TRANSACTION_DETAILS", payload);
        dispatch("paymentAdvices", { payload, data });
      })
      .catch(error => {
        commit("auth/SET_LOADING", false, { root: true });
        // console.log(error.response);
      });
  },
  paymentAdvices({ commit, rootState, state }, { payload, data }) {
    // console.log(payload);
    // console.log(data);
    commit("auth/SET_LOADING", true, { root: true });
    // commit("SET_TRANSACTION_DETAILS", null);
    let customers = data.Customers;
    let userperson = payload;
    const parseObj = Object.assign({}, customers[0]);
    // console.log(parseObj.amount);
    const refinedPayload = {
      custId: parseObj.customerId,
      amount: userperson.amount,
      phone: state.transaction.phone,
      userid: rootState.auth.user.id,
      email: rootState.auth.user.email,
      paymentCode: parseObj.paymentCode
    };
    console.log(refinedPayload);
    TransactionService.advice(refinedPayload)
      .then(({ data }) => {
        commit("auth/SET_LOADING", false, { root: true });
        commit("SET_TRANSACTION_DETAILS", data);
        // console.log(data);
        router.push("/valueind");
      })
      .catch(error => {
        commit("auth/SET_LOADING", false, { root: true });
        console.log(error.response);
      });
  }
};
const mutations = {
  resetState(state) {
    Object.assign(state, DefaultState());
  },
  SET_BILLERS(state, data) {
    state.valueadded = data;
  },
  SET_PAYMENT_ITEMS(state, data) {
    state.payment = data;
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  },
  SET_SUCCESS_MSG(state, success) {
    state.success = success;
  },
  SET_TRANSACTION_DETAILS(state, data) {
    state.transaction = data;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
