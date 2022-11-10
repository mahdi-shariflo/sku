import { Button } from "@mui/material";
import { useFormik } from "formik";
import { GetServerSideProps } from "next";
import { getToken } from "next-auth/jwt";
import React from "react";
import InputProfile from "../../components/profile/InputProfile";
import { userType } from "../../typing";
import { getUserById } from "../../utils/API";

const Edit = ({ user }: userType) => {
  const formik = useFormik({
    initialValues: {
      profile: null,
      name: "",
      familyName: "",
      bio: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-test1 w-screen h-screen flex justify-center items-center">
      <div className=" w-full">
        <h1 className="font-sansBlack text-center text-2xl text-white pb-10">
          ویرایش پروفایل کاربری
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="px-4 grid grid-col-1 gap-5 md:max-w-[700px] mx-auto"
        >
          <div className="md:col-span-2 w-full">
            <label
              className="h-28 w-28 block mx-auto border-2 shadow-2xl rounded-full overflow-hidden"
              htmlFor="upload-photo"
            >
              {/* @ts-ignore */}

              {formik.values.profile && (
                <img
                  src={URL.createObjectURL(
                    formik.values.profile
                  )}
                />
              )}
            </label>
            <input
              id="upload-photo"
              name="profile"
              type="file"
              onChange={(event) => {
                  formik.setFieldValue(
                      "profile",
                      // @ts-ignore
                  event.currentTarget.files[0]
                );
              }}
            />
          </div>
          <InputProfile
            className="-mt-7 md:mt-0"
            placeholder="نام"
            label="نام"
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
          />
          <InputProfile
            placeholder="نام خانوادگی"
            label="نام‌ خانوادگی"
            onChange={formik.handleChange}
            value={formik.values.familyName}
            name="familyName"
          />
          <InputProfile
            placeholder="چیزی بنویسید..."
            className="md:col-span-2"
            textarea
            label="بیو"
            onChange={formik.handleChange}
            value={formik.values.bio}
            name="bio"
          />
          <Button
            type="submit"
            className="md:col-span-2 mt-8 hover:bg-[#0096f5] bg-[#0096f5] w-full text-white py-2 rounded-lg !font-sansMedium"
          >
            ویرایش
          </Button>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const token: any = await getToken({ req: ctx.req });
    if (!token)
      return {
        redirect: {
          destination: "/auth/signin",
          permanent: false,
        },
      };
    const res = await getUserById(token.sub);
    if (!res.data.user)
      return {
        redirect: {
          destination: "/signin",
          permanent: false,
        },
      };
    return {
      props: {
        user: res.data.user,
      },
    };
  };
export default Edit;
