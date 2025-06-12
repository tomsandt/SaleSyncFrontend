import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchCustomers = () => fetchData("customer");
export const updateCustomers = (id, data) => updateData("customer", id, data);
export const deleteCustomers = (id) => deleteData("customer", id);
export const addCustomer = (data) => addData("customer", data);