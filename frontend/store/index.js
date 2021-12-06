// import axios from 'axios'

// create a store
export const state = () => ({
    posts: {},
});
// getters
export const getters = {
    posts(state) {
        return state.posts
    },

    Authenticated(state) {
        return state.auth.loggedIn
    },

    user(state) {
        return state.auth.user
    }
       
};
// mutations
export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
};
// actions
export const actions = {
    // async nuxtServerInit({ commit }) {
    //     const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //     commit("SET_POSTS", data);
    // }
    setPosts({commit}, posts) {
        commit("SET_POSTS", posts);
    }
};
