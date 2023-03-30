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
                        Reset password Link Expired
                    </h2>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        We're sorry, but the password reset link you were trying to use has expired. For security reasons, our password reset 
                        links are only valid for a limited time. But don't worry, you can request a new link by clicking on the button below. 
                    </p>
                    <router-link to="/forgot-password" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Forgot Password
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </router-link>
                </div>
            </div>
        </main>

    </div>
</template>
<script>
export default {
    name: 'PasswordExpired',
}
</script>