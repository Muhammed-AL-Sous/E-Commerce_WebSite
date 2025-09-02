import { useParams } from "react-router-dom";
import useViewProductDetailsHook from "../../Hooks/Products/useViewProductDetailsHook";

const ProductDescription = () => {
  const { id } = useParams();
  const { categoryName } = useViewProductDetailsHook(id);
  console.log(categoryName);
  
  return (
    <div
      className="shadow p-4 rounded-4"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <div className="mb-4">
        <h4 className="text-muted fw-bolder">{categoryName} :</h4>
        <p className="text-secondary fw-semibold mb-1">
          ايفون 16 برو ماكس بذاكرة داخلية مقدارها 128 جيجا بايت و يدعم خاصية ال
          4G LTE
        </p>
        <span className="text-warning fw-semibold">4.5</span>
      </div>

      <div className="mb-4">
        <h4 className="text-muted fw-bolder mb-3">
          الماركة : <span className="text-secondary fw-semibold"> آيفون</span>
        </h4>
        <ul className="list-unstyled d-flex gap-2">
          <li
            style={{
              backgroundColor: "white",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
            }}
          ></li>
          <li
            style={{
              backgroundColor: "green",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
            }}
          ></li>
          <li
            style={{
              backgroundColor: "blue",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
            }}
          ></li>
          <li
            style={{
              backgroundColor: "yellow",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
            }}
          ></li>
        </ul>
      </div>

      <div>
        <h4 className="text-muted fw-bolder">المواصفات :</h4>
        <p className="text-info-emphasis fw-medium lh-lg">
          الشاشة: شاشة Super Retina XDR OLED مقاس 6.9 بوصة. وضوح 2796 × 1290
          بكسل بكثافة 460 بكسل لكل بوصة. تقنية ProMotion مع معدلات تحديث متكيف
          تصل إلى 120Hz. شاشة HDR، تكنولوجيا انسجام اللون، مجموعة ألوان كبيرة
          (P3). الحد الأقصى للسطوع 1000 شمعة/المتر المربع (القيمة القياسية)،
          1600 شمعة/المتر المربع (HDR)، 2000 شمعة/المتر المربع (في الخارج).
          المعالج: شريحة A18 Pro. الذاكرة: ذاكرة وصول عشوائي (RAM) بسعة 8
          جيجابايت. ذاكرة تخزين داخلية بسعات مختلفة (256 جيجابايت، 512 جيجابايت،
          1 تيرابايت). الكاميرا: كاميرا خلفية ثلاثية: 48 ميجابكسل (رئيسية)، 12
          ميجابكسل (تقريب) 5x، 48 ميجابكسل (فائقة الاتساع). كاميرا أمامية بدقة
          12 ميجابكسل. تسجيل فيديو بدقة 4K بمعدلات إطارات مختلفة، وتسجيل فيديو
          بدقة 1080p بمعدلات إطارات مختلفة. نظام التشغيل: iOS 18. شبكة الاتصال:
          يدعم شبكات 5G. البطارية: بطارية ليثيوم أيون غير قابلة للإزالة. يدعم
          الشحن السلكي السريع (PD2.0) والشحن اللاسلكي (MagSafe و Qi2). ميزات
          إضافية: مقاومة الماء والغبار IP68. تقنية Face ID. تقنية Apple Pay.
          منفذ USB Type-C 3.2 Gen 2. أربعة ألوان: تيتانيوم صحراوي، تيتانيوم
          طبيعي، تيتانيوم أبيض، تيتانيوم أسود
        </p>
      </div>
      <div className="d-flex align-items-center">
        <span
          className="text-secondary fw-semibold rounded-2"
          style={{
            padding: "7px 20px",
            margin: "0 5px",
            border: "2px solid #ccc",
          }}
        >
          500$
        </span>
        <span
          style={{
            backgroundColor: "#272727",
            padding: "8px 10px",
            color: "white",
            borderRadius: "0.375rem",
            cursor: "pointer",
          }}
        >
          أضف للسلة
        </span>
      </div>
    </div>
  );
};

export default ProductDescription;
