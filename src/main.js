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
        }
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
            if (localStorage.getItem('color-theme') === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.add('light');
            }

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

            const themeToggleBtn = document.getElementById('theme-toggle');
    
            // let event = new Event('dark-mode');

            if (themeToggleBtn) {
                themeToggleBtn.addEventListener('click', function() {
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

                    // document.dispatchEvent(event);
                });
            }
        },
        sidebarToggle() {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) {
                const toggleSidebarMobile = (sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose) => {
                    sidebar.classList.toggle('hidden');
                    sidebarBackdrop.classList.toggle('hidden');
                    toggleSidebarMobileHamburger.classList.toggle('hidden');
                    toggleSidebarMobileClose.classList.toggle('hidden');
                }
                
                const toggleSidebarMobileEl = document.getElementById('toggleSidebarMobile');
                const sidebarBackdrop = document.getElementById('sidebarBackdrop');
                const toggleSidebarMobileHamburger = document.getElementById('toggleSidebarMobileHamburger');
                const toggleSidebarMobileClose = document.getElementById('toggleSidebarMobileClose');
                // const toggleSidebarMobileSearch = document.getElementById('toggleSidebarMobileSearch');
                
                // toggleSidebarMobileSearch.addEventListener('click', () => {
                //     toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
                // });
                
                toggleSidebarMobileEl.addEventListener('click', () => {
                    toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
                });
                
                sidebarBackdrop.addEventListener('click', () => {
                    toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
                });
            }
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
    }
});

const app = createApp(App)
app.config.globalProperties.$moment=moment;
app.use(store);
app.use(VueSweetalert2, options)
app.use(router);
app.mount('#app');
