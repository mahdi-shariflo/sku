import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { btnAuth } from "../../utils/styles";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { propsForm, signupData } from "../../typing";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BeatLoader from "react-spinners/BeatLoader";
import { MuiRtl } from "../../utils/Mui";
import { useMutation } from "react-query";
import { signupApi } from "../../utils/API";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل صحیح نیست")
    .required("لطفا ایمیلتونو وارد کنین "),
});
const FormSignup = () => {
  const [error, setError] = useState<null | number>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const mutatation = useMutation((data: signupData) =>
    signupApi(data)
  );
  const onSubmit = ({ email, password }: signupData) => {
    mutatation.mutate(
      { email, password },
      {
        onSuccess: async () => {
          const option = {
            email,
            password,
            redirect: false,
          };
          setLoading(true);
          const user = await signIn("credentials", option);
          if (user) return router.push("/");
          return router.push("/auth/signin");
        },
        onError: (err: any) => {
          setError(err?.response?.status);
        },
      }
    );
  };

  return (
    <div className="flex justify-center w-full md:w-[50%] lg:w-[40%] mt-14 mx-auto flex-col">
      <div className="my-8">
        <h1 className="text-xl font-sansBlack text-white pb-3">
          {" "}
          ثبت نام در وب اپلیکیشن هم شب
        </h1>
        <p className="font-yekan text-xs pb-5 text-[#9c9da2]">
          برای ثبت نام، لطفا فرم زیر را پر کنید
        </p>
      </div>
      {/* form */}
      <MuiRtl>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-6">
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
                name="repeatPassword"
                placeholder="تکرار رمز عبور"
              />
              <span className="auth-error-message">
                <ErrorMessage name="repeatPassword" />
              </span>
            </div>

            <p className="auth-error-message !p-0 !m-0">
              {mutatation.isError && error === 400
                ? "ایمیل قبلا ثبت شده است"
                : error === 500
                ? "لطفا بعدا تلاش کنید"
                : ""}
            </p>

            <Button style={btnAuth} type="submit">
              {mutatation.isLoading || loading ? (
                <BeatLoader color="#fff" size={9} />
              ) : (
                "ورود"
              )}
            </Button>
          </Form>
        </Formik>
      </MuiRtl>
    </div>
  );
};

export default FormSignup;
