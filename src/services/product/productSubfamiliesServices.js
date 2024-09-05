import { apiTest } from "@/apis/test";

export const loadProductSubfamilies = async () => {
    return await apiTest.get('/subfamilias');
};

export const findProductSubfamiliesByFamilyId = async (id) => {
    return await apiTest.get(`/subfamilias/familia/${id}`);
};

export const findProductSubfamiliesByName = async (name) => {
    return await apiTest.get(`/subfamilias/nombre/${name}`);
};

export const createProductSubfamily = async (productSubfamily) => {
    return await apiTest.post('/subfamilias', productSubfamily);
};

export const updateProductSubfamily = async (productSubfamily) => {
    return await apiTest.patch(`/subfamilias`, productSubfamily);
};

export const deleteProductSubfamily = async (productSubfamily) => {
    return await apiTest.delete(`/subfamilias`, productSubfamily);
};