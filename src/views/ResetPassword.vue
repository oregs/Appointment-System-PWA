<template>
    <div>
        <main class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
                <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                    Appointment System
                </router-link>
                <!-- Card -->
                <div class="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                        Reset your password
                    </h2>
                    <form @submit.prevent="handleResetPassword()" class="mt-8 space-y-6" action="#">
                        <div id="emailAlert" class="hidden" role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Info</span>
                            <div id="emailMessage"></div>
                        </div>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">
                                <!-- <input class="hidden" type="checkbox" id="toggle" @change="passwordToggle" /> -->
                                <button type="button" id="toggleEyeShow" @click="passwordToggle('hide')">
                                    <svg class="stroke-gray-400 mr-2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </button>
                                <button type="button" id="toggleEyeHide" class="hidden mr-2" @click="passwordToggle('show')">
                                    <svg class="stroke-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                </button>
                            </div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="••••••••" 
                                class="bg-gray-50 js-password border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                required
                                v-model="new_password"
                            />
                            <div class="flex items-center justify-between">
                                <p class="mt-2 text-sm text-gray-400 dark:text-gray-300">Must be at least 8 characters</p>
                                <span id="newPasswordCheck" class="mt-2 inline-flex hidden items-center text-sm text-red-600 dark:text-red-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg><span>&nbsp;incomplete</span>
                                </span>
                            </div>
                        </div>
                        <button 
                            id="submitBtn"
                            type="submit" 
                            class="w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >Reset password
                        </button>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ResetPassword',
    data() {
        return {
            new_password: '',
            token: '',
            validateEmail: false
        }
    },
    created() {
        this.token = this.$route.query.input_data;
        console.log(this.token);
    },
    watch: {
        new_password(password) {
            let passwordTrim = password.trim();
            if (passwordTrim.length < 8) {
                document.getElementById('newPasswordCheck').classList.remove('hidden');
                this.passValidation = false;
            } else {
                document.getElementById('newPasswordCheck').classList.add('hidden');
                this.passValidation = true;
            }
        }
    },
    methods: {
        async handleResetPassword() {
            if (this.passValidation) {
                document.getElementById('emailAlert').className = 'hidden';
                this.$store.dispatch('disableButton', 'submitBtn')

                await axios.patch('new-password', {
                    new_password: this.new_password,
                    token: this.token,
                }).then((res) => {
                    if (res.data.status === 'success') {
                        this.new_password = '';

                        this.$store.dispatch('enableButton', {buttonText: 'Reset Password', buttonId: 'submitBtn'});

                        this.alertBody({
                            classList: ['flex', 'p-4', 'mb-4', 'text-sm', 'text-green-800', 'rounded-lg', 'bg-green-50', 'dark:bg-gray-800', 'dark:text-green-400'], 
                            alertParentId: 'emailAlert',
                            alertMessageId: 'emailMessage',
                            message: `<span class="font-medium">Success!</span>&nbsp;${res.data.message}`
                        });

                        setInterval(() => {
                            this.$router.push('/');
                        }, 1000);
                    }
                }).catch((err) => {
                    if (err.response.status == '404') {
                        this.$router.push('/pages/404');
                    }

                    let new_password = document.getElementById('newPasswordCheck');
                    new_password.classList.remove('hidden');
                    new_password.innerHTML = err.response.data.message;
                    this.$store.dispatch('enableButton', {buttonText: 'Reset Password', buttonId: 'submitBtn'});
                });
            }
        },
        alertBody({classList, alertParentId, alertMessageId, message}) {
            let emailAlert = document.getElementById(alertParentId);
                emailAlert.classList.add(...classList);
                emailAlert.classList.remove('hidden');
            
            document.getElementById(alertMessageId).innerHTML = message;
        }, 
        passwordToggle(toggle) {
            const password = document.querySelector('.js-password');

            if (toggle === 'hide') {
                document.getElementById('toggleEyeShow').classList.add('hidden');
                document.getElementById('toggleEyeHide').classList.remove('hidden');
                password.type = 'text';
            } else {
                document.getElementById('toggleEyeHide').classList.add('hidden');
                document.getElementById('toggleEyeShow').classList.remove('hidden');
                password.type = 'password';
            }

            password.focus();
        },
        alertBody({classList, alertParentId, alertMessageId, message}) {
            let emailAlert = document.getElementById(alertParentId);
                emailAlert.classList.add(...classList);
                emailAlert.classList.remove('hidden');
            
            document.getElementById(alertMessageId).innerHTML = message;
        }
    }
}
</script>