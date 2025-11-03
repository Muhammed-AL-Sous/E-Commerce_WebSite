// React Hooks
import { useState } from "react";

// External Libraries
import notify from "../ToastNotifications";

// Redux
import { useDispatch } from "react-redux";
import { CreateNewUser } from "../../Redux/Actions/AuthActions";

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
    } else {
      setRegisterForm((prev) => ({ ...prev, loading: false }));
      notify(responseUser.message || "حدث خطأ أثناء إنشاء الحساب", "error");
    }
  };

  return { registerForm, setRegisterForm, handleSubmitClick };
};

export default RegisterSignUpHook;
