export default {
  state: {
    error: false
  },
  mutations: {
    setError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    setError ({ commit }, payload) {
      commit('setError', payload)
    }
  },
  getters: {
    getError: state => state.error
  }
}
