import {createStore} from "vuex";
import actions from "./actions"
import mutations from "./mutations"
import {currentVariants, isDownloading} from "./getters";

export const store = createStore({
    state: () => ({
        resources: {variants: [], downloading: false}
    }),
    actions,
    getters: {
        currentVariants,
        isDownloading
    },
    mutations
});

