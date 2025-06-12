import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchSales = () => fetchData("sale");
export const updateSale = (id, data) => updateData("sale", id, data);
export const deleteSale = (id) => deleteData("sale", id);
export const addSale = (data) => addData("sale", data);