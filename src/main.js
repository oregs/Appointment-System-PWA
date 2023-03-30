import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from "vuex";
import router from './router';
import { db } from './db';
import axios from 'axios';
import "./axios";
import moment from 'moment';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import './app.css';
import './registerServiceWorker';

const options = {
confirmButtonColor: '#2463EB',
cancelButtonColor: '#ff7674',
};

// import 'bootstrap/dist/css/bootstrap.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

window.$ = window.jQuery = require('jquery')


const store = createStore({
    state() {
        return {
            isAdmin: false,
            isAuthenticated: false,
            user: [],
            service_categories: [],
            service_types: [],
            branches: [],
            isOffline: !navigator.onLine,
        }
    },
    mutations: {
        setIsAdmin(state, isAdmin) {
            state.isAdmin = isAdmin;
        },
        setIsAuthenticated(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
        setServiceCategories(state, serviceCategories) {
            state.service_categories = serviceCategories;
        },
        setServiceTypes(state, serviceTypes) {
            state.service_types = serviceTypes;
        },
        setBranches(state, branches) {
            state.branches = branches;
        },
        updateIsOffline(state, isOffline) {
            state.isOffline = isOffline;
        },
        setUser(state, user) {
            state.user = JSON.parse(user);
        },
    },
    actions: {
        async logout({ commit }) {
            await axios.post('logout').then((e) => {
                if (e.data.status === 'success') {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    localStorage.removeItem('color-theme');
                    router.push('/');
                    commit('setIsAdmin', false);
                    commit('setIsAuthenticated', false);
                    window.location.reload();
                }
            }).catch((e) => console.error('Unable to logout user: ' + e));
        },
        
        darkModeToggle() {
            const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
            const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

            if (themeToggleDarkIcon || themeToggleLightIcon) {
                // Change the icons inside the button based on previous settings
                if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    themeToggleDarkIcon.classList.add('hidden');
                    themeToggleLightIcon.classList.remove('hidden');
                } else {
                    themeToggleLightIcon.classList.add('hidden');
                    themeToggleDarkIcon.classList.remove('hidden');
                }
            }
            // toggle icons
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                console.log(localStorage.getItem('color-theme'));
                if (localStorage.getItem('color-theme') === 'dark') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            } else {
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        },

        toggleSidebar({ dispatch, commit }) {
            dispatch('sidebarToggle', {
                sidebar: document.getElementById('sidebar'),
                toggleSidebarMobileHamburger: document.getElementById('toggleSidebarMobileHamburger'),
                toggleSidebarMobileClose: document.getElementById('toggleSidebarMobileClose'),
                // sidebarBackdrop: document.getElementById('sidebarBackdrop'),
            });
        },

        sidebarBackdrop({ dispatch, commit }) {
            dispatch('sidebarToggle', {
                sidebar: document.getElementById('sidebar'),
                toggleSidebarMobileHamburger: document.getElementById('toggleSidebarMobileHamburger'),
                toggleSidebarMobileClose: document.getElementById('toggleSidebarMobileClose'),
                // sidebarBackdrop: document.getElementById('sidebarBackdrop'),
            });
        },

        sidebarToggle({ commit }, context) {
            context.sidebar.classList.toggle('hidden');
            // context.sidebarBackdrop.classList.toggle('hidden');
            context.toggleSidebarMobileHamburger.classList.toggle('hidden');
            context.toggleSidebarMobileClose.classList.toggle('hidden');
        },

        async postToServer ({ commit }, table, url, index, value) {
            return await db[table].where(index).equals(value).toArray().then(async data => {
              if(data.length > 0) {
                const res = await axios.post(url, data);
                if (res.data.status == "success") {
                  return true;
                }
              }
              return false;
            });
        },
        async fetchAndSaveResourcesLocally({ dispatch, state }) {
            try {
                if (!state.isOffline) {
                    const res = await axios.get('appointments/resources');
                    await dispatch('databaseTransaction', {table: 'serviceCategories', res: res.data.service_categories });
                    await dispatch('databaseTransaction', {table: 'serviceTypes', res: res.data.service_types });
                    await dispatch('databaseTransaction', {table: 'branches', res: res.data.branches });
                }
            } catch (e) {
                return e;
            }
        },
        async databaseTransaction({ commit }, data){
            await db[data.table].bulkPut(data.res).then(function() {
            }).catch((e) => {
                console.error ("Error uploading data", e);
            });
        },
        async getServiceTypes({ commit }) {
            return new Promise((resolve, reject) => {
              db.serviceTypes.toArray()
              .then(e => { 
                    commit('setServiceTypes', e);
                    resolve();
                })
                .catch(e => reject("Error fetching service types", e));
            });
          },
      
        async getServiceCategories({ commit }) {
            return new Promise((resolve, reject) => {
              db.serviceCategories.toArray()
                .then(e => { 
                    commit('setServiceCategories', e);
                    resolve();
                })
                .catch(e => reject("Error uploading fetching service categories", e));
            });
        },
      
        async getBranches({ commit }) {
            return new Promise((resolve, reject) => {
              db.branches.toArray().then(e => { 
                commit('setBranches', e);
                resolve();
            }).catch(e => reject("Error uploading fetching branches", e));
            });
        },
        disableButton({ commit }, buttonId) {
            let button = document.getElementById(buttonId);
                button.setAttribute('disabled', '');
                button.innerHTML = `
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg> Sending
                `;
        },
        enableButton({ commit }, buttonProp) {
            let button = document.getElementById(buttonProp.buttonId);
                button.removeAttribute('disabled');
                button.innerHTML = buttonProp.buttonText;
        }
    }
});

const app = createApp(App)
app.config.globalProperties.$moment=moment;
app.use(store);
app.use(VueSweetalert2, options)
app.use(router);
app.mount('#app');
