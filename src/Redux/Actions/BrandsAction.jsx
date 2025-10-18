import GetData from "../../Hooks/GetData";
import { InsertDataWithImage } from "../../Hooks/InsertData";
import {
  get_Brands,
  create_Brand,
  get_specific_brand,
  get_error,
} from "../Type";

// Get All Brands
export const GetAllBrands = (limit) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/brands?limit=${limit}`);

    dispatch({
      type: get_Brands,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// // Get All Brands With Pagination
export const GetAllBrandsWithPage = (page) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/brands?limit=2&page=${page}`);

    dispatch({
      type: get_Brands,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get Specific Brand
export const GetSpecificBrand = (id) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/brands/${id}`);

    dispatch({
      type: get_specific_brand,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Create A New Brand With Image
export const CreateBrand = (formData) => async (dispatch) => {
  try {
    const response = await InsertDataWithImage(`/api/v1/brands`, formData);

    dispatch({
      type: create_Brand,
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
      payload: error.response?.data?.message || "حدث خطأ أثناء إضافة الماركة",
    });
    // فشل
    return {
      success: false,
      status: error.response?.status || 500,
      data: error.response?.data || {},
      message: error.response?.data?.message || "حدث خطأ أثناء إضافة الماركة",
    };
  }
};

// BrandsAction.js
export const ClearSpecificBrand = () => ({
  type: "CLEAR_SPECIFIC_BRAND",
});
