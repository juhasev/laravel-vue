
import './bootstrap';
import Vue from 'vue';
import Vuetify from './plugins/vuetify';
import Router from './routes.js';
import App from "./views/App";

import 'vuetify/dist/vuetify.min.css';

const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    router: Router,
    render: h => h(App)
});
