import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchSales = () => fetchData("sales");
export const updateSales = (id, data) => updateData("sales", id, data);
export const deleteSales = (id) => deleteData("sales", id);
export const addSale = (data) => addData("sales", data);