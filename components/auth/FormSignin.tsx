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
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل صحیح نیست")
    .required("لطفا ایمیلتونو وارد کنین "),
});
const FormSignin = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async ({
    email,
    password,
  }: signupData) => {
    const option = {
      email,
      password,
      redirect: false,
    };
    setIsLoading(true);
    setError("");
    const res: any = await signIn("credentials", option);
    console.log(res);
    if (!res.error && res.status === 200) {
      router.push("/");
    }
    // if (res.status === 401) {
    //     setIsLoading(false);
    //   return setError("نام کاربری یا رمز عبور اشتباه است");
    // }
    // router.push("/auth/error")
  };

  return (
    <>
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
                className="ltr auth-input"
                name="password"
                type="password"
                placeholder="رمز عبور"
              />
              <span className="auth-error-message">
                <ErrorMessage name="password" />
              </span>
            </div>
            <p className="auth-error-message !p-0 !m-0">
              {error}
            </p>
            <Button style={btnAuth} type="submit">
              {isLoading ? (
                <BeatLoader color="#fff" size={9} />
              ) : (
                "ورود"
              )}
            </Button>
          </Form>
        </Formik>
      </MuiRtl>
    </>
  );
};

export default FormSignin;
