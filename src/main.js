import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './app.css';

// import 'bootstrap/dist/css/bootstrap.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

// window.$ = window.jQuery = require('jquery');

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

createApp(App)
    .use(router)
    .mount('#app');
