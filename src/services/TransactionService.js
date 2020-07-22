import Api from "@/services/Api";

export default {
    billers() {
        return Api().get("qtell/getbillers");
    },
    payment(payload) {
        return Api().get(`qtell/getbillerpaymentitem/${payload.payId}`);
    },
    paymentOption(payload) {
        return Api().post("qtell/customers/validations", payload);
    },
    advice(payload) {
        return Api().post("qtell/payments/advices", payload);
    },
     getWallet(userId) {
        return Api().get(`users/${userId}/wallet`);
    },
    getWalletHistory(userId) {
        return Api().get(`users/${userId}/wallet/transactionslog`);
    },
    createWallet(userId) {
        return Api().post(`users/${userId}/wallet`);
    },
    postPayment(payload) {
        return Api().post("webpay/payment", payload);
    },
    saveTransaction(payload) {
        return Api().post(`users/${payload.userid}/dashboardinfo`, payload);
    },
    logs(payload) {
        return Api().post(`users/${payload.userid}/wallet/savetransaction`, payload);
    }
};
