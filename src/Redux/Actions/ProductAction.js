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
