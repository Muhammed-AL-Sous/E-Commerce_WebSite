import baseUrl from "../Api/baseURL";

const UpdateData = async (url, params) => {
  const response = await baseUrl.put(url, params);
  return response.data;
};

export default UpdateData;
