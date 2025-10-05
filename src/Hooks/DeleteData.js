import baseUrl from "../Api/baseURL";

const DeleteData = async (url, params) => {
  const response = await baseUrl.delete(url, params);
  return response.data;
};

export default DeleteData;
