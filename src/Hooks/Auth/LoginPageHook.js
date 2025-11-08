// React Hooks
import { useState } from "react";

// External Libraries
import notify from "../ToastNotifications";

// Redux
import { useDispatch } from "react-redux";
import { LoginUser } from "../../Redux/Actions/AuthActions";

// React Router Dom
import { useNavigate } from "react-router-dom";

const LoginPageHook = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginFormValidation = () => {
    if (!loginForm.email.trim()) {
      notify("الرجاء إدخال الايميل", "warn");
      return false;
    }
    return true;
  };

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    if (!loginFormValidation()) return;

    const responseUser = await dispatch(
      LoginUser({
        email: loginForm.email,
        password: loginForm.password,
      })
    );

    if (responseUser.success) {
      if (responseUser.data?.token) {
        localStorage.setItem("token", responseUser.data.token);
      }
      setLoginForm({
        email: "",
        password: "",
      });

      notify("تم تسجيل الدخول بنجاح ", "success");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      if (responseUser?.data?.errors && responseUser.data.errors.length > 0) {
        const errorMsg = responseUser.data.errors[0].msg;

        if (errorMsg === "Password required") {
          notify("الرجاء إدخال كلمة المرور", "warn");
        }
      } else if (
        responseUser?.data?.message === "Incorrect email or password"
      ) {
        notify("الإيميل أو كلمة المرور غير صحيحة", "error");
      } else {
        console.log(responseUser);
        notify("حدث خطأ غير متوقع أثناء تسجيل الدخول", "error");
      }
    }
  };

  return {
    loginForm,
    setLoginForm,
    handleSubmitClick,
  };
};

export default LoginPageHook;
