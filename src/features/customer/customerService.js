import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchCustomers = () => fetchData("customers");
export const updateCustomers = (id, data) => updateData("customers", id, data);
export const deleteCustomers = (id) => deleteData("customers", id);
export const addCustomer = (data) => addData("customers", data);