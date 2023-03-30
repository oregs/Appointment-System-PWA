<template>
    <div>
        <main class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
                <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                    Appointment System
                </router-link>
                <!-- Card -->
                <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
                    <div class="w-full p-6 sm:p-8">
                        <h2 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                            Forgot your password?
                        </h2>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            Don't fret! Just type in your email and we will send you a link to reset your password!
                        </p>
                        <form @submit.prevent="handleForgotPassword()" class="mt-8 space-y-6" action="#">
                            <div id="emailAlert" class="hidden" role="alert">
                                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Info</span>
                                <div id="emailMessage"></div>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                    type="email" 
                                    v-model="email" 
                                    id="email" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                    placeholder="name@company.com"
                                >
                                <p id="emailCheck" class="mt-2 inline-flex hidden items-center text-sm text-red-600 dark:text-red-500"></p>
                            </div>
                            <!-- <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required="">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="font-medium text-gray-900 dark:text-white">I accept the <a href="#" class="text-primary-700 hover:underline dark:text-primary-500">Terms and Conditions</a></label>
                                </div>
                            </div> -->
                            <button 
                                id="submitBtn"
                                type="submit" 
                                class="w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ForgotPassword',
    data() {
        return {
            email: '',
            validateEmail: false
        }
    },
    watch: {
        email(emailAddress) {
            let email = String(emailAddress)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            
            if (!email) {
                let emailCheck = document.getElementById('emailCheck');
                    emailCheck.classList.remove('hidden');
                    emailCheck.innerHTML = 'Email is invalid';

                this.validateEmail = false;
            } else {
                document.getElementById('emailCheck').classList.add('hidden');
                this.validateEmail = true;
            }
        }
    },
    methods: {
        async handleForgotPassword() {
            // console.log('Inside email check', this.email);

            if (this.validateEmail) {
                document.getElementById('emailCheck').classList.add('hidden');
                document.getElementById('emailAlert').className = 'hidden';
                this.$store.dispatch('disableButton', 'submitBtn');
                
                await axios.post('forgot-password', {
                    email: this.email
                }).then((res) => {
                    console.log(res);
                    this.$store.dispatch('enableButton', {buttonText: 'Submit', buttonId: 'submitBtn'});
                    if (res.data.status == 'success') {
                        this.alertBody({
                            classList: ['flex', 'p-4', 'mb-4', 'text-sm', 'text-green-800', 'rounded-lg', 'bg-green-50', 'dark:bg-gray-800', 'dark:text-green-400'], 
                            alertParentId: 'emailAlert',
                            alertMessageId: 'emailMessage',
                            message: `<span class="font-medium">Success!</span>&nbsp;${res.data.message}`
                        });
                    } else {
                        this.alertBody({
                            classList: ['flex', 'p-4', 'mb-4', 'text-sm', 'text-yellow-800', 'rounded-lg', 'bg-yellow-50', 'dark:bg-gray-800', 'dark:text-yellow-300'], 
                            alertParentId: 'emailAlert',
                            alertMessageId: 'emailMessage',
                            message: `<span class="font-medium">Info!</span>&nbsp;${res.data.message}`
                        });
                    }
                }).catch((err) => {
                    console.error('catch()', err);
                    this.alertBody({
                        classList: ['flex', 'p-4', 'mb-4', 'text-sm', 'text-red-800', 'rounded-lg', 'bg-red-50', 'dark:bg-gray-800', 'dark:text-red-400'], 
                        alertParentId: 'emailAlert',
                        alertMessageId: 'emailMessage',
                        message: `<span class="font-medium">Error!</span>&nbsp;${err.response.data.message}`
                    });
                    this.$store.dispatch('enableButton', {buttonText: 'Submit', buttonId: 'submitBtn'});
                });
            } else {
                console.log('Inside email check');
                let email = document.getElementById('emailCheck');
                    email.classList.remove('hidden');
                    email.innerHTML = 'Email field cannot be empty';
            }
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