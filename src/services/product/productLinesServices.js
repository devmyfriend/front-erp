import { apiTest } from "@/apis/test";

export const loadProductLines = async () => {
    return await apiTest.get('/lineas');
};

export const findProductLinesBySubfamilyId = async (id) => {
    return await apiTest.get(`/lineas/subfamilia/${id}`);
};

export const findProductLinesByName = async (name) => {
    return await apiTest.get(`/lineas/nombre/${name}`);
};

export const createProductLine = async (line) => {
    return await apiTest.post('/lineas', line);
};

export const updateProductLine = async (line) => {
    return await apiTest.patch(`/lineas`, line);
};

export const deleteProductLine = async (line) => {
    return await apiTest.delete(`/lineas`, line);
};