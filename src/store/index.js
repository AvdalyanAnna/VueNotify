import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)

import notify from "@/store/notify";
import error from "@/store/error";
import loading from "@/store/loading";


export default new Vuex.Store({
    modules: {
        notify,
        error,
        loading
    }
})