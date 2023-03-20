import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from "vuex";
import router from './router';
import axios from 'axios';
import "./axios";
import moment from 'moment';

import './app.css';
import './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

window.$ = window.jQuery = require('jquery')


const store = createStore({
    actions: {
        async logout() {
            await axios.post('logout').then((e) => {
                if (e.data.status === 'success') {
                    console.log('logged out');
                    localStorage.removeItem('token');
                    router.push('/');
                }
            }).catch((e) => console.error('Unable to logout user: ' + e));
        },
    }
});

const app = createApp(App)
app.config.globalProperties.$moment=moment;
app.use(store);
app.use(router);
app.mount('#app');
