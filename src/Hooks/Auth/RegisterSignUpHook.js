// React Hooks
import { useState } from "react";

// External Libraries
import notify from "../ToastNotifications";

// Redux
import { useDispatch } from "react-redux";
import { CreateNewUser } from "../../Redux/Actions/AuthActions";

// React Router Dom
import { useNavigate } from "react-router-dom";

const RegisterSignUpHook = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    loading: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ التحقق من صحة الإدخال
  const formValidation = () => {
    if (!registerForm.name.trim()) {
      notify("الرجاء إدخال اسم المستخدم", "warn");
      return false;
    }

    if (!/^\d{11}$/.test(registerForm.phone)) {
      notify("الرجاء إدخال رقم هاتف صحيح مكون من 11 رقمًا", "warn");
      return false;
    }

    if (registerForm.password !== registerForm.passwordConfirm) {
      notify("كلمتا المرور غير متطابقتين", "warn");
      return false;
    }

    return true; // ✅ إذا التحقق ناجح
  };

  // ✅ عند الضغط على زر التسجيل
  const handleSubmitClick = async () => {
    if (!formValidation()) return;

    setRegisterForm((prev) => ({ ...prev, loading: true }));

    const responseUser = await dispatch(
      CreateNewUser({
        name: registerForm.name,
        email: registerForm.email,
        password: registerForm.password,
        passwordConfirm: registerForm.passwordConfirm,
        phone: registerForm.phone,
      })
    );

    if (responseUser.success) {
      // ✅ حفظ الـ token
      if (responseUser.data?.token) {
        localStorage.setItem("token", responseUser.data.token);
      }

      // ✅ تفريغ الحقول
      setRegisterForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirm: "",
        loading: false,
      });

      notify("تم إنشاء حساب جديد بنجاح", "success");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setRegisterForm((prev) => ({ ...prev, loading: false }));
      console.log(responseUser.data);
      if (responseUser.data.errors[0].msg === "E-mail already in use") {
        notify("هذا الإيميل موجود مسبقاً", "error");
      }

      if (responseUser.data.errors[0].msg === "must be at least 6 chars") {
        notify("كلمة المرور يجب ألا تقل عن 6 أحرف", "error");
      }

      if (
        responseUser.data.errors[0].msg === "accept only egypt phone numbers"
      ) {
        notify("لا تقبل سوى أرقام الهواتف المصرية", "error");
      }
    }
  };

  return { registerForm, setRegisterForm, handleSubmitClick };
};

export default RegisterSignUpHook;
