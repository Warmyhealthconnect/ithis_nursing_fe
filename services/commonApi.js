// import axios from "axios"

// const commonApi=async(reqUrl,reqMethod,reqHeaders,reqBody)=>{
//     const config={
//         url:reqUrl,
//         method:reqMethod,
//         headers:reqHeaders?reqHeaders:{"Content-Type":"application/json"},
//         data:reqBody
//     }

//     return await axios(config).then(res=>res).catch(err=>{
//         console.log(err)
//         return err
//     })
// }

// export default commonApi

import axios from "axios";

const commonApi = async (url, method, headers, data) => {
  try {
    const config = {
      method,
      url,
      headers,
      data,
    };
    const response = await axios(config);
    return response; // ✅ return full response object
  } catch (error) {
    throw error;
  }
};

export default commonApi;
