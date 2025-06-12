import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchDealers = () => fetchData("dealer");
export const updateDealer = (id, data) => updateData("dealer", id, data);
export const deleteDealer = (id) => deleteData("dealer", id);
export const addDealer = (data) => addData("dealer", data);