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
                          v-for="appointmentObj in appointmentObjs"
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
                                type="button" 
                                @click="editAppointment(appointmentObj.id)" 
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >Edit</button>
                              <button 
                                type="button" 
                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                @click="deleteAppointment(appointmentObj.id)" 
                                >Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav class="flex items-center justify-between px-4 py-4 pt-4" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul class="inline-flex items-center -space-x-px">
                        <li>
                            <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                            <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                            <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Next</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
              </div>

            </div>
        </div>
    </div>
  </div>

</template>

<script>
import { Modal } from 'flowbite';
import axios from 'axios';
import { db } from '../db';

export default {
  "name": "Appointment",
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
    }
  },
  async created() {
    let appointmentObjs = await this.getAppointment();
    this.appointmentObjs = appointmentObjs.reverse();
    
    await this.fetchAndSaveResourcesLocally();
    this.service_categories = await this.getServiceCategories()
    this.service_types = await this.getServiceTypes()
    this.branches = await this.getBranches()
  },
  mounted() {
    window.addEventListener('offline', () => {
      this.isOffline = true;
    });

    window.addEventListener('online', async () => {
      this.isOffline = false;
       // this.database = await this.getDatabase();  
      this.syncAppointmentData(this.isOffline);
    });

    console.log('Always respond');
    // sync up a user's data with an external api
    // this.syncUserData();
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
    async getAppointment() {
      return new Promise((resolve, reject) => {
        if (!this.isOffline) {
          resolve(this.getAppointmentDataFromServer());
        } else {
          db.appointments.toArray().then(function(e) {
            console.log('getAppointment()', e);
            resolve(e);
          }).catch((e) => reject(e));
        }
      }).catch((e) => console.error("Error uploading data", e));
    },
    async addAppointment() {

      return new Promise((resolve, reject) => {

        // Get last Object ID and increment
        let lastObjId = this.appointmentObjs.length > 0 
          ? this.appointmentObjs[0].id + 1 : 1;

        let newAppointmentObj = {
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
        }

        if(!this.isOffline) {

          axios.post('appointments', newAppointmentObj)
            .then((res) => {
              if (res.data.status === 'success') {
                this.appointmentObjs.unshift(newAppointmentObj);
                resolve();
              }
            }).catch((e) => reject("Error uploading data"));  

          } else {

            newAppointmentObj.isNew = 1;
            db.appointments.add(newAppointmentObj)
              .then(()=>{
                this.appointmentObjs.unshift(newAppointmentObj);
                resolve()
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

        let appointmentObj = {
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
        }

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
 
      }).then((appointmentObj) => {
        let appointmentIndex = this.appointmentObjs.findIndex(i => i.id === this.activeAppointmentId);
        this.appointmentObjs[appointmentIndex] = appointmentObj;
        this.closeModal();
      }).catch(e => console.error(e));
    },
    async deleteAppointment(id) {
        await db.appointments.delete(id);

        let appointmentIndex = this.appointmentObjs.findIndex(i => i.id === id);
        this.appointmentObjs.splice(appointmentIndex, 1); 
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

      let appointmentObj = this.appointmentObjs.find(i => id === i.id);


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

            if(isNewStatus || isUpdatedStatus) {
              // Fetch latest record and update indexedb
              let fetchAppointmentObjs = await this.getAppointmentDataFromServer();
              this.appointmentObjs = fetchAppointmentObjs.reverse();
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
    async getAppointmentDataFromServer() {
      let res = await axios.get('appointments/my-appointments');

      // clear appointments table (objectStore)
      db.appointments.clear();

      await this.databaseTransaction(db, 'appointments', res.data.appointments);
      return res.data.appointments;
    },
  },
}
</script>