import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchPurchases = () => fetchData("purchases");
export const updatePurchases = (id, data) => updateData("purchases", id, data);
export const deletePurchases = (id) => deleteData("purchases", id);
export const addPurchase = (data) => addData("purchases", data);