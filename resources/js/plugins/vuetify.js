import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        dark: true
    },
}

export default new Vuetify(opts);
