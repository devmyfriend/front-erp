import { apiTest } from "@/apis/test";

export const loadProductFamilies = async () => {
    return await apiTest.get('/familias');
};

export const findProductFamiliesByName = async (name) => {
    return await apiTest.get(`/familias/nombre/${name}`);
};

export const createProductFamily = async (productFamilyPayload) => {
    return await apiTest.post('/familias', productFamilyPayload);
};

export const updateProductFamily = async (productFamilyPayload) => {
    return await apiTest.patch(`/familias`, productFamilyPayload);
};

export const deleteProductFamily = async (productFamilyPayload) => {
    return await apiTest.delete(`/familias`, {data: productFamilyPayload});
};