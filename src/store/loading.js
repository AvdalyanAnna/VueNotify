export default {
    state: {
        loading: true
        // error: "Error: Network Error"
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
    },
    actions: {
        setLoading({commit},payload){
            commit('setLoading', payload)
        }
    },
    getters: {
        getLoading: state => state.loading,
    }
}