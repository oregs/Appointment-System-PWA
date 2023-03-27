import Dexie from 'dexie';

export const db = new Dexie("appointmentDb");
db.version(3).stores({
    appointments: '++id,user_id,service_type_id,approval_status,isNew,isUpdated,isDeleted',
    serviceTypes: '++id,type,service_category_id,isNew,isUpdated',
    serviceCategories: '++id,type,isNew,isUpdated',
    branches: '++id,type,isNew,isUpdated',
    appointmentCatalog: '++id,user_id,service_type_id,approval_status,isNew,isUpdated'
});


// db.appointments.hook('deleting', function (primKey, obj, transaction) {
    // You may do additional database operations using given transaction object.
    // You may set this.onsuccess = callback when delete operation completes.
    // You may set this.onerror = callback if delete operation fails.
    // Any modification to obj is ignored.
    // Any return value is ignored.
    // throwing exception will make the db operation fail.
// });