import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchPurchases = () => fetchData("purchase");
export const updatePurchase = (id, data) => updateData("purchase", id, data);
export const deletePurchase = (id) => deleteData("purchase", id);
export const addPurchase = (data) => addData("purchase", data);