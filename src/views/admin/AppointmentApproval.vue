<template>
    <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <main>
            <div class="px-4 pt-6 mb-6">
                <div class="p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <!-- Card header -->
                    <div class="w-full mb-1">
                        <div class="flex items-center justify-between pb-4">
                            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Appointment Request</h5>
                        </div>
                        <div class="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                            <div class="flex items-center mb-4 sm:mb-0">
                                <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" name="email" id="mobile-search" class="bg-gray-50 border xs:mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search">
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <!-- Table -->
                    <div class="flex flex-col mt-6">
                        <div class="overflow-x-auto rounded-lg">
                            <div class="inline-block min-w-full align-middle">
                                <div class="overflow-hidden shadow sm:rounded-lg">
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
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                            <!-- Pagination -->
                            <div class="flex items-center mb-4 sm:mb-0">
                                <span class="text-sm font-normal text-gray-500 dark:text-gray-400 flex items-center mb-4 sm:mb-0">
                                Showing&nbsp;<span class="font-semibold text-gray-900 dark:text-white">1-10&nbsp;</span>of&nbsp;<span class="font-semibold text-gray-900 dark:text-white">{{ appointmentObjs.totalRecords }}</span>
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
                    </div>
                </div>
            </div>
        </main>

    </div>
</template>

<script>
import axios from 'axios';
import { db } from '../../db';
import Dexie from 'dexie';
import { Modal, initDropdowns, initCollapses, initDismisses } from 'flowbite';

export default {
  "name": "AppointmentApproval",
  data() {
    return {
      appointmentObjs: [],
      moment:this.$moment,
      pageNumber: null,
      pages: null
    }
  },
  async created() {
    await this.getAppointment();

    // this.syncAppointmentData(false);
  },
  mounted() {    
    initDismisses();
    initCollapses();
    initDropdowns();

    window.addEventListener('offline', () => {
    //   this.isOffline = true;
    });

    window.addEventListener('online', async () => {
    // sync up a user's data with an external api
    //   this.syncAppointmentData(this.isOffline);
    });
  },
  methods: {
    async tableData(pageNumber=1) {
      this.pageNumber = pageNumber;
      let newOffset = pageNumber === 1 ? 0 : (pageNumber - 1) * 10;

      let  appointmentObj = db.appointmentCatalog;

      let data = new Dexie.Promise(function (resolve, reject) {
        return appointmentObj.reverse()
          .offset(newOffset)
          .limit(10)
          .toArray()
          .then(function(e) {
            let filteredAppointment = e.filter(appointmentCat => appointmentCat.approval_status !== null)
            resolve(filteredAppointment);
        }).catch((e) => reject(e));        
      });

      let numberOfRecords = new Dexie.Promise((resolve, reject) => {
          resolve(appointmentObj.where('approval_status').anyOf([1, 0]).count());
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
      this.appointmentObjs = await this.tableData(this.pageNumber);

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
      this.appointmentObjs = await this.tableData(this.pageNumber);

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
        if (!this.$store.state.isOffline) {
            let res = await axios.get('appointments');

            // clear appointments table (objectStore)
            db.appointmentCatalog.clear();
            await this.$store.dispatch('databaseTransaction', { table: 'appointmentCatalog', res: res.data.appointments })
        }

        console.log(this.tableData())
        this.appointmentObjs = await this.tableData();
        this.pages = this.appointmentObjs.pages;

      } catch (e) {
        console.error("Error uploading data", e);
      }
    },

    openModal(id) {
      this.currAppointmentId = id;
      const $targetEl = document.getElementById('rejectAppointmentModal');
      const modal = new Modal($targetEl);
      modal.show();
      document.querySelectorAll('*[modal-backdrop]').forEach(backdrop => backdrop.classList.remove('hidden'));
    },

    closeModal() {
      const $targetEl = document.getElementById('rejectAppointmentModal');
      const modal = new Modal($targetEl);
      modal.hide();
      document.querySelectorAll('*[modal-backdrop]').forEach(backdrop => backdrop.className = 'hidden');
    },
  },
}
</script>