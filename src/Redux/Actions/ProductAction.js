// Hooks
import GetData from "../../Hooks/GetData";
import DeleteData from "../../Hooks/DeleteData";
import { InsertDataWithImage } from "../../Hooks/InsertData";
import UpdateData from "../../Hooks/UpdateData";

import {
  get_products,
  get_error,
  get_specific_product,
  get_similar_products,
  create_product,
  delete_product,
  update_product,
} from "../Type";

// Create A New Product With Image
export const CreateProduct = (formData) => async (dispatch) => {
  try {
    const response = await InsertDataWithImage(`/api/v1/products`, formData);

    dispatch({
      type: create_product,
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
    const backendErrors = error.response?.data?.errors;

    let errorMessage = "حدث خطأ أثناء إضافة المنتج"; // رسالة افتراضية

    if (Array.isArray(backendErrors) && backendErrors.length > 0) {
      // أول خطأ فقط مع اسم الحقل
      const firstError = backendErrors[0];
      errorMessage = `${firstError.param} : ${firstError.msg}`;
    } else if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }

    dispatch({
      type: get_error,
      payload: errorMessage,
    });

    return {
      success: false,
      status: error.response?.status || 500,
      data: backendErrors || {},
      message: errorMessage, // ← أول خطأ فقط
    };
  }
};

// Get All Products
export const GetAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/products?limit=${limit}`);

    dispatch({
      type: get_products,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get specific Product
export const GetSpecificProduct = (id) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/products/${id}`);

    dispatch({
      type: get_specific_product,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get Similar Products
export const GetSimilarProducts = (id) => async (dispatch) => {
  try {
    const response = await GetData(`/api/v1/products?category=${id}`);

    dispatch({
      type: get_similar_products,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Get All Products With Pagination
export const GetAllProductsWithPage = (page, limit) => async (dispatch) => {
  try {
    const response = await GetData(
      `/api/v1/products?limit=${limit}&page=${page}`
    );

    dispatch({
      type: get_products,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Delete A Product
export const DeleteProduct = (id) => async (dispatch) => {
  try {
    const response = await DeleteData(`/api/v1/products/${id}`);

    dispatch({
      type: delete_product,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Update A Product
export const UpdateProduct =
  ({ id, formData }) =>
  async (dispatch) => {
    try {
      const response = await UpdateData(`/api/v1/products/${id}`, formData);

      dispatch({
        type: update_product,
        payload: response,
        loading: true,
      });

      return {
        success: true,
        status: response.status,
        data: response.data,
      };
    } catch (error) {
      const backendErrors = error.response?.data?.errors;

      let errorMessage = "حدث خطأ أثناء تعديل المنتج"; // تعديل الرسالة لتكون أدق

      if (Array.isArray(backendErrors) && backendErrors.length > 0) {
        const firstError = backendErrors[0];
        errorMessage = `${firstError.param} : ${firstError.msg}`;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      dispatch({
        type: get_error,
        payload: errorMessage,
      });

      return {
        success: false,
        status: error.response?.status || 500,
        data: backendErrors || {},
        message: errorMessage,
      };
    }
  };

// ProductAction.js
export const ClearSpecificProduct = () => ({
  type: "CLEAR_SPECIFIC_PRODUCT",
});


