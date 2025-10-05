import GetData from "../../Hooks/GetData";
import { InsertDataWithImage } from "../../Hooks/InsertData";
import {
  get_categories,
  get_specific_category,
  get_error,
  create_category,
} from "../Type";

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

// Get All Categories With Pagination
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

// Get specific Category
export const GetSpecificCategory = (id) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/categories/${id}`);

    dispatch({
      type: get_specific_category,
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

    // نجاح
    return {
      success: true,
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || "حدث خطأ أثناء إضافة التصنيف",
    });
    // فشل
    return {
      success: false,
      status: error.response?.status || 500,
      data: error.response?.data || {},
      message: error.response?.data?.message || "حدث خطأ أثناء إضافة التصنيف",
    };
  }
};

