import base_url from "./baseurl";
import commonApi from "./commonApi";

export const createPaymentApi = async (data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const res = await commonApi(`${base_url}/api/payu/create-payment`, "POST", headers, data);
    return res; // ✅ returns full response object containing HTML form
  } catch (err) {
    throw err;
  }
};
