<template>
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
</template>

<script>
export default {
  "name": "Appointment",
  props: ['appointmentsObjs'],
  methods: {
    async paginateData(table, offset=0) {
      let  appointmentObj = db[table];

      let data = new Dexie.Promise(function (resolve, reject) {
        return appointmentObj.reverse()
          .offset(offset)
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
    }
  },
}
</script>