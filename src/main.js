import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from "vuex";
import router from './router';
import axios from 'axios';
import "./axios";
import moment from 'moment';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import './app.css';
import './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

window.$ = window.jQuery = require('jquery')


const store = createStore({
    state() {
        return {
            isAdmin: false,
            isAuthenticated: false
        }
    },
    mutations: {
        setIsAdmin(state, isAdmin) {
            state.isAdmin = isAdmin;
        },
        setIsAuthenticated(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
    },
    actions: {
        async logout() {
            await axios.post('logout').then((e) => {
                if (e.data.status === 'success') {
                    localStorage.removeItem('token');
                    router.push('/');
                }
            }).catch((e) => console.error('Unable to logout user: ' + e));
        },
        darkModeToggle() {
            const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
            const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

            // Change the icons inside the button based on previous settings
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                themeToggleLightIcon.classList.remove('hidden');
            } else {
                themeToggleDarkIcon.classList.remove('hidden');
            }

            const themeToggleBtn = document.getElementById('theme-toggle');

            let event = new Event('dark-mode');

            themeToggleBtn.addEventListener('click', function() {

                // toggle icons
                themeToggleDarkIcon.classList.toggle('hidden');
                themeToggleLightIcon.classList.toggle('hidden');

                // if set via local storage previously
                if (localStorage.getItem('color-theme')) {
                    if (localStorage.getItem('color-theme') === 'light') {
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('color-theme', 'dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('color-theme', 'light');
                    }

                // if NOT set via local storage previously
                } else {
                    if (document.documentElement.classList.contains('dark')) {
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('color-theme', 'light');
                    } else {
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('color-theme', 'dark');
                    }
                }

                document.dispatchEvent(event);
                
            });
        },
        sidebarToggle() {
            const sidebar = document.getElementById('sidebar');
            console.log(sidebar);
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
        }

    }
});

const app = createApp(App)
app.config.globalProperties.$moment=moment;
app.use(store);
app.use(VueSweetalert2)
app.use(router);
app.mount('#app');
