import baseUrl from "../Api/baseURL";

const GetData = async (url, params) => {
  const response = await baseUrl.get(url, params);
  return response.data;
};

export default GetData;
