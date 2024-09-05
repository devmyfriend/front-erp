import { apiTest } from "@/apis/test";

export const loadProductFamilies = async () => {
    return await apiTest.get('/familias');
};

export const findProductFamiliesByName = async (name) => {
    return await apiTest.get(`/familias/nombre/${name}`);
};

export const createProductFamily = async (productFamily) => {
    return await apiTest.post('/familias', productFamily);
};

export const updateProductFamily = async (productFamily) => {
    return await apiTest.patch(`/familias`, productFamily);
};

export const deleteProductFamily = async (productFamily) => {
    return await apiTest.delete(`/familias`, productFamily);
};