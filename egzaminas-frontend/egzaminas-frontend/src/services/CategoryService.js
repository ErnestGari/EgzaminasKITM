import API from "./API";


const CATEGORIES_API = '/categories';

export const listCategory = () => API.get(CATEGORIES_API);

export const createCategory = (category) => API.post(CATEGORIES_API, category);

export const getCategory = (categoryId) =>  API.get(`${CATEGORIES_API}/${categoryId}`);

export const updateCategory = (categoryId, category) => API.put(`${CATEGORIES_API}/${categoryId}`, category);

export const deleteCategory = (categoryId) => API.delete(`${CATEGORIES_API}/${categoryId}`);