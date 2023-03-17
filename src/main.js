import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./axios";

import './app.css';
import './registerServiceWorker'

// import 'bootstrap/dist/css/bootstrap.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

// window.$ = window.jQuery = require('jquery');

// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;

const app = createApp(App)
app.use(router);
app.mount('#app');
