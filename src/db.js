import Dexie from 'dexie';

export const db = new Dexie("appointment");
db.version(1).stores({
    appointments: 'id,user_id,user,service_type_id,service_type,appointment_date,approval_status,suggestion_date',
    serviceTypes: 'id,type',
    serviceCategories: 'id,type',
    branches: 'id,type',
});