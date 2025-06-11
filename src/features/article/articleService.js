import {addData, deleteData, fetchData, updateData} from "@/services/apiService";

export const fetchArticles = () => fetchData("articles");
export const updateArticles = (id, data) => updateData("articles", id, data);
export const deleteArticles = (id) => deleteData("articles", id);
export const addArticle = (data) => addData("articles", data);