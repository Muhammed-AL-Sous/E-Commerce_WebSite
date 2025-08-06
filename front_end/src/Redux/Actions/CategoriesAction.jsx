import GetData from "../../Hooks/GetData";
import { get_categories, get_error } from "../Type";

export const GetAllCategories = (limit) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/categories?limit=${limit}`);
    
    dispatch({
      type: get_categories,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};
