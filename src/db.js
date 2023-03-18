import Dexie from 'dexie';

export const db = new Dexie("appointmentDb");
db.version(1).stores({
    appointments: '++id,user_id,service_type_id,approval_status,isNew,isUpdated',
    serviceTypes: 'id,type,service_category_id',
    serviceCategories: 'id,type',
    branches: 'id,type',
    deleteAppointments: 'id'
});