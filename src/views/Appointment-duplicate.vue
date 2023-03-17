<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <nav class="bg-white sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div class="flex md:order-2">
                <button type="button" data-dropdown-toggle="user-dropdown" class="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-5 h-5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>
                    Oregunwa Segun
                </button>
                <!-- Dropdown menu -->
                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <div v-if="isOffline" class="absolute mt-12 left-0 opacity-75 z-10 w-full text-center py-2 bg-red-300 border-r border-red-700 text-white">
      Sorry, it looks like you're offline
    </div>

    <div class="p-8">
        <div class="w-full p-8 mt-14 bg-white">
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
                                          <option :value="activeServiceType.id" v-for="activeServiceType in activeServiceTypes.flat(1)" :key="activeServiceType.id">{{ activeServiceType.type }}</option>
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
                                {{ appointmentObj.appointment_date }}
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
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
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
      activeServiceTypes: [],
      branches:null,
      database: null,
      serviceCategoryDb:null,
      serviceTypeDb: null,
      branchDb: null,
      lastObjId: '',
      isOffline: !navigator.onLine,
    }
  },
  async created() {
    // this.database = await this.getDatabase();    
    let appointmentObjs = await this.getAppointment();
    this.appointmentObjs = appointmentObjs.reverse();

    await this.fetchAndSaveResourcesLocally();
  },
  mounted() {
    console.log(this.isOffline);
    window.addEventListener('offline', () => {
      this.isOffline = true;
    });

    window.addEventListener('online', () => {
      this.isOffline = false;
    });

    // sync up a user's data with an external api
    // this.syncUserData();
  },
  methods: {
    // getDatabase() {
    //   return new Promise((resolve, reject) => {
    //     let db = window.indexedDB.open('appointmentDB');
        
    //     db.onerror = e => {
    //       reject('Error opening the database');
    //     }

    //     db.onsuccess = e => {
    //       console.log("db.onsuccess()", e);
    //       resolve(e.target.result);
    //     }

    //     db.onupgradeneeded = e => {
    //       console.log("db.onupgradeneeded()", e);
    //       if (e.oldVersion === 1) {
    //         e.target.result.deleteObjectStore('appointments');
    //       }

    //       // if (!e.target.result.objectStoreNames.contains('appointments')) {
    //         e.target.result.createObjectStore('appointments', { keyPath: 'id' });
    //         e.target.result.createObjectStore('serviceCategories', { keyPath: 'id' });
    //         e.target.result.createObjectStore('serviceTypes', { keyPath: 'id' });
    //         e.target.result.createObjectStore('branches', { keyPath: 'id' });
    //       // }
    //     }
    //   });
    // },
    async getAppointment() {
      return new Promise((resolve, reject) => {
        this.database.transaction('appointments')
          .objectStore('appointments')
          .getAll()
          .onsuccess = e => {
            console.log('getAppointment()', e.target.result);
            resolve(e.target.result);
          }
      });
    },
    async addAppointment() {

      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('appointments', 'readwrite');

        transaction.oncomplete = (e) => {
          resolve();
        }

        // Get last Object ID and increment
        let lastObjId = this.appointmentObjs.length > 0 
          ? this.appointmentObjs[0].id + 1 : 1;

        let newAppointmentObj = {
          id: lastObjId,
          service_type: {
            id: this.service_type_id, 
            type: this.serviceTypeOpt,
            service_category: {
              id: this.service_category_id, 
              category: this.serviceCategoryOpt
            }
          },
          branch: {
            id: this.branch_id, 
            name: this.branchOpt
          },
          appointment_date: this.appointment_date
        }

        this.appointmentObjs.unshift(newAppointmentObj);
        console.log(this.appointmentObjs);
        transaction.objectStore('appointments').add(newAppointmentObj);
      }).then(() => {
        this.closeModal();
      });
    },
    async updateAppointment() {
      return new Promise((resolve, reject) => {
        let appointStore = this.database.transaction('appointments', 'readwrite')
          .objectStore('appointments');

        let appointRequest = appointStore.get(this.activeAppointmentId);

        appointRequest.onerror = (e) => {
          reject('Error updating appointment in the database');
        }

        appointRequest.onsuccess = e => {
          let appointmentObj = e.target.result;
          appointmentObj = {
            id: this.activeAppointmentId,
            service_type: {
              id: this.service_type_id, 
              type: this.serviceTypeOpt,
              service_category: {
                id: this.service_category_id, 
                category: this.serviceCategoryOpt
              }
            },
            branch: {
              id: this.branch_id, 
              name: this.branchOpt
            },
            appointment_date: this.appointment_date
          }

          // console.log(appointmentObj, e.target.result);

          let updateAppointment = appointStore.put(appointmentObj);

          updateAppointment.onerror = e => {
            reject('Error storing the updated appointment in the database')
          }

          updateAppointment.onsuccess = e => {
            let appointmentIndex = this.appointmentObjs.findIndex(i => i.id === parseInt(this.activeAppointmentId));
            this.appointmentObjs[appointmentIndex] = appointmentObj;
            resolve();
          }
        }
      }).then(() => {
        this.closeModal();
      });
    },
    async deleteAppointment(id) {
      return new Promise((resolve, reject) => {
        let transaction = this.database.transaction('appointments', 'readwrite')
          .objectStore('appointments');

        transaction.oncomplete = e => {
          resolve();
        };

        transaction.delete(id);

        let appointmentIndex = this.appointmentObjs.findIndex(i => i.id === parseInt(this.activeAppointmentId));
        this.appointmentObjs.splice(appointmentIndex, 1);

      });      
    },
    getServiceCategoryOpt(e) {
      this.serviceCategoryOpt = e.target.options[e.target.options.selectedIndex].text;
      this.activeServiceTypes = [];

      let activeServiceTypes = this.service_types.filter(
        service_type  => service_type.service_category_id === parseInt(e.target.value)
      );

      this.activeServiceTypes.push(activeServiceTypes);
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

      let appointmentObj = this.appointmentObjs.find(i => id === i.id);

      let activeServiceTypes = this.service_types.filter(
        service_type  => service_type.service_category_id === parseInt(appointmentObj.service_type.service_category.id)
      );

      this.activeServiceTypes.push(activeServiceTypes);

      this.activeAppointmentId = id
      this.service_category_id = appointmentObj.service_type.service_category.id;
      this.service_type_id = appointmentObj.service_type.id;
      this.branch_id = appointmentObj.branch.id;      
      this.appointment_date = appointmentObj.appointment_date;    
      this.serviceCategoryOpt = appointmentObj.service_type.service_category.category;    
      this.serviceTypeOpt = appointmentObj.service_type.type;    
      this.branchOpt = appointmentObj.branch.name;    
   
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
      this.activeServiceTypes = [];

      document.getElementById('updateAppointment').classList.add('hidden');
      document.getElementById('addAppointment').classList.remove('hidden');

      this.openModal();
    },
    async fetchAndSaveResourcesLocally() {
      return new Promise((resolve, reject) => {
        axios.get('http://127.0.0.1:8000/api/appointments/resources')
          .then(res => {
            console.log(res.data.service_types);
            this.databaseTransaction(db, 'serviceTypes', res.data.service_types);
            this.databaseTransaction(db, 'branches', res.data.branches);
            this.databaseTransaction(db, 'serviceCategories', res.data.service_categories);
          });
      });
    },
    async databaseTransaction(db, table, data){
      await db[table].bulkPut(data).then(function(lastKey) {
        console.log('success uploading data');
      }).catch((e) => {
          console.error ("Error uploading data");
      });
    },
    async syncUyserData() {
    //   await axios.get('http://127.0.0.1:8000/api/service-categories', {
    //     headers: {
    //       Authorization: 'Bearer ' + localStorage.getItem('token')
    //     }
    //   })
    //   .then((response) => {
    //       console.log(response);
    //   });
    },
  },
}
</script>