import SearchService from "@/services/SearchService";
import ash from "lodash";
// import router from "../../router";
// import UserService from "../../services/UserService";
// import ash from 'lodash';

const DefaultState = () => {
    return {
        results: null,
        success: null,
        errors: null,
        searching: false
    };
};
const state = DefaultState();
const getters = {
    getResults(state) {
        if (state.results == null && state.results == undefined) {
            return [];
        }
        return state.results;
    }
};
const actions = {
    searchAction({ commit }, payload) {
        commit("SET_LOADING", true);
        commit("SET_SUCCESS_MSG", null);
        commit("SET_ERRORS", null);
        SearchService.search(payload.keyword)
            .then(({ data }) => {
                commit("SET_LOADING", false);
                commit("SET_SUCCESS_MSG", "Search Successfull");
                for (let product in data) {
                    // console.log(product);
                    const photosArr = ash.split(data[product].photos, ",", 7);
                    data[product].photos = photosArr;
                    // console.log(data);
                }
                commit("SET_SEARCH_RESULTS", data);
            })
            .catch(error => {
                commit("SET_LOADING", false);
                commit("SET_ERRORS", error.response);
            });
    }
};
const mutations = {
    resetState(state) {
        Object.assign(state, DefaultState());
    },
    SET_SUCCESS_MSG(state, message) {
        state.success = message;
    },
    SET_ERRORS(state, message) {
        state.errors = message;
    },
    SET_SEARCH_RESULTS(state, results) {
        state.results = results;
    },
    SET_LOADING(state, loading) {
        state.searching = loading;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
