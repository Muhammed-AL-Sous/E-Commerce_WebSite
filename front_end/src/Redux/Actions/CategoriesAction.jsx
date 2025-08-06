import GetData from "../../Hooks/GetData";
import { InsertDataWithImage } from "../../Hooks/InsertData";
import { get_categories, get_error, create_category } from "../Type";

// Get All Categories
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

// // Get All Categories With Pagination
export const GetAllCategoriesWithPage = (page) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/categories?limit=2&page=${page}`);

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

// Create A New Category With Image
export const CreateCategory = (formData) => async (dispatch) => {
  try {
    const response = await InsertDataWithImage(`/api/v1/categories`, formData);

    dispatch({
      type: create_category,
      payload: response,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};
