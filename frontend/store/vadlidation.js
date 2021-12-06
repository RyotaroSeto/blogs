export const state = () => ({
    errors: {},
});

export const getters = {
    errors(state) {
        return state.errors
    },
};

export const mutations = {
    setValidationErrors(state, errors) {
        state.errors = errors
    }
};

export const actions = {
    setErrors({commit}, errors) {
        commit("setValidationErrors", errors);
    },
    clearErrors({commit}) {
        commit("setValidationErrors", {});
    }
};
