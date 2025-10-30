import axios from "axios";
import base_url from "./baseurl";
import commonApi from "./commonApi";

// POST – Add new admission
export const addAdmissionApi = async (data) => {
    return await commonApi(`${base_url}/admission`, 'POST', '', data);
};

// GET – Get all admissions
export const getAllAdmissionsApi = async () => {
    return await commonApi(`${base_url}/admissions`, 'GET', '', '');
};

// GET – Get single admission by ID
export const getAdmissionByIdApi = async (id) => {
    return await commonApi(`${base_url}/admissions/${id}`, 'GET', '', '');
};

// PUT – Update admission by ID
export const updateAdmissionApi = async (id, data) => {
    return await commonApi(`${base_url}/admissions/${id}`, 'PUT', '', data);
};

// DELETE – Delete admission by ID
export const deleteAdmissionApi = async (id) => {
    return await commonApi(`${base_url}/admissions/${id}`, 'DELETE', '', '');
};
