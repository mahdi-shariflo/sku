import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { btnAuth } from "../../utils/styles";
interface Props {
  onSubmit: () => void;
}
const initialValues = {
  name: "",
  family_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل صحیح نیست")
    .required("لطفا ایمیلتونو وارد کنین "),
});
const StepOne = ({ onSubmit }: Props) => {
  return (
    <div className="flex justify-center w-full md:w-[50%] lg:w-[50%] mx-auto mt-14 flex-col">
      <div className="my-8">
        <h1 className="text-xl font-sansBlack text-black pb-3">
          {" "}
          ثبت نام در وب اپلیکیشن دانشگاه شهر کرد
        </h1>
        <p className="font-yekan text-xs pb-5 text-gray-700">
          برای ثبت نام، لطفا فرم زیر را پر کنید
        </p>
      </div>
      {/* form */}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col gap-6">
          <div className="">
            <label className="auth-label">نام دانشجو</label>
            <Field
              className="ltr auth-input"
              name="name"
              placeholder="نام دانشجو"
            />
            <span className="auth-error-message">
              <ErrorMessage name="name" />
            </span>
          </div>
          <div className="">
            <label className="auth-label">
              نام‌خانوادگی دانشجو
            </label>
            <Field
              className="ltr auth-input"
              name="family_name"
              placeholder="نام‌خانوادگی دانشجو"
            />
            <span className="auth-error-message">
              <ErrorMessage name="family_name" />
            </span>
          </div>
          <div className="">
            <label className="auth-label">ایمیل</label>
            <Field
              className="ltr auth-input"
              name="email"
              placeholder="ایمیل"
            />
            <span className="auth-error-message">
              <ErrorMessage name="email" />
            </span>
          </div>
          <div className="">
            <label className="auth-label">رمز عبور</label>
            <Field
              type="password"
              className="ltr auth-input"
              name="password"
              placeholder="رمز عبور"
            />
            <span className="auth-error-message">
              <ErrorMessage name="password" />
            </span>
          </div>
          <div className="">
            <label className="auth-label">
              تکرار رمز عبور
            </label>
            <Field
              type="password"
              className="ltr auth-input"
              name="confirm_password"
              placeholder="تکرار رمز عبور"
            />
            <span className="auth-error-message">
              <ErrorMessage name="confirm_password" />
            </span>
          </div>

          <Button style={btnAuth} type="submit">
            ورود
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
