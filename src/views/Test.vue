<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
  <div class="">
    <nav class="bg-white sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Appointment System</span>
            </a>
            <div class="flex md:order-2">
              <button type="button" id="profileHover" data-dropdown-trigger="hover" data-dropdown-toggle="profile-dropdown" class="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  <svg class="w-5 h-5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>
                  Oregunwa Segun
              </button>
              <!-- Dropdown menu -->
              <div id="profile-dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="profileHover">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                  </li>
                  <li>
                    <a href="#" @click="$store.dispatch('logout')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </nav>

    <!-- <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div> -->
    <!--  -->
   
    <div v-if="isOffline" id="toast-success" class="fixed top-5 right-5 mt-12 z-20 flex ml-auto mr-2 items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div class="inline-flex p-1 items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class viewBox="0 0 24 24"><path d="M6.92 5.51 3.71 2.29a1 1 0 0 0-1.42 1.42L4.56 6A15.21 15.21 0 0 0 1.4 8.39a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3 1 1 0 0 0 .7-.29 13.07 13.07 0 0 1 3.24-2.35L7.54 9a10.78 10.78 0 0 0-3.32 2.27 1 1 0 1 0 1.42 1.4 8.8 8.8 0 0 1 3.45-2.12l1.62 1.61a7.07 7.07 0 0 0-3.66 1.94 1 1 0 1 0 1.42 1.4A5 5 0 0 1 12 14a4.13 4.13 0 0 1 .63.05l7.66 7.66a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42ZM12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM22.61 8.39A15 15 0 0 0 10.29 4.1a1 1 0 1 0 .22 2A13.07 13.07 0 0 1 21.2 9.81a1 1 0 0 0 1.41-1.42Zm-4.25 4.24a1 1 0 0 0 1.42-1.4 10.75 10.75 0 0 0-4.84-2.82 1 1 0 1 0-.52 1.92 8.94 8.94 0 0 1 3.94 2.3Z"/></svg>
          <span class="sr-only">Check icon</span>
      </div>
      <div class="ml-3 text-sm font-normal"> Sorry, it looks like you're offline.</div>
      <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>

    <!-- <div v-if="isOffline" class="absolute fixed mt-12 left-0 opacity-75 z-10 w-full text-center py-2 bg-red-300 border-r border-red-700 text-white">
      Sorry, it looks like you're offline
    </div> -->

    <div class="p-8 mt-16">
        <div class="w-full p-8 bg-white">
          <div class="flex items-center justify-between pb-4">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Book an Appointment</h5>
          </div>
            <div class="space-y-4 sm:space-y-0">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="flex items-center justify-between pb-4">
                  <div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
                    </div>
                  </div>
                  <div>
                      <!-- Modal toggle -->
                      <button @click="openCreateAppointment" data-modal-target="appointment-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Create Appointment
                      </button>

                      <!-- Main modal -->
                      <div id="appointment-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                        <div class="relative w-full h-full max-w-md md:h-auto">
                          <!-- Modal content -->
                          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              <button type="button" @click="closeModal" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="appointment-modal">
                                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                  <span class="sr-only">Close modal</span>
                              </button>
                              <div class="px-6 py-6 lg:px-8">
                                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Book Appointment</h3>
                                  <form class="space-y-6" action="#">
                                      <div>
                                        <label for="service_category_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Categories</label>
                                        <select 
                                          id="service_category_id" 
                                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          v-model="service_category_id"
                                          @change="getServiceCategoryOpt"
                                        >
                                          <option selected>Choose Service Category</option>
                                          <option :value="service_category.id" v-for="service_category in service_categories" :key="service_category.id">{{ service_category.category }}</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label for="service_type_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Types</label>
                                        <select 
                                          id="service_type_id" 
                                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          v-model="service_type_id"
                                          @change="getServiceTypeOpt"
                                        >
                                          <option selected>Choose Service Type</option>
                                          <option :value="activeServiceType.id" v-for="activeServiceType in activeServiceTypes" :key="activeServiceType.id">{{ activeServiceType.type }}</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label for="branch_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch</label>
                                        <select 
                                          id="branch_id" 
                                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          v-model="branch_id"
                                          @change="getBranchOpt"
                                        >
                                          <option selected>Choose Branch</option>
                                          <option :value="branch.id" v-for="branch in branches" :key="branch.id">{{ branch.name }}</option>
                                        </select>
                                      </div>
                                      <div>
                                        <label for="appointment_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment Date</label>
                                        <input 
                                          type="datetime-local" 
                                          id="appointment_date" 
                                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                          required
                                          v-model="appointment_date"
                                        >
                                      </div>
            
                                      <button 
                                        type="button"
                                        id="addAppointment"
                                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        @click="addAppointment()"
                                      >Submit Appointment</button>
                                      <button 
                                        type="button" 
                                        id="updateAppointment"
                                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        @click="updateAppointment(activeAppointmentId)"
                                      >Update Appointment</button>
                                  </form>
                              </div>
                          </div>
                        </div>
                      </div> 
                    </div>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" id="appointmentTable">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Service Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Service Type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date & Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Approval Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                          v-for="appointmentObj in appointmentObjs.data"
                          :key="appointmentObj.id"
                        >
                            <td class="px-6 py-4">
                                {{ appointmentObj.service_type.service_category.category}}
                            </td>
                            <td class="px-6 py-4">
                              {{ appointmentObj.service_type.type}}
                            </td>
                            <td class="px-6 py-4">
                              {{ appointmentObj.branch.name}}
                            </td>
                            <td class="px-6 py-4">
                                {{ moment(appointmentObj.appointment_date).format('MMMM Do YYYY, h:mm A') }}
                            </td>
                            <td class="px-6 py-4">
                              <span v-if="!appointmentObj.approval_status" class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Waiting for Approval</span>
                              <span v-else-if="appointmentObj.approval_status == 1" class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Approved</span>
                              <span v-else class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Rejected</span>
                            </td>
                            <td class="px-6 py-4">
                              <button 
                                v-if="appointmentObj.approval_status === null"
                                type="button" 
                                @click="editAppointment(appointmentObj.id)" 
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >Edit</button>
                              <span v-else class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">No further action</span>
                              <button
                                v-if="appointmentObj.approval_status === null"
                                type="button" 
                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                @click="deleteAppointment(appointmentObj.id)" 
                                >Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- Pagination -->
                <div>
                    <nav class="flex items-center justify-between px-4 py-4 pt-4 pagination-row" aria-label="Table navigation">
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                        <ul class="inline-flex items-center -space-x-px" id="paginate-parent">
                            <li>
                                <button 
                                  type="button" 
                                  class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                  @click="prevRecord(pageNumber-1)" 
                                >
                                    <span class="sr-only">Previous</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </button>
                            </li>
                            <li v-for="(item, index) in new Array(appointmentObjs.pages)" :key="index">
                                <button 
                                  type="button" 
                                  :class="[index === 0 ? 'active text-white bg-blue-700 ' : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white text-gray-500 bg-white'] + 'paginate-button px-3 py-2 leading-tight border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'"
                                  @click="navigateTable(index+1)" :id="'navigate-'+index" 
                                >{{ index + 1 }}</button>

                            <!-- text-white bg-blue-700 -->

                            </li>
                            <li>
                                <button 
                                  type="button" 
                                  class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                  @click="nextRecord(pageNumber + 1)"
                                >
                                    <span class="sr-only">Next</span>
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

              </div>

            </div>
        </div>
    </div>
  </div>

  
  <div class="bg-white">
    <!-- Navbar -->
    <div>
      <nav v-if="$store.state.isAuthenticated" class="fixed z-30 w-full top-0 left-0 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
                <button v-if="$store.state.isAdmin" id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <a href="#" class="flex ml-2 md:mr-24">
                <img src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo">
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
            </div>
            <div class="flex items-center">
                <div class="hidden mr-3 -mb-1 sm:block">
                    <span></span>
                </div>
            
                <button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    <svg id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </button>
                <div id="tooltip-toggle" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1193px, 63px);">
                    Toggle dark mode
                    <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(69px, 0px);"></div>
                </div>
                
                <div class="flex items-center ml-3">
                    <div>
                    <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                    </button>
                    </div>
                    
                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-2" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1313px, 97px);">
                    <div class="px-4 py-3" role="none">
                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                        Oregs Segun
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        oregsgraphix@gmail.com
                        </p>
                    </div>
                    <ul class="py-1" role="none">
                        <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</a>
                        </li>
                        <li>
                        <a href="#"  @click="$store.dispatch('logout')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Logout</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </nav>
    </div>

    <div :class="[$store.state.isAdmin ? 'flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900' : '']">
      
      <!-- Sidebar -->
      <aside v-if="$store.state.isAdmin" id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width hidden" aria-label="Sidebar">
        <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <ul class="pb-2 space-y-2">
                <li>
                <form action="#" method="GET" class="lg:hidden">
                    <label for="mobile-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" name="email" id="mobile-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search">
                    </div>
                </form>
                </li>
                <li>
                <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Appointments</span>
                    <svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/pages/pricing/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Pricing</a>
                    </li>
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/pages/maintenance/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Maintenance</a>
                    </li>
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/pages/404/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">404 not found</a>
                    </li>
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/pages/500/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">500 server error</a>
                    </li>
                </ul>
                </li>
                <li>
                <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-auth" data-collapse-toggle="dropdown-auth">
                    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Authentication</span>
                    <svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-auth" class="hidden py-2 space-y-2">
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/sign-in/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign in</a>
                    </li>
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/sign-up/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Sign up</a>
                    </li>
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/forgot-password/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Forgot password</a>
                    </li>
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/reset-password/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Reset password</a>
                    </li>
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/authentication/profile-lock/" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Profile lock</a>
                    </li>
                </ul>
                </li>
                <li>
                <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-playground" data-collapse-toggle="dropdown-playground">
                    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"></path>
                    </svg>
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Playground</span>
                    <svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="dropdown-playground" class="space-y-2 py-2 hidden ">
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/playground/stacked/" class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Stacked</a>
                    </li>
                    <li>
                    <a href="https://flowbite-admin-dashboard.vercel.app/playground/sidebar/" class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700 ">Sidebar</a>
                    </li>
                </ul>
                </li>
            </ul>
            <div class="pt-2 space-y-2">
                <a href="https://github.com/themesberg/flowbite-admin-dashboard" target="_blank" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                <span class="ml-3" sidebar-toggle-item="">GitHub Repository</span>
                </a>
                <a href="https://flowbite.com/docs/getting-started/introduction/" target="_blank" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                <span class="ml-3" sidebar-toggle-item="">Flowbite Docs</span>
                </a>
                <a href="https://flowbite.com/docs/components/alerts/" target="_blank" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                <span class="ml-3" sidebar-toggle-item="">Components</span>
                </a>
                <a href="https://github.com/themesberg/flowbite-admin-dashboard/issues" target="_blank" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-3" sidebar-toggle-item="">Support</span>
                </a>
            </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-gray-800" sidebar-bottom-menu="">
            <a href="#" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
            </a>
            <a href="https://flowbite-admin-dashboard.vercel.app/settings/" data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
            </a>
            <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(71px, -64px);">
            Settings page
                <div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(55px, 0px);"></div>
            </div>
            <button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg class="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlink:href="#a" y="420"></use><use xlink:href="#a" y="840"></use><use xlink:href="#a" y="1260"></use></g><use xlink:href="#a" y="1680"></use></g><use xlink:href="#b" x="247" y="210"></use></g><use xlink:href="#c" x="494"></use></g><use xlink:href="#d" x="988"></use><use xlink:href="#c" x="1976"></use><use xlink:href="#e" x="2470"></use></g></svg>
            </button>
            
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700" id="language-dropdown" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(184px, 409px);">
            <ul class="py-1" role="none">
                <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                    <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                        <g fill-rule="evenodd">
                        <g stroke-width="1pt">
                            <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path>
                            <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path>
                        </g>
                        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path>
                        <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path>
                        </g>
                    </svg>              
                    English (US)
                    </div>
                </a>
                </li>
                <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                    <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                        <path fill="#ffce00" d="M0 341.3h512V512H0z"></path>
                        <path d="M0 0h512v170.7H0z"></path>
                        <path fill="#d00" d="M0 170.7h512v170.6H0z"></path>
                    </svg>
                    Deutsch
                    </div>
                </a>
                </li>
                <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                    <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                        <g fill-rule="evenodd" stroke-width="1pt">
                        <path fill="#fff" d="M0 0h512v512H0z"></path>
                        <path fill="#009246" d="M0 0h170.7v512H0z"></path>
                        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path>
                        </g>
                    </svg>              
                    Italiano
                    </div>
                </a>
                </li>
                <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                    <div class="inline-flex items-center">
                    <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                        <defs>
                        <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path>
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z"></path>
                        <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"></use>
                        <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"></use>
                        <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"></use>
                        <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"></use>
                        <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"></use>
                    </svg>
                    中文 (繁體)
                    </div>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </div>
      </aside>

      <!-- Main Page -->
      <router-view />
      
      <footer class="p-4 my-6 mx-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8 dark:bg-gray-800">
        <ul class="flex flex-wrap items-center mb-6 space-y-1 md:mb-0">
            <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms and conditions</a></li>
            <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a></li>
            <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Cookie Policy</a></li>
            <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a></li>
        </ul>
        <div class="flex space-x-6 sm:justify-center">
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
      </footer>
    </div>
  </div>


</template>

<script>
import { Modal } from 'flowbite';
import axios from 'axios';
import { db } from '../db';
import VSPagination from '@/components/VSPagination.vue';
import Dexie from 'dexie';

export default {
  "name": "Appointment",
  components: {
    VSPagination,
  },
  data() {
    return {
      service_category_id:'',
      service_type_id:'',
      branch_id:'',
      appointment_date:'',
      serviceCategoryOpt:'',
      serviceTypeOpt:'',
      branchOpt:'',
      appointmentObjs: [],
      activeAppointmentId: '',
      service_categories: null,
      service_types: null,
      branches:null,
      activeServiceTypes: [],
      lastObjId: '',
      isOffline: !navigator.onLine,
      isNew: null,
      moment:this.$moment,
      pageNumber: null,
      pages: null
    }
  },
  async created() {
    this.appointmentObjs = await this.tableData();
    this.pages = this.appointmentObjs.pages;

    // let appointmentObjs = await this.getAppointment();
    // this.appointmentObjs = appointmentObjs.reverse();
    
    await this.fetchAndSaveResourcesLocally();
    this.service_categories = await this.getServiceCategories();
    this.service_types = await this.getServiceTypes();
    this.branches = await this.getBranches();

    // this.syncAppointmentData(false);

  },
  mounted() {
    window.addEventListener('offline', () => {
      this.isOffline = true;
    });

    window.addEventListener('online', async () => {
      this.isOffline = false;

    // sync up a user's data with an external api
      this.syncAppointmentData(this.isOffline);
    });

    this.setNavigationStatus();
  },
  methods: {
    async getServiceTypes() {
      return new Promise((resolve, reject) => {
        db.serviceTypes.toArray().then(e => resolve(e))
          .catch(e => console.error("Error fetching service types", e));
      });
    },

    async getServiceCategories() {
      return new Promise((resolve, reject) => {
        db.serviceCategories.toArray().then(e => resolve(e))
          .catch(e => console.error("Error uploading fetching service categories", e));
      });
    },

    async getBranches() {
      return new Promise((resolve, reject) => {
        db.branches.toArray().then(e => resolve(e))
          .catch(e => console.error("Error uploading fetching branches", e));
      });
    },

    async tableData(pageNumber=1) {
      this.pageNumber = pageNumber;
      let newOffset = pageNumber === 1 ? 0 : (pageNumber - 1) * 10;

      let  appointmentObj = db.appointments;

      let data = new Dexie.Promise(function (resolve, reject) {
        return appointmentObj.reverse()
          .offset(newOffset)
          .limit(10)
          .toArray()
          .then(function(e) {
            // console.log('getAppointment()', e.count());
            resolve(e);
        }).catch((e) => reject(e));        
      });

      let numberOfRecords = new Dexie.Promise((resolve, reject) => {
          resolve(appointmentObj.count());
      });

      let appointmentRecords = await  Promise.all([numberOfRecords, data]);
  
      return {
        totalRecords: appointmentRecords[0],
        pages: Math.ceil(appointmentRecords[0]/10),
        data: appointmentRecords[1]
      };
    },
    async navigateTable(pageNumber) {
      this.pageNumber = pageNumber >= 1 && pageNumber <= this.pages ? pageNumber : pageNumber - 1;
      console.log(this.pageNumber);
      this.appointmentObjs = await this.tableData(this.pageNumber);
    },

    async prevRecord(pageNumber) {
      this.pageNumber = pageNumber >= 1 ? pageNumber : pageNumber + 1;
      console.log(this.pageNumber);
      this.appointmentObjs = await this.tableData(this.pageNumber);
    },

    async nextRecord(pageNumber) {
      this.pageNumber = pageNumber <= this.pages ? pageNumber : pageNumber - 1;
      console.log(this.pageNumber);
      this.appointmentObjs = await this.tableData(this.pageNumber);
    },


    setNavigationStatus() {
      let prevButton = null;
      const wrapper = document.getElementById("paginate-parent");
      var btns = wrapper.getElementsByClassName("paginate-button");

      for (var i = 0; i < btns.length; i++) {
        if(btns[i].classList.contains('active')) {
          prevButton = btns[i];
          break;
        }
      }

      wrapper.addEventListener('click', (e) => {
        const isButton = e.target.nodeName === 'BUTTON'; 
        if (!isButton) return;
        
        e.target.classList.remove('active', 'text-gray-500', 'bg-white', 'hover:bg-gray-100', 'hover:text-gray-700', 'dark:hover:bg-gray-700', 'dark:hover:text-white'); // Add .active CSS Class
        e.target.classList.add('active', 'text-white', 'bg-blue-700'); // Add .active CSS Class

        if(prevButton !== null) {
          prevButton.classList.remove('active', 'text-white', 'bg-blue-700');  // Remove .active CSS Class
          prevButton.classList.add('text-gray-500', 'bg-white', 'hover:bg-gray-100', 'hover:text-gray-700', 'dark:hover:bg-gray-700', 'dark:hover:text-white');  // Remove .active CSS Class
        }
        
        prevButton = e.target;
      });
    },
    
    async getAppointment() {
      return new Promise((resolve, reject) => {
        if (!this.isOffline) {
          this.getAppointmentDataFromServer(true);
          resolve();
        } else {
          db.appointments.toArray().then(function(e) {
            console.log('getAppointment()', e);``
            let appointmentObj = e.filter((appointment => appointment.isDeleted === undefined))
            resolve(appointmentObj);
          }).catch((e) => reject(e));
        }
      }).catch((e) => console.error("Error uploading data", e));
    },

    async addAppointment() {

      return new Promise((resolve, reject) => {

        // Get last Object ID and increment
        // let lastObjId = this.appointmentObjs.length > 0 
        //   ? this.appointmentObjs[0].id + 1 : 1;

        let newAppointmentObj = this.appointmentData();

        if(!this.isOffline) {

          axios.post('appointments', newAppointmentObj)
            .then((res) => {
              if (res.data.status === 'success') {
                this.appointmentObjs.data.unshift(newAppointmentObj);
                this.$swal.fire({
                  title: 'Success!',
                  text: 'Appointment request sent',
                  icon: 'success',
                  showConfirmButton:false,
                  timer:1000
                }).then(() => resolve());
              }
            }).catch((e) => reject("Error uploading data"));  

          } else {
            newAppointmentObj.isNew = 1;
            db.appointments.add(newAppointmentObj)
              .then(() => {
                this.appointmentObjs.data.unshift(newAppointmentObj);
                this.$swal.fire({
                  title: 'Success!',
                  text: 'Appointment request sent',
                  icon: 'success',
                  showConfirmButton:false,
                  timer:1000
                }).then(() => resolve());
              })
              .catch((e) => {
                reject("Error uploading data");
            });
          }
      }).then(()=>{
        this.closeModal();
      }).catch(e => console.error(e));
    },

    async updateAppointment() {
      return new Promise((resolve, reject) => {

        let appointmentObj = this.appointmentData();

        if(!this.isOffline) {

          axios.patch(`appointments/${this.activeAppointmentId}`, appointmentObj)
            .then((res) => resolve(appointmentObj))
            .catch((e) => reject(e));  

        } else {

          appointmentObj.isUpdated = this.isNew ? 0 : 1,
          db.appointments.update(this.activeAppointmentId, appointmentObj)
            .then((updated) => {
              updated ? resolve(appointmentObj) : reject("Nothing was updated");
            })
            .catch(e => reject(e));

        }
 
      }).then(async (appointmentObj) => {
        await this.getAppointmentDataFromServer(true);
        // let appointmentIndex = this.appointmentObjs.data.findIndex(i => i.id === this.activeAppointmentId);
        // this.appointmentObjs.data[appointmentIndex] = appointmentObj;
        this.closeModal();
      }).catch(e => console.error(e));
    },

    async deleteAppointment(id) {
      try {
        this.$swal.fire({
            type: 'warning',
            title: "Are You Sure!",
            html: `Did you want to proceed to delete this appointment request ?`,
            showCancelButton: true,
            confirmButtonText: `Yes, Delete`,
            cancelButtonColor: '#d33',
            reverseButtons: true
        }).then(async (result) => {
          if(result.value == true){
            if(!this.isOffline) {
                await axios.delete(`appointments/${id}`)
                  .then(async (res) => {
                  // Fetch latest record and update indexedb
                  await this.getAppointmentDataFromServer(true);
                  // this.appointmentObjs = fetchAppointmentObjs.reverse();
                });
            } else {
              let appointmentObj = this.appointmentObjs.data.find(i => i.id === id);
              
              if (!appointmentObj.isNew) {
                await db.appointments.update(id, {isDeleted: 1})
                  .then(() => {
                      this.$swal.fire({
                        title: 'Deleted!',
                        text: 'Appointment deleted.',
                        icon: 'success',
                    }).then(async () => {
                      await this.getAppointmentDataFromServer(true);
                      // let appointmentObjs = await this.getAppointment();
                      // this.appointmentObjs = appointmentObjs.reverse();
                    });
                  });
              } else {
                db.appointments.delete(id);
                await this.getAppointmentDataFromServer(true);
                // let appointmentIndex = this.appointmentObjs.findIndex(i => i.id === id);
                // this.appointmentObjs.splice(appointmentIndex, 1);
              }
            }
          }
        }); 
      } catch(e) {
        console.error("Nothing was deleted", e); 
      }
    },

    appointmentData() {
      return {
        service_type_id: this.service_type_id, 
        service_type: {
          id: this.service_type_id, 
          type: this.serviceTypeOpt,
          service_category_id: this.service_category_id,
          service_category: {
            id: this.service_category_id, 
            category: this.serviceCategoryOpt
          }
        },
        branch_id: this.branch_id,
        branch: {
          id: this.branch_id, 
          name: this.branchOpt
        },
        appointment_date: this.appointment_date,
        approval_status: null
      } 
    },

    async getServiceCategoryOpt(e) {
      this.serviceCategoryOpt = e.target.options[e.target.options.selectedIndex].text;
      this.activeServiceTypes = [];

      this.activeServiceTypes = this.service_types.filter(
        service_type  => service_type.service_category_id === e.target.value
      );  
    },

    getServiceTypeOpt(e) {
      this.serviceTypeOpt = e.target.options[e.target.options.selectedIndex].text;
    },

    getBranchOpt(e) {
      this.branchOpt = e.target.options[e.target.options.selectedIndex].text;
    },

    editAppointment(id) {
      document.getElementById('addAppointment').classList.add('hidden');
      document.getElementById('updateAppointment').classList.remove('hidden');

      this.service_category_id = '';
      this.service_type_id = '';
      this.branch_id = '';
      this.appointment_date = '';

      let appointmentObj = this.appointmentObjs.data.find(i => id === i.id);

      this.activeServiceTypes = this.service_types.filter(
        service_type  => service_type.service_category_id == appointmentObj.service_type.service_category_id
      );  

      this.activeAppointmentId = id
      this.service_category_id = appointmentObj.service_type.service_category.id;
      this.service_type_id = appointmentObj.service_type.id;
      this.branch_id = appointmentObj.branch.id;      
      this.appointment_date = appointmentObj.appointment_date;    
      this.serviceCategoryOpt = appointmentObj.service_type.service_category.category;    
      this.serviceTypeOpt = appointmentObj.service_type.type;    
      this.branchOpt = appointmentObj.branch.name;    
      this.isNew = appointmentObj.isNew;    
   
      this.openModal();  
    },

    openModal() {
      const $targetEl = document.getElementById('appointment-modal');
      const modal = new Modal($targetEl);
      modal.show();
      document.querySelectorAll('*[modal-backdrop]').forEach(backdrop => backdrop.classList.remove('hidden'));
    },

    closeModal() {
      const $targetEl = document.getElementById('appointment-modal');
      const modal = new Modal($targetEl);
      modal.hide();
      document.querySelectorAll('*[modal-backdrop]').forEach(backdrop => backdrop.className = 'hidden');
    },

    openCreateAppointment() {
      this.service_category_id = '';
      this.service_type_id = '';
      this.branch_id = '';
      this.appointment_date = '';
      this.activeServiceTypes = [];

      document.getElementById('updateAppointment').classList.add('hidden');
      document.getElementById('addAppointment').classList.remove('hidden');

      this.openModal();
    },

    async fetchAndSaveResourcesLocally() {
      try {
        const res = await axios.get('appointments/resources');

        await this.databaseTransaction(db, 'serviceTypes', res.data.service_types);
        await this.databaseTransaction(db, 'branches', res.data.branches);
        await this.databaseTransaction(db, 'serviceCategories', res.data.service_categories);

      } catch (e) {
        return e;
      }
    },

    async databaseTransaction(db, table, data){
      await db[table].bulkPut(data).then(function(lastKey) {
        // console.log('success uploading resources');
      }).catch((e) => {
          console.error ("Error uploading data");
      });
    },

    async syncAppointmentData(connection) {
      if (!connection) {
        try {
          setTimeout(async () => {
            const isNewStatus = await this.postToServer('appointments/store', 'isNew', 1);
            const isUpdatedStatus = await this.postToServer('appointments/update', 'isUpdated', 1);
            const isDeletedStatus = await this.postToServer('appointments/delete', 'isDeleted', 1);

            if(isNewStatus || isUpdatedStatus || isDeletedStatus) {
              // Fetch latest record and update indexedb
              await this.getAppointmentDataFromServer(true);
              // let fetchAppointmentObjs = await this.getAppointmentDataFromServer();
              // this.appointmentObjs = fetchAppointmentObjs.reverse();
            }          
          }, 1000);
        } catch(e) {
          console.error(e);
        }
      }
    },

    async postToServer(url, index, value) {
      return await db.appointments.where(index).equals(value).toArray().then(async newAppointment => {
        console.log(newAppointment, newAppointment.length);
        if(newAppointment.length > 0) {
          const res = await axios.post(url, newAppointment);
          console.log(res);
          if (res.data.status == "success") {
            return true;
          }
        }
        return false;
      });
    },

    async getAppointmentDataFromServer(reloadTable=false) {
      let res = await axios.get('appointments/my-appointments');

      // clear appointments table (objectStore)
      db.appointments.clear();

      await this.databaseTransaction(db, 'appointments', res.data.appointments);
      
      if (reloadTable) {
        this.appointmentObjs = this.tableData();
      }
      // return res.data.appointments;
    },
  },
}
</script>