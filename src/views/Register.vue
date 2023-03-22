<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="scroll-smooth">
        <a href="#" class="flex justify-center items-center mb-2 text-2xl pt-10 font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
            Appointment System    
        </a>
        <div class="flex items-center justify-center relative overflow-x-auto mb-10 px-6 py-8">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-7 pt-6 mb-4">
                    <h1 class="text-xl mb-3 font-bold leading-tight mb-0 tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Get Started
                    </h1>
                    <p class="leading-tight tracking-tight text-gray-500 dark:text-white">
                        Create your account now
                    </p>
                </div>
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    
                    <form @submit.prevent="handleSubmit()" id="registerForm" class="space-y-4 md:space-y-6" action="#">
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" v-model="firstName" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" required>
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input type="text" v-model="lastName" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last name" required>
                                <!-- <p class="mt-2 text-xs text-red-600 dark:text-red-500">Your entry is invalid</p> -->
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="name@company.com" 
                                required
                                v-model="email"
                            >
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
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="••••••••" 
                                class="bg-gray-50 js-password border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                required
                                v-model="password"
                            />
                            <div class="flex items-center justify-between">
                                <p class="mt-2 text-sm text-gray-400 dark:text-gray-300">Must be at least 8 characters</p>
                                <span id="passwordCheck" class="mt-2 inline-flex hidden items-center text-sm text-red-600 dark:text-red-500">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg><span>&nbsp;incomplete</span>
                                </span>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >Sign up</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <router-link to="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "Register",
    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            passValidation: false,
        }
    },
    watch: {
        password(password) {
            let passwordTrim = password.trim();
            if (passwordTrim.length < 8) {
                document.getElementById('passwordCheck').classList.remove('hidden');
                this.passValidation = false;
            } else {
                document.getElementById('passwordCheck').classList.add('hidden');
                this.passValidation = true;
            }
        }
    },
    methods: {
        async handleSubmit() {
            if (this.passValidation) {
                console.log('Validation passed!');
                await axios.post('register', {
                    email: this.email,
                    password: this.password,
                    first_name: this.firstName,
                    last_name: this.lastName
                }).then((res) => {
                    console.log(res);
                    this.$router.push('/appointment');
                }).catch((err) => console.error(err));
            }
        },
        passwordToggle(toggle) {
            const password = document.querySelector('.js-password');

            if (toggle === 'hide') {
                document.getElementById('toggleEyeShow').classList.add('hidden');
                document.getElementById('toggleEyeHide').classList.remove('hidden');
                password.type = 'text'
            } else {
                document.getElementById('toggleEyeHide').classList.add('hidden');
                document.getElementById('toggleEyeShow').classList.remove('hidden');
                password.type = 'password';
            }

            password.focus()
        },
        // formValidation(formField){
        //     // var form = $(form).find(".d-none").removeAttr,
        //     var form = $(formField).find("input[required], textarea[required], select[required]"),
        //     isValid = true;
        
        //     // This remove validation errors and styles place on form input, select and textarea.
        //     // $(document).find('input[required], textarea[required], select[required]').removeClass("border-error");
        //     $(document).find('span.error-red').remove();
        
        //     // This check if input are valid or not and placed error if not valid.
        //     for (var i = 0; i < form.length; i++) {
        //         console.log(form[i]);
        //         if (!form[i].validity.valid && !$(form[i]).parents('.row').hasClass('hidden') || /[^a-zA-Z\-\/]/.test(form[i].val())) {
        //             isValid = false;
        //             $(form[i]).after(`<span id="error_${i}" class="mt-2 error-red text-xs text-red-600 dark:text-red-500">Your entry is invalid</span>`);
        //         }
        //     }
        
        //     return isValid;
        // }
    },
}
</script>