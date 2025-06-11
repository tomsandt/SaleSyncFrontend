import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchDealers = () => fetchData("dealers");
export const updateDealers = (id, data) => updateData("dealers", id, data);
export const deleteDealers = (id) => deleteData("dealers", id);
export const addDealer = (data) => addData("dealers", data);