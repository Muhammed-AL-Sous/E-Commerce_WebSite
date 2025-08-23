import baseUrl from "../Api/baseURL";

const InsertData = async (url, params) => {
  const response = await baseUrl.post(url, params);
  return response;
};

const InsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const response = await baseUrl.post(url, params, config);
  return response;
};

export { InsertData, InsertDataWithImage };
