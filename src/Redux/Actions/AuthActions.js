import { InsertData } from "../../Hooks/InsertData";
import { Creat_New_User, get_error, Login_User } from "../Type";

// Create A New User
export const CreateNewUser = (data) => async (dispatch) => {
  try {
    const response = await InsertData(`/api/v1/auth/signup`, data);

    dispatch({
      type: Creat_New_User,
      payload: response.data,
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
      payload: error.response?.data || error.message,
    });
    // فشل
    return {
      success: false,
      status: error.response?.status || 500,
      data: error.response?.data || {},
      message: error.response?.data?.message || "حدث خطأ أثناء إضافة المستخدم",
    };
  }
};

// Login User
export const LoginUser = (data) => async (dispatch) => {
  try {
    const response = await InsertData("/api/v1/auth/login", data);

    dispatch({
      type: Login_User,
      payload: response.data,
    });

    return {
      success: true,
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    dispatch({
      type: get_error,
      payload: error?.response.data || error.message,
    });
    return {
      success: false,
      status: error.response?.status || 500,
      data: error.response?.data || {},
      message:
        error.response?.data?.message || "حدث خطأ أثناء تسجيل دخول المستخدم",
    };
  }
};
