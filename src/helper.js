import { db } from './db';
import axios from 'axios';
import Dexie from 'dexie';

export const postToServer = async (table, url, index, value) => {
    return await db[table].where(index).equals(value).toArray().then(async data => {
      if(data.length > 0) {
        const res = await axios.post(url, data);
        if (res.data.status == "success") {
          return true;
        }
      }
      return false;
    });
}


export const databaseTransaction = async (table, data) => {
    await db[table].bulkPut(data).then(function() {
        // console.log('success uploading resources');
    }).catch((e) => {
        console.error ("Error saving data", e);
    });
}

export const deleteOne = async ({ url, table, tableId, data, message, isOffline }) => {
    try {
      this.$swal.fire({
          type: 'warning',
          title: "Are You Sure!",
          html: `Did you want to proceed to delete this ${message} ?`,
          showCancelButton: true,
          confirmButtonText: `Yes, delete`,
          cancelButtonColor: '#d33',
          reverseButtons: true
      }).then(async (result) => {
        if(result.value == true){
          if(!isOffline) {
            await axios.delete(url);
            return true;
          } else {
            let dataObj = data;
            
            if (!dataObj.isNew) {
              await db.serviceTypes.update(tableId, {isDeleted: 1})
                .then(() => {
                    return true;
                });
            } else {
              db[table].delete(tableId);
              return true
            }
          }
        }
      }); 
    } catch(e) {
      console.error("Nothing was deleted", e); 
    }
}

export const createOne = async ({ url, table, data, isOffline })  => {
    return new Promise((resolve, reject) => {
        if(!isOffline) {
            axios.post(url, data)
            .then((res) => {
                resolve(res.data)
            }).catch(() => reject("Error uploading data"));  

        } else {
            db[table].add(data)
                .then((e) => {
                  console.log(e);
                    resolve({status: 'success', message: 'Data created'});
                })
                .catch(() => {
                reject("Error saving data");
            });
        }
    });
}

export const updateOne = async ({ url, table, data, tableId, isOffline })  => {
    return new Promise((resolve, reject) => {

      if(!isOffline) {

        axios.patch(url, data)
          .then(async (res) => {
            resolve(res.data)
          })
          .catch((e) => reject(e));  

      } else {
        console.log(tableId, data);
        db[table].update(tableId, data)
            .then(async () => {
                resolve({status: 'success', message: 'Data updated'});
            })
            .catch(e => reject(e));
      }
    });
}

export const getTableData = async (tableName, pageNumber) => {
    let newOffset = pageNumber === 1 ? 0 : (pageNumber - 1) * 10;

    let table = db[tableName];

    let data = new Dexie.Promise(function (resolve, reject) {
    return table.reverse()
        .offset(newOffset)
        .limit(10)
        .toArray()
        .then(function(data) {
            resolve(data);
        }).catch((e) => reject(e));        
    });

    let numberOfRecords = new Dexie.Promise((resolve) => {
        resolve(table.count());
    });

    let tableRecords = await  Promise.all([numberOfRecords, data]);

    return {
        totalRecords: tableRecords[0],
        pages: Math.ceil(tableRecords[0]/10),
        data: tableRecords[1],
        currentPageNumber: pageNumber
    };
}