<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
  <div class="">

    <!-- <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div> -->
    <!--  -->

    <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">

      <!-- <div class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90 hidden" id="sidebarBackdrop"></div> -->

      <div id="main-content" class="relative w-full h-full lg:p-6 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <main>
          <div class="p-8 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
            <div class="w-full mb-1">
                <div class="flex items-center justify-between pb-4">
                  <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Book an Appointment</h5>
                </div>
                <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                  <div class="flex items-center mb-4 sm:mb-0">
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                      </div>
                      
                      <input 
                        type="text" 
                        id="mobile-search" 
                        class="bg-gray-50 border xs:mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Search"
                        v-model="search"
                      >
                    </div>
                  </div>
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
          </div>
          
          <div class="flex flex-col">
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full align-middle">
                  <div class="overflow-hidden shadow">                    
                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600" id="appointmentTable">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                  Service Category
                              </th>
                              <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                  Service Type
                              </th>
                              <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                  Branch
                              </th>
                              <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                  Date & Time
                              </th>
                              <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                  Approval Status
                              </th>
                              <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                  Action
                              </th>
                          </tr>
                      </thead>
                      <tbody  class="">
                          <tr 
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                            v-for="appointmentObj in appointmentObjs.data"
                            :key="appointmentObj.id"
                          >
                              <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {{ appointmentObj.service_type.service_category.category}}
                              </td>
                              <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {{ appointmentObj.service_type.type}}
                              </td>
                              <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                {{ appointmentObj.branch.name}}
                              </td>
                              <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  {{ moment(appointmentObj.appointment_date).format('MMMM Do YYYY, h:mm A') }}
                              </td>
                              <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                <span v-if="!appointmentObj.approval_status" class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Waiting for Approval</span>
                                <span v-else-if="appointmentObj.approval_status == 1" class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Approved</span>
                                <span v-else class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Rejected</span>
                              </td>
                              <td class="p-4 space-x-2 whitespace-nowrap">
                                <button 
                                  v-if="appointmentObj.approval_status === null"
                                  type="button" 
                                  @click="editAppointment(appointmentObj.id)" 
                                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                    </path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                                  </svg>Edit
                                </button>
                                <span v-else class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">No further action</span>
                                <button
                                  v-if="appointmentObj.approval_status === null"
                                  type="button" 
                                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                                  @click="deleteAppointment(appointmentObj.id)" 
                                  >
                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                    </svg>Delete
                                </button>
                              </td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>
          </div>

          <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
              <!-- Pagination -->
              <div class="flex items-center mb-4 sm:mb-0">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400 flex items-center mb-4 sm:mb-0">
                  Showing&nbsp;<span class="font-semibold text-gray-900 dark:text-white">1-10&nbsp;</span>&nbsp;of&nbsp;<span class="font-semibold text-gray-900 dark:text-white">{{ appointmentObjs.totalRecords }}</span>
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <ul class="inline-flex items-center -space-x-px" id="paginate-parent">
                  <li>
                      <button 
                        type="button" 
                        class="paginate-navigators block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        @click="prevRecord(pageNumber-1)" 
                      >
                          <span class="sr-only">Previous</span>
                          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      </button>
                  </li>
                  <li v-for="(item, index) in new Array(appointmentObjs.pages)" :key="index">
                      <button 
                        type="button" 
                        :class="[index === 0 ? 'active text-white bg-blue-700 ' : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white text-gray-500 bg-white '] + 'paginate-button px-3 py-2 leading-tight border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'"
                        :data-index="index+1"
                        :id="'navigateButton-'+(index+1)" 
                        @click="navigateTable(index+1)" 
                      >{{ index + 1 }}</button>

                  <!-- text-white bg-blue-700 -->

                  </li>
                  <li>
                      <button 
                        type="button" 
                        class="paginate-navigators block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        @click="nextRecord(pageNumber + 1)"
                      >
                          <span class="sr-only">Next</span>
                          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                          </svg>
                      </button>
                  </li>
                </ul>
              </div>
          </div>
        </main>      
      </div>
    </div>

  </div>


</template>

<script>
import { Modal, initDropdowns } from 'flowbite';
import axios from 'axios';
import { db } from '../db';
import VSPagination from '@/components/VSPagination.vue';
import { getTableData } from '@/helper';

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
      pages: null,
      search: '',
    }
  },
  async created() {
    await this.getAppointment();
    
    await this.fetchAndSaveResourcesLocally();
    this.service_categories = await this.getServiceCategories();
    this.service_types = await this.getServiceTypes();
    this.branches = await this.getBranches();

    // this.syncAppointmentData(false);

  },
  mounted() {
    
    initDropdowns();

    window.addEventListener('offline', () => {
      this.isOffline = true;
    });

    window.addEventListener('online', async () => {
      this.isOffline = false;

      // sync up a user's data with an external api
      this.syncAppointmentData(this.isOffline);
    });
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

    async tableData(pageNumber=1, search) {
      this.pageNumber = pageNumber;
      let filterRecords = await db.appointments
        .reverse()
        .filter(function (value) {
          if (search !== undefined && search !== '') {
            return value.isDeleted === undefined && (value.service_type.type.toLowerCase().includes(search.toLowerCase()) 
              || value.service_type.service_category.category.toLowerCase().includes(search.toLowerCase())
              || value.branch.name.toLowerCase().includes(search.toLowerCase())
              || value.user.FullName.toLowerCase().includes(search.toLowerCase())
              || value.appointment_date.includes(search))
          } else {
            return value.isDeleted === undefined
          }
        });

      return await getTableData(filterRecords, pageNumber);
    },
    async navigateTable(pageNumber) {
      this.pageNumber = pageNumber >= 1 && pageNumber <= this.pages ? pageNumber : pageNumber - 1;
      console.log(this.pageNumber);
      this.appointmentObjs = await this.tableData(this.pageNumber, this.search);

      
      let prevButton = null;
      const wrapper = document.getElementById("paginate-parent");
      var btns = wrapper.getElementsByClassName("paginate-button");

      for (var i = 0; i < btns.length; i++) {
        if(btns[i].classList.contains('active')) {
          prevButton = btns[i];
          break;
        }
      }
      this.setNavigationStatus(prevButton)
    },

    async prevRecord(pageNumber) {
      this.pageNumber = pageNumber >= 1 ? pageNumber : pageNumber + 1;
      console.log(this.pageNumber);
      this.appointmentObjs = await this.tableData(this.pageNumber, this.search);

      let prevButton = null;
      const wrapper = document.getElementById("paginate-parent");
      var btns = wrapper.getElementsByClassName("paginate-button");

      for (var i = 0; i < btns.length; i++) {
        if(btns[i].classList.contains('active')) {
          prevButton = btns[i].dataset.index > 1 ? btns[i] : null;
          break;
        }
      }

      this.setNavigationStatus(prevButton)
    },

    async nextRecord(pageNumber) {
      this.pageNumber = pageNumber <= this.pages ? pageNumber : pageNumber - 1;
      console.log(this.pageNumber);
      this.appointmentObjs = await this.tableData(this.pageNumber, this.search);

      let prevButton = null;
      const wrapper = document.getElementById("paginate-parent");
      var btns = wrapper.getElementsByClassName("paginate-button");

      for (var i = 0; i < btns.length; i++) {
        if(btns[i].classList.contains('active')) {
          prevButton = btns[i].dataset.index < this.pages ? btns[i] : null;
          break;
        }
      }
      this.setNavigationStatus(prevButton)
    },

    setNavigationStatus(prevButton) {
      let currentButton = document.getElementById(`navigateButton-${this.pageNumber}`);
      currentButton.classList.remove('active', 'text-gray-500', 'bg-white', 'hover:bg-gray-100', 'hover:text-gray-700', 'dark:hover:bg-gray-700', 'dark:hover:text-white');
      currentButton.classList.add('active', 'text-white', 'bg-blue-700');

      if(prevButton !== null) {
        prevButton.classList.remove('active', 'text-white', 'bg-blue-700');  // Remove .active CSS Class
        prevButton.classList.add('text-gray-500', 'bg-white', 'hover:bg-gray-100', 'hover:text-gray-700', 'dark:hover:bg-gray-700', 'dark:hover:text-white');  // Remove .active CSS Class
      }
    },
    
    async getAppointment() {
      try {
        if (!this.isOffline) {
          this.getAppointmentDataFromServer(true);
        } else {
          console.log('Inside here ................')
          this.appointmentObjs = await this.tableData();
          this.pages = this.appointmentObjs.pages;
        }
      } catch (e) {
        console.error("Error uploading data", e);
      }
    },

    async addAppointment() {

      return new Promise((resolve, reject) => {

        // Get last Object ID and increment
        // let lastObjId = this.appointmentObjs.length > 0 
        //   ? this.appointmentObjs[0].id + 1 : 1;

        let newAppointmentObj = this.appointmentData();
        if(!this.isOffline) {
          console.log('Saving online...');
          axios.post('appointments', newAppointmentObj)
            .then((res) => {
              if (res.data.status === 'success') {
                this.$swal.fire({
                  title: 'Success!',
                  text: 'Appointment request sent',
                  icon: 'success',
                  showConfirmButton:false,
                  timer:1000
                }).then(async () => {
                  await this.getAppointmentDataFromServer(true);
                  resolve();
                });
              }
            }).catch((e) => reject("Error uploading data"));  

          } else {
            console.log('Saving to local Database...');
            newAppointmentObj.isNew = 1;
            db.appointments.add(newAppointmentObj)
              .then(() => {
                // this.appointmentObjs.data.unshift(newAppointmentObj);
                this.$swal.fire({
                  title: 'Success!',
                  text: 'Appointment request sent',
                  icon: 'success',
                  showConfirmButton:false,
                  timer:1000
                }).then(async () => {
                console.log('Saved...');

                  this.appointmentObjs = await this.tableData();
                  this.pages = this.appointmentObjs.pages;
                  resolve();
                });
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
            .then(async (res) => {
              await this.getAppointmentDataFromServer(true);
              resolve()
            })
            .catch((e) => reject(e));  

        } else {

          appointmentObj.isUpdated = this.isNew ? 0 : 1,
          db.appointments.update(this.activeAppointmentId, appointmentObj)
            .then(async (updated) => {
              this.appointmentObjs = await this.tableData();
              this.pages = this.appointmentObjs.pages;
              resolve();
            })
            .catch(e => reject(e));
        }
 
      }).then(async (appointmentObj) => {
        await this.getAppointmentDataFromServer(true);
        // let appointmentIndex = this.appointmentObjs.data.findIndex(i => i.id === this.activeAppointmentId);
        // this.appointmentObjs.data[appointmentIndex] = appointmentObj;
        this.closeModal();
      }).catch(e => console.error("Nothing was updated", e));
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
                      this.appointmentObjs = await this.tableData();
                      this.pages = this.appointmentObjs.pages;
                    });
                  });
              } else {
                db.appointments.delete(id);
                this.appointmentObjs = await this.tableData();
                this.pages = this.appointmentObjs.pages;
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
        service_type  => service_type.service_category_id == e.target.value
      );  
      console.log(e.target.value, this.service_types, this.activeServiceTypes);
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
        if(newAppointment.length > 0) {
          const res = await axios.post(url, newAppointment);
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
        this.appointmentObjs = await this.tableData();
        this.pages = this.appointmentObjs.pages;
      }
      // return res.data.appointments;
    },
  },
  watch: {
    async search(searchInput) {
      this.appointmentObjs = await this.tableData(1, searchInput);
      this.pages = this.appointmentObjs.pages;
    }
  }
}
</script>