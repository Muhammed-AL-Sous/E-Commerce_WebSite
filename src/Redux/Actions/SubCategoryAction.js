import GetData from "../../Hooks/GetData";
import { InsertData } from "../../Hooks/InsertData";
import { get_error, create_sub_category, get_sub_categories } from "../Type";

// Create A New Sub Category
export const CreateSubCategory = (data) => async (dispatch) => {
  try {
    const response = await InsertData(`/api/v1/subcategories`, data);

    dispatch({
      type: create_sub_category,
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

// Get Sub Categories Depend On Category Id
export const GetSubCategory = (id) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/categories/${id}/subcategories`);

    dispatch({
      type: get_sub_categories,
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
