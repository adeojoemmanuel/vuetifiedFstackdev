import TransactionService from "@/services/TransactionService";
import router from "@/router";
const DefaultState = () => {
    return {
        walletData: 0,
        webpayResponse: null,
        walletHistory: null,
        paystackResponse: null
    };
};
const state = DefaultState();
const getters = {
    getwalletData(state) {
        if (state.walletData !== null && state.walletData !== undefined) {
            return state.walletData;
        }
        return null;
    },
    getwalletHistory(state) {
        if (state.walletHistory !== null && state.walletHistory !== undefined) {
            return state.walletHistory;
        }
        return null;
    },
    webpayDetails(state) {
        if (
            state.webpayResponse !== null &&
            state.webpayResponse !== undefined
        ) {
            return state.webpayResponse;
        }
        return null;
    }
};
const actions = {
    FetchUserwallet({ commit }, payload) {
        commit("auth/SET_LOADING", true, { root: true });
        commit("SET_PAYMENT_RESPONSE", null);
        return TransactionService.getWallet(payload)
            .then(({ data }) => {
                commit("auth/SET_LOADING", false, { root: true });
                commit("SET_USER_WALLET", data);
                // console.log(data);
            })
            .catch(error => {
                commit("auth/SET_LOADING", false, { root: true });
                console.log(error);
            });
    },
    FetchUserwalletHistory({ commit }, payload) {
        commit("auth/SET_LOADING", true, { root: true });
        commit("SET_PAYMENT_RESPONSE", null);
        return TransactionService.getWalletHistory(payload)
            .then(({ data }) => {
                commit("auth/SET_LOADING", false, { root: true });
                commit("SET_USER_WALLET_HISTORY", data);
                // console.log(data);
            })
            .catch(error => {
                commit("auth/SET_LOADING", false, { root: true });
                // console.log(error);
            });
    },
    createUserwallet({ commit, state }, payload) {
        // set inputs to state
        commit("auth/SET_LOADING", true, { root: true });
        commit("SET_PAYMENT_RESPONSE", null);
        return TransactionService.createWallet(payload)
            .then(({ data }) => {
                commit("auth/SET_LOADING", false, { root: true });
                commit("SET_USER_WALLET", data);
            })
            .catch(error => {
                commit("auth/SET_LOADING", false, { root: true });
            });
    },
    paymentStepOne({ commit }, payload) {
        commit("auth/SET_LOADING", true, { root: true });
        console.log(payload);
        TransactionService.postPayment(payload)
            .then(({ data }) => {
                commit("SET_PAYMENT_RESPONSE", data);
                router.push("/valueind");
            })
            .catch(error => {
                console.log(error);
            });
    },
    saveTransactions({ commit, rootState }, payload) {
        commit("auth/SET_LOADING", true, { root: true });
        commit("SET_PAYMENT_RESPONSE", null);
        const refinedPayload = {
            userid: rootState.auth.user.id,
            full_name:
                rootState.auth.user.firstname +
                " " +
                rootState.auth.user.lastname,
            email: rootState.auth.user.email,
            amount: payload.amount,
            reference1: payload.reference,
            trans: payload.trans,
            status: payload.status,
            message: payload.message,
            transaction: payload.transaction,
            trxref: payload.trxref,
            source: payload.source,
            custId: rootState.auth.user.id,
            paymentCode: payload.reference,
            phone: rootState.auth.user.phone
        };
        TransactionService.saveTransaction(refinedPayload)
            .then(({ data }) => {
                // dispatch("saveTransactionLogs", ads, { root: true });
                commit("auth/SET_LOADING", true, { root: true });
                console.log(data);
            })
            .catch(error => {
                console.log(error.response);
            });
    },
    saveTransactionLogs({ commit, rootState }, payload) {
        commit("auth/SET_LOADING", true, { root: true });
        commit("SET_PAYMENT_RESPONSE", null);
        const refinedPayload = {
            userid: rootState.auth.user.id,
            currentBal: payload.currentBal,
            previousBal: payload.previousBal,
            amount: payload.amount,
            currency: "NGN",
            description: "deposit to wallet",
            type: "deposit",
            conversionRate: "360",
            walletid: payload.walletid,
            activity: "deposite"
        };
        TransactionService.logs(refinedPayload)
            .then(({ data }) => {
                console.log(data);
            })
            .catch(error => {
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
    SET_USER_WALLET_HISTORY(state, data) {
        state.walletHistory = data;
    },
    SET_USER_WALLET(state, data) {
        state.walletData = data;
    },
    SET_SUCCESS_MSG(state, success) {
        state.success = success;
    },
    SET_PAYMENT_RESPONSE(state, data) {
        state.webpayResponse = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
