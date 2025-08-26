import GetData from "../../Hooks/GetData";
import { InsertDataWithImage } from "../../Hooks/InsertData";
import { get_products, get_error, create_product } from "../Type";

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
    dispatch({
      type: get_error,
      payload: error.response?.data?.message || "حدث خطأ أثناء إضافة المنتج",
    });

    // فشل
    return {
      success: false,
      status: error.response?.status || 500,
      data: error.response?.data || {},
      message: error.response?.data?.message || "حدث خطأ أثناء إضافة المنتج",
    };
  }
};
