import axios from "axios";
import base_url from "./baseurl";
import commonApi from "./commonApi";


export const addAdmissionApi = async (data) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const res = await commonApi(`${base_url}/adadmission`, "POST", headers, data);
    return res; // ✅ no res.json()
  } catch (err) {
    throw err;
  }
};

export const getStudentsApi = async () => {
  return await commonApi(`${base_url}/getstudents`, "GET", {}, null);
}

export const getPaymentsApi = async (applicationNumber) => {
  return await commonApi(`${base_url}/payments/${applicationNumber}`, "GET", {});
}


export const getStudentByIdApi = async (id) => {
  return await commonApi(`${base_url}/getstudentsbyId/${id}`, "GET", {});
};

export const loginApi = async (data) => {
  const headers = { "Content-Type": "application/json" };
  return await commonApi(`${base_url}/login`, "POST", headers, data);
};