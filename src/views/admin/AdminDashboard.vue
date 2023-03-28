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
                                <input 
                                  type="text" 
                                  id="mobile-search" 
                                  class="bg-gray-50 border xs:mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5    dark:bg-gray-700   dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                  placeholder="Search"
                                  v-model="search"
                                >
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
                                                    Customer Name
                                                </th>
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
                                                    {{ appointmentObj.user.FullName}}
                                                </td>
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
                                                <td class="p-4 space-x-2 whitespace-nowrap">
                                                    
                                                    <button 
                                                      type="button" 
                                                      @click="approveAppointment(appointmentObj.id)" 
                                                      class="inline-flex items-center px-3 py-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                    >
                                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                        </path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                                                    </svg>Approve
                                                    </button>
                                                    <button
                                                      data-modal-target="rejectAppointmentModal"
                                                      type="button" 
                                                      class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                                                      @click="openModal(appointmentObj.id)"
                                                    >
                                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                                        </svg>Reject
                                                      </button>
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

        <!-- Main modal -->
        <div id="rejectAppointmentModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
          <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button 
                  type="button" @click="closeModal" 
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"  
                  data-modal-hide="rejectAppointmentModal"
                  data-modal-target="rejectAppointmentModal"
                >
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Rejection Note</h3>
                    <form class="space-y-6" action="#">
                        <div>
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                          <textarea i
                            d="message" 
                            rows="4" 
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Write a note..."
                            required
                            v-model="note"
                          ></textarea>
                          <p id="noteCheck" class="mt-2 hidden text-xs text-red-600 dark:text-red-500">Note can't be empty</p>
                        </div>
                        <div>
                          <label for="suggestion_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suggestion Date</label>
                          <input 
                            type="datetime-local" 
                            id="suggestion_date" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                            v-model="suggestionDate"
                          >
                        </div>

                        <button 
                          type="button"
                          id="addAppointment"
                          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          @click="rejectAppointment()"
                        >Reject Appointment</button>
                    </form>
                </div>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { db } from '../../db';
import Dexie from 'dexie';
import { Modal, initDropdowns, initCollapses, initDismisses, Collapse } from 'flowbite';
import { getTableData } from '@/helper';

export default {
  "name": "AdminDashboard",
  data() {
    return {
      note:'',
      suggestionDate: '',
      currAppointmentId: '',
      appointmentObjs: [],
      lastObjId: '',
      isOffline: !navigator.onLine,
      isNew: null,
      moment:this.$moment,
      pageNumber: null,
      pages: null,
      collapse: '',
      search: '',
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

    window.addEventListener('online', async () => {        
      this.syncAppointmentData(this.$store.state.isOffline);
    });
  },
  methods: {
    async tableData(pageNumber=1, search) {
      this.pageNumber = pageNumber;

      // Filter all records
      let filterRecords = await db.appointmentCatalog
        .reverse()
        .filter(function (value) {
          if (search !== undefined && search !== '') {
            return value.approval_status === null && (value.service_type.type.toLowerCase().includes(search.toLowerCase()) 
              || value.service_type.service_category.category.toLowerCase().includes(search.toLowerCase())
              || value.branch.name.toLowerCase().includes(search.toLowerCase())
              || value.user.FullName.toLowerCase().includes(search.toLowerCase())
              || value.appointment_date.includes(search))
          } else {
            return value.approval_status === null;
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
          console.log('it affect me too...')
          this.getAppointmentDataFromServer(true);
        } else {
          console.log()
          this.appointmentObjs = await this.tableData();
          this.pages = this.appointmentObjs.pages;
        }
      } catch (e) {
        console.error("Error uploading data", e);
      }
    },

    async appointmentApproval(url, data, message, id) {
      return new Promise((resolve, reject) => {
        this.$swal.fire({
            type: 'warning',
            title: "Are You Sure!",
            html: `Did you want to proceed to ${message} this appointment request ?`,
            showCancelButton: true,
            confirmButtonText: `Yes, ${message}`,
            cancelButtonColor: '#d33',
            reverseButtons: true
        }).then(async (result) => {
          if(result.value == true){
            if(!this.isOffline) {
              await axios.patch(url, data)
                .then(async (res) => {
                  await this.getAppointmentDataFromServer(true);
                  resolve(res.data);
                });
          
            } else {
              console.log(Dexie.deepClone(data));
              await db.appointmentCatalog.update(id, Dexie.deepClone(data))
                .then(async (updated) => {
                  this.appointmentObjs = await this.tableData();
                  this.pages = this.appointmentObjs.pages;
                  resolve({status: 'success'});
                });
            }
          }
        });
      }).then((e) => {
        if (e.status === 'success') {
          this.$swal.fire({
            title: 'Success!',
            text: 'Appointment approved',
            icon: 'success',
            showConfirmButton:false,
            timer:1000
          });
        }
      }).catch((e) => console.error('Nothing was approved or rejected', e))
    },

    async approveAppointment(id) {
      try {
        let appointmentObj = this.appointmentObjs.data.find(i => id == i.id);
        appointmentObj.approval_status = 1;
        appointmentObj.isUpdated = 1;

        await this.appointmentApproval(
          `appointments/${id}/approve`, appointmentObj, 'approve', id
        );
      } catch(e) {
        console.error("Nothing was approved", e);
      }
    },

    async rejectAppointment() {
      if (this.note != '') {
        document.getElementById('noteCheck').classList.add('hidden');

        try {
          let appointmentObj = this.appointmentObjs.data.find(i => this.currAppointmentId == i.id);
          appointmentObj.approval_status = 0;
          appointmentObj.note = this.note;
          appointmentObj.suggestion_date = this.suggestionDate;
          appointmentObj.isUpdated = 1;
      
          await this.appointmentApproval(
            `appointments/${this.currAppointmentId}/reject`, appointmentObj, 'reject', this.currAppointmentId
          );

          this.closeModal();
        } catch(e) {
          console.error("Nothing was approved", e);
        } 

      } else {
        document.getElementById('noteCheck').classList.remove('hidden');
      }
    },

    async databaseTransaction(db, table, data){
      await db[table].bulkPut(data).then(function() {
        // console.log('success uploading resources');
      }).catch((e) => {
          console.error ("Error uploading data", e);
      });
    },

    async syncAppointmentData(connection) {
      if (!connection) {
        try {
            const isUpdatedStatus = await this.postToServer('appointments/process-approval', 'isUpdated', 1);
            console.log(isUpdatedStatus);

            if(isUpdatedStatus) {
              // Fetch latest record and update indexedb
              await this.getAppointmentDataFromServer(true);
            }          
        } catch(e) {
          console.error(e);
        }
      }
    },

    async postToServer(url, index, value) {
      return await db.appointmentCatalog.where(index).equals(value).toArray().then(async newAppointment => {
        if(newAppointment.length > 0) {
          const res = await axios.patch(url, newAppointment);
          console.log(res);
          if (res.data.status == "success") {
            return true;
          }
        }
        return false;
      });
    },

    async getAppointmentDataFromServer(reloadTable=false) {
      let res = await axios.get('appointments');

      // clear appointments table (objectStore)
      db.appointmentCatalog.clear();

      await this.databaseTransaction(db, 'appointmentCatalog', res.data.appointments);
      
      if (reloadTable) {
        this.appointmentObjs = await this.tableData();
        this.pages = this.appointmentObjs.pages;
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
  watch: {
    async search(searchInput) {
      this.appointmentObjs = await this.tableData(1, searchInput);
      this.pages = this.appointmentObjs.pages;
    }
  }
}
</script>