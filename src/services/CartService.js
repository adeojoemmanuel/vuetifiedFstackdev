import Api from "@/services/Api";

export default {
    cartAdd(payload) {
        return Api().post('carts/carts', payload);
    },
    getCart(userId) {
        return Api().get(`carts/carts/${userId}`);
    },
    update(payload) {
        return Api().put(`carts/carts/${payload.uid}/${payload.id}`, payload);
    },
    delete(payload) {
        return Api().delete(`carts/carts/${payload.uid}/${payload.cartid}`);
    }
}