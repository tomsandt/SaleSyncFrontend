import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchCustomers = () => fetchData("customer");
export const updateCustomer = (id, data) => updateData("customer", id, data);
export const deleteCustomer = (id) => deleteData("customer", id);
export const addCustomer = (data) => addData("customer", data);