import {SET_DOWNLOADING, SET_VARIANTS} from './mutation-types';
import {FETCH_VARIANTS} from "./action-types";
import axios from "axios";
import {toJson} from "really-relaxed-json";

export default {
    [FETCH_VARIANTS](context) {
        context.commit(SET_DOWNLOADING, {downloading: true});
        axios
            .get('/variants.json')
            .then(response => {
                const variants = JSON.parse(toJson(response.data)).variants;
                context.commit(SET_VARIANTS, {variants});
                context.commit(SET_DOWNLOADING, {downloading: false});
            });
    }
};
