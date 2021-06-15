import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)

import notify from "@/store/notify";


export default new Vuex.Store({
    modules: {
        notify
    }
})