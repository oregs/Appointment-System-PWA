<template>
        <section class="scroll-smooth">
        <div class="flex items-center justify-center relative overflow-x-auto mb-10 px-6 py-20">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-7 pt-6 mb-2">
                    <div class="flex space-x-4">
                        <img class="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Bonnie image">
                        <h2 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{{ $store.state.user?.FullName }}</h2>
                    </div>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        {{ $store.state.user.email }}
                    </p>
                </div>
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form  @submit.prevent="handleSubmit()" class="mt-2 space-y-6" action="#">
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div>
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" 
                                    v-model="title" 
                                    id="title" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Title" 
                                >
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FIrst name</label>
                                <input type="text" 
                                    v-model="first_name" 
                                    id="first_name" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="First name" 
                                    
                                >
                                <p id="firstNameCheck" class="mt-2 inline-flex hidden items-center text-sm text-red-600 dark:text-red-500"></p>
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input type="text" 
                                    v-model="last_name" 
                                    id="last_name" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Last name" 
                                    
                                >
                                <p id="lastNameCheck" class="mt-2 inline-flex hidden items-center text-sm text-red-600 dark:text-red-500"></p>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >Update
                        </button>
                    </form>
                
                    <form  @submit.prevent="handleChangePasswordSubmit()" class="mt-8 space-y-6" action="#">
                        <span class="text-base text-lg text-bold text-white font-normal text-gray-500 dark:text-gray-400">
                            <h2>Change Password</h2>
                        </span>
                        <div>
                            <label for="currentPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password </label>
                            <input 
                                type="password" 
                                id="currentPassword" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Current password" 
                                required
                                v-model="old_password"
                            >
                            <p id="oldPasswordCheck" class="mt-2 inline-flex hidden items-center text-sm text-red-600 dark:text-red-500"></p>
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
                            type="submit" 
                            class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "ProfilePage",
    data() {
        return {
            title: '',
            first_name: '',
            last_name: '',
            old_password: '',
            new_password: '',
            passValidation: '',
        }
    },
    created() {
        this.first_name = this.$store.state.user.first_name
        this.last_name = this.$store.state.user.last_name
        this.title = this.$store.state.user.title
    },
    mounted() {
        
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
        async handleSubmit() {
            document.getElementById('firstNameCheck').classList.add('hidden');
            document.getElementById('lastNameCheck').classList.add('hidden');

            await axios.patch('user/update', {
                title: this.title,
                first_name: this.first_name,
                last_name: this.last_name
            }).then((res) => {
                console.log(res);
                this.$swal.fire({
                    title: 'Success',
                    text: 'Profile details changed!',
                    icon: 'success',
                }).then(async () => {
                    // Fetch latest record and update localStorage
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    this.$store.commit('setUser', res.data.user);
                });
            }).catch((err) => {
                if (err.response.data.status.first_name) {
                    console.error(err.response.data.status.first_name);
                    let firstName = document.getElementById('firstNameCheck');
                        firstName.classList.remove('hidden');
                        firstName.innerHTML = err.response.data.status.first_name;
                }

                if (err.response.data.status.last_name) {
                    let lastName = document.getElementById('lastNameCheck');
                        lastName.classList.remove('hidden');
                        lastName.innerHTML = err.response.data.status.last_name;
                }
            });
        },
        async handleChangePasswordSubmit() {
            if (this.passValidation) {
                document.getElementById('oldPasswordCheck').classList.add('hidden');

                await axios.patch('user/change-password', {
                    old_password: this.old_password,
                    new_password: this.new_password
                }).then((res) => {
                    console.log(res);
                    if (res.data.status === 'success') {
                        this.$swal.fire({
                            title: 'Success',
                            text: 'Password changed!',
                            icon: 'success',
                        }).then(() => {
                            this.old_password = '',
                            this.new_password = ''
                            document.getElementById('newPasswordCheck').classList.add('hidden');
                        });                    
                    }
                }).catch((err) => {
                    console.log(err)
                    let new_password = document.getElementById('oldPasswordCheck');
                    new_password.classList.remove('hidden');
                    new_password.innerHTML = err.response.data.message;
                });
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
    },
}
</script>