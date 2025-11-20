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