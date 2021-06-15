import loadMore from "@/assets/js/loadMore";
import axios from "axios";
export default {

    state: {
        messages: [],
        messageMain: []
    },
    mutations: {
        setMessage(state, payload) {
            state.messages = payload;
        },
        setMessageMain(state, payload) {
            state.messageMain = payload;
        },
        loadMessages(state, payload) {
            state.messageMain = [...state.messageMain, ...payload];
        },
        notify(state, payload) {
            state.messages = payload;
            state.messageMain = payload;
        }
    },
    actions: {
        setMessage({commit}, payload) {
            commit('setMessage', payload)
        },
        setMessageMain({commit}, payload) {
            commit('setMessageMain', payload)
        },
        loadMessages({commit, getters}) {
            let res = getters.getMessageFilter;
            commit('loadMessages', loadMore(res))
        },
        notify({commit}) {
            commit('setLoading', true)
            axios.get('https://tocode.ru/static/_secret/courses/1/notifyApi.php')
                .then(response => {
                    let res = response.data.notify,
                        message = [],
                        messagesMain = [];
                    // filter
                    for (let i = 0; i < res.length; i++) {
                        if(res[i].main) messagesMain.push(res[i])
                        else message.push(res[i])
                    }
                    commit('setMessage', message)
                    commit('setMessageMain', messagesMain)

                })
                .catch(() => {
                    commit('setError', "Error: Network Error")
                })
            .finally(() => (commit('setLoading', false)))
        }
    },
    getters: {
        getMessage(state) {
            return state.messages;
        },

        getMessageFilter(state) {
            return state.messages.filter(mes => {
                return mes.main === false
            });
        },
        getNotify(state) {
            return state.messages;
        },
        getMessageMain(state) {
            return state.messageMain;
        }
    }
}