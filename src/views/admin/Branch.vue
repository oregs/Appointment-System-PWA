<template>
    <div class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90 hidden" id="sidebarBackdrop"></div>

    <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <main>
            <div class="px-4 pt-6 mb-6">
                <div class="p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <!-- Card header -->
                    <div class="w-full mb-1">
                        <div class="flex items-center justify-between pb-4">
                            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Branch</h5>
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
                            <button 
                                @click="openBranch" 
                                data-modal-target="branchModal" 
                                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                                type="button"
                            >Create Branch</button>

                            <!-- Main modal -->
                            <div id="branchModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                            <div class="relative w-full h-full max-w-md md:h-auto">
                                <!-- Modal content -->
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button type="button" @click="closeModal" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="branchModal">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="px-6 py-6 lg:px-8">
                                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Branch</h3>
                                        <form class="space-y-6" action="#">
                                            <div>
                                                <label for="branch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch</label>
                                                <input 
                                                  type="text" id="branch" 
                                                  v-model="name" 
                                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                  placeholder="Enter branch" 
                                                  required
                                                >
                                                <p id="branchCheck" class="mt-2 hidden text-xs text-red-600 dark:text-red-500">Branch can't be empty</p>
                                            </div>
                                            <button 
                                            type="button"
                                            id="addBranch"
                                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            @click="addBranch()"
                                            >Submit Branch</button>
                                            <button 
                                            type="button" 
                                            id="updateBranch"
                                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            @click="updateBranch(activeAppointmentId)"
                                            >Update Branch</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            
                    <!-- Table -->
                    <div class="flex flex-col mt-6">
                        <div class="overflow-x-auto rounded-lg">
                            <div class="inline-block min-w-full align-middle">
                                <div class="overflow-hidden shadow sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600" id="branchTable">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    No.
                                                </th>
                                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    Branch
                                                </th>
                                                <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody  class="">
                                            <tr 
                                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" 
                                                v-for="(branchObj, index) in branchObjs.data"
                                                :key="branchObj.id"
                                            >
                                                <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    {{ index + 1 }}
                                                </td>
                                                <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    {{ branchObj.name}}
                                                </td>
                                                <td class="p-4 space-x-2 whitespace-nowrap">
                                                    
                                                    <button 
                                                        type="button" 
                                                        @click="editBranch(branchObj.id)" 
                                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                    >
                                                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                            </path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                                                        </svg>Edit
                                                    </button>
                                                    <button
                                                        type="button" 
                                                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                                                        @click="deleteBranch(branchObj.id)" 
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
                        <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                            <!-- Pagination -->
                            <div class="flex items-center mb-4 sm:mb-0">
                                <span class="text-sm font-normal text-gray-500 dark:text-gray-400 flex items-center mb-4 sm:mb-0">
                                Showing&nbsp;<span class="font-semibold text-gray-900 dark:text-white">1-10&nbsp;</span>of&nbsp;<span class="font-semibold text-gray-900 dark:text-white">{{ branchObjs.totalRecords }}</span>
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
                                <li v-for="(item, index) in new Array(branchObjs.pages)" :key="index">
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
import { Modal, initDropdowns, initCollapses, initDismisses } from 'flowbite'
import { getTableData, updateOne, createOne, postToServer } from '../../helper'

export default {
    name: 'Branch',
    data() {
    return {
      name:'',
      activeBranchId: '',
      branchObjs: [],
      isNew: null,
      pageNumber: null,
      pages: null,
      search: '',
    }
  },
  async created() {
    await this.getBranch();
    await this.$store.dispatch('fetchAndSaveResourcesLocally');
    // this.syncData(false);
  },
  mounted() {    
    initDismisses();
    initCollapses();
    initDropdowns();

    window.addEventListener('online', async () => {        
      this.syncData(this.$store.state.isOffline);
    });
  },
  methods: {
    async tableData(pageNumber=1, search) {
      this.pageNumber = pageNumber;
      let filterRecords = db.branches.filter(function (value) {
        if (search !== undefined && search !== '') {
          return value.name.toLowerCase().includes(search.toLowerCase());
        } else {
          return value;
        }
      });

      return await getTableData(filterRecords, pageNumber);
    },

    async navigateTable(pageNumber) {
      this.pageNumber = pageNumber >= 1 && pageNumber <= this.pages ? pageNumber : pageNumber - 1;
      console.log(this.pageNumber);
      this.branchObjs = await this.tableData(this.pageNumber, this.search);

      
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
      this.branchObjs = await this.tableData(this.pageNumber, this.search);

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
      this.branchObjs = await this.tableData(this.pageNumber, this.search);

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
    
    async getBranch() {
        try {
            await this.$store.dispatch('getBranches');
            this.branchObjs = await this.tableData();
            this.pages = this.branchObjs.pages;

        } catch (e) {
            console.error("Error uploading data", e);
        }
    },

    async addBranch() {
        if (this.name !== '') {
            document.getElementById('branchCheck').classList.add('hidden');
            let branchObj = { 
                name: this.name,
                isNew: 1,
            };

            await createOne({
                url: 'branch', 
                table: 'branches', 
                data: branchObj, 
                isOffline: this.$store.state.isOffline
            })
                .then((res) => {
                    if (res.status === 'success') {
                        this.$swal.fire({
                            title: 'Success!',
                            text: 'Branch created',
                            icon: 'success',
                            showConfirmButton:false,
                            timer:1000
                        }).then(async () => {
                        if (!this.$store.state.isOffline) {
                            await this.getDataFromServer(true);
                        } else {
                            this.branchObjs = await this.tableData();
                            this.pages = this.branchObjs.pages;
                        }
                        this.closeModal();
                        });
                    }
                })
                .catch(e => console.error("Nothing was updated", e));
        } else {
            document.getElementById('branchCheck').classList.remove('hidden');
        }
    },

    async updateBranch() {
      let branchObj = { 
            id: this.activeBranchId,
            name: this.name,
            isUpdated: this.isNew ? 0 : 1,
        };
        
        await updateOne({
            url: `branch/${this.activeBranchId}`, 
            table: 'branches', 
            data: branchObj, 
            tableId: this.activeBranchId, 
            isOffline: this.$store.state.isOffline
        })
        .then((res) => {
            if (res.status === 'success') {
            this.$swal.fire({
                title: 'Success!',
                text: 'Branch updated',
                icon: 'success',
                showConfirmButton:false,
                timer:1000
            }).then(async () => {
                if (!this.$store.state.isOffline) {
                await this.getDataFromServer(true);
                } else {
                this.branchObjs = await this.tableData();
                this.pages = this.branchObjs.pages;
                }
                this.closeModal();
            });
            }
        })
        .catch(e => console.error("Nothing was updated", e));
    },

    editBranch(id) {
      document.getElementById('addBranch').classList.add('hidden');
      document.getElementById('updateBranch').classList.remove('hidden');

      this.name = '';

      let branchObj = this.branchObjs.data.find(i => id === i.id);

      this.activeBranchId = id
      this.name = branchObj.name; 
      this.isNew = branchObj.isNew;    
   
      this.openModal();  
    },

    async deleteBranch(id) {
      try {
        this.$swal.fire({
            type: 'warning',
            title: "Are You Sure!",
            html: `Did you want to proceed to delete this branch?`,
            showCancelButton: true,
            confirmButtonText: `Yes, delete`,
            cancelButtonColor: '#d33',
            reverseButtons: true
        }).then(async (result) => {
          if(result.value == true){
            if (!this.$store.state.isOffline) {
              await axios.delete(`branch/${id}`)
                .then(async (res) => {
                  if (res.status === 204) {
                    this.$swal.fire({
                        title: 'Success',
                        text: 'Branch deleted!',
                        icon: 'success',
                    }).then(async () => {
                      // Fetch latest record and update indexedb
                      await this.getDataFromServer(true);
                    });
                  }
              }).catch((err) => {
                  this.$swal.fire({
                      title: err.response.data.status.charAt(0).toUpperCase() + err.response.data.status.slice(1),
                      text: err.response.data.message,
                      icon: 'error',
                  });
              })
            } else {
              this.$swal.fire({
                  title: 'Not Allowed!',
                  text: 'You are not allowed to delete when there is no network.',
                  icon: 'info',
              })
            }
          }
        }); 
      } catch(e) {
        console.error("Nothing was deleted", e); 
      }
    },

    async syncData(connection) {
      if (!connection) {
        try {
          setTimeout(async () => {
            const isNewStatus = await postToServer('branches', 'branch/store', 'isNew', 1);
            const isUpdatedStatus = await postToServer('branches', 'branch/update', 'isUpdated', 1);
            console.log(isNewStatus, isUpdatedStatus);

            if (isNewStatus || isUpdatedStatus) {
              // Fetch latest record and update indexedb
              await this.getDataFromServer(true);
            }          
          }, 1000);
        } catch(e) {
          console.error(e);
        }
      }
    },

    async getDataFromServer(reloadTable=false) {
      let res = await axios.get('branch');

      // clear branches table (objectStore)
      db.branches.clear();

      await this.$store.dispatch('databaseTransaction', { table: 'branches', res: res.data.branches });
      
      if (reloadTable) {
        this.branchObjs = await this.tableData();
        this.pages = this.branchObjs.pages;
      }
    },

    openBranch() {
      this.name = '';

      document.getElementById('updateBranch').classList.add('hidden');
      document.getElementById('addBranch').classList.remove('hidden');
      this.openModal();
    },

    openModal() {
      const $targetEl = document.getElementById('branchModal');
      const modal = new Modal($targetEl);
      modal.show();
    //   document.querySelectorAll('*[modal-backdrop]').forEach(backdrop => backdrop.classList.remove('hidden'));
    },

    closeModal() {
      const $targetEl = document.getElementById('branchModal');
      const modal = new Modal($targetEl);
      modal.hide();
      document.querySelectorAll('*[modal-backdrop]').forEach(backdrop => backdrop.className = 'hidden');
    },
  },
  watch: {
    async search(searchInput) {
      this.branchObjs = await this.tableData(1, searchInput);
      this.pages = this.branchObjs.pages;
    }
  }
}

</script>