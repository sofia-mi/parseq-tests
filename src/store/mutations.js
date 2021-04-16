import {SET_VARIANTS} from "./mutation-types";
import {SET_DOWNLOADING} from "./mutation-types";

export default {
  [SET_VARIANTS](state, {variants}) {
    state.resources.variants = variants;
  },
  [SET_DOWNLOADING](state, {downloading}) {
    state.resources.downloading = downloading;
  }
};
