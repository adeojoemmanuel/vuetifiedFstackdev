import CartService from "@/services/CartService";
import ash from "lodash";
// default state for resetting
const DefaultState = () => {
    return {
        cartProducts: [],
        cartLoading: false,
        message: null,
        error: null
    };
};
// changeable state for cart
const state = DefaultState();
// getters, for getting stuff na, isnt that explanatory for u.
const getters = {
    getLoading(state) {
        if (state.cartLoading !== null && state.cartLoading !== undefined) {
            return state.cartLoading;
        }
        return false;
    },
    getMessages(state) {
        if (state.message !== null && state.message !== undefined) {
            return state.message;
        }
        return null;
    },
    getErrors(state) {
        if (state.error !== null && state.error !== undefined) {
            return state.error;
        }
        return null;
    },
    userCart(state) {
        if (state.cartProducts.length > 0) {
            return state.cartProducts;
        }
        return [];
    }
};
// actions for taking actions, u sabi na.
const actions = {
    addProductToCart({ commit, dispatch, rootState }, payload) {
        commit("SET_LOADING", true);
        commit("SET_MESSAGE", null);
        commit("SET_ERROR_MSG", null);
        payload.uid = rootState.auth.user.id;
        CartService.cartAdd(payload)
            .then(({ data }) => {
                commit("SET_LOADING", false);
                commit(
                    "SET_MESSAGE",
                    "Product successfully added to your cart."
                );
                dispatch("getUserCart");
                // console.log(data);
            })
            .catch(error => {
                // console.log(error);
                commit("SET_LOADING", false);
                if (error.response.status == 404) {
                    commit(
                        "SET_ERROR_MSG",
                        "Network Error, Please try again..."
                    );
                } else {
                    commit("SET_ERROR_MSG", error.data.message);
                }
            });
    },
    getUserCart({ commit, rootState }) {
        // console.log(rootState.auth.user.id);
        let userId = rootState.auth.user.id;
        commit("SET_LOADING", true);
        commit("SET_ERROR_MSG", null);
        commit("SET_MESSAGE", null);
        CartService.getCart(userId)
            .then(({ data }) => {
                commit("SET_LOADING", false);
                // console.log(data);
                for (let product in data) {
                    // console.log(product);
                    const photosArr = ash.split(
                        data[product].productsinfo.photos,
                        ",",
                        7
                    );
                    data[product].productsinfo.photos = photosArr;
                    // console.log(data);
                }
                commit("SET_USER_CART", data);
                commit("SET_MESSAGE", "Cart Updated.");
            })
            .catch(error => {
                commit("SET_LOADING", false);
                console.log(error);
            });
    },
    updateUserCart({ commit, dispatch, rootState }, payload) {
        commit("SET_LOADING", true);
        commit("SET_MESSAGE", "Updating your cart...");
        commit("SET_ERROR_MSG", null);
        // set user id in payload
        payload.uid = rootState.auth.user.id;
        CartService.update(payload)
            .then(({ data }) => {
                dispatch("getUserCart");
            })
            .catch(error => {
                if (error.response.status == 404) {
                    commit(
                        "SET_ERROR_MSG",
                        "Network Error, Please make sure you are connected..."
                    );
                } else {
                    commit("SET_ERROR_MSG", error.response.data.message);
                }
            });
    },
    deleteCartProduct({ commit, dispatch, rootState }, payload) {
        commit("SET_LOADING", true);
        commit("SET_MESSAGE", null);
        commit("SET_MESSAGE", "Removing product from cart...");
        commit("SET_ERROR_MSG", null);
        payload.uid = rootState.auth.user.id;
        CartService.delete(payload)
            .then(({ data }) => {
                commit("SET_MESSAGE", "successfully removed product from cart");
                dispatch("getUserCart");
                commit("SET_MESSAGE", "Updating your cart...");
            })
            .catch(error => {
                console.log(error);
            });
    }
};
// mutations for changing state.
const mutations = {
    resetState(state) {
        Object.assign(state, DefaultState());
    },
    SET_USER_CART(state, cart) {
        state.cartProducts = cart;
    },
    SET_LOADING(state, loading) {
        state.cartLoading = loading;
    },
    SET_MESSAGE(state, feedback) {
        state.message = feedback;
    },
    SET_ERROR_MSG(state, feedback) {
        state.error = feedback;
    }
};

// finally exports to the vuex store, sweet
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
