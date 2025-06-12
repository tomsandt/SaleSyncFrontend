import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchArticles = () => fetchData("article");
export const updateArticle = (id, data) => updateData("article", id, data);
export const deleteArticle = (id) => deleteData("article", id);
export const addArticle = (data) => addData("article", data);