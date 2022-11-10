import React from "react";

const editprofile = () => {
  return (
    <div className="flex justify-center bg-white items-center h-screen w-screen">
      <div className=" min-w-[350px] md:min-w-[400px] flex flex-col space-y-5">
        <h1 className="text-center">ویرایش پروفایل</h1>
        <form className="flex flex-col space-y-7 !mt-14">
          <div className="flex justify-center">
            <label className="btn-picture">
              <input
                type="file"
                name="user-picture"
                value=""
              />
              <button className="btn-file">
                <span>انتخاب عکس</span>
              </button>
            </label>
          </div>
          <div>
            <label className="text-xs block text-black">
              آدرس ایمیل
            </label>
            <input
              placeholder="آدرس ایمیل خود را وارد کنید"
              className="border px-2 text-[#BFBFBF] w-full rounded-md mt-3 py-3 md:py-2 placeholder:text-xs yekanBold"
            />
          </div>
          <div>
            <label className="text-xs block text-black">
              رمز عبور
            </label>
            <input
              placeholder="رمز عبور خود را وارد کنید"
              className="border px-2 text-[#BFBFBF] w-full rounded-md mt-3 py-3 md:py-2 placeholder:text-xs yekanBold"
            />
          </div>
          <div>
            <label className="text-xs block text-black">
              تکرار رمز عبور
            </label>
            <input
              placeholder="رمز عبور خود را وارد کنید"
              className="border px-2 text-[#BFBFBF] w-full rounded-md mt-3 py-3 md:py-2 placeholder:text-xs yekanBold"
            />
          </div>
          <div>
          <p className="text-xs block text-black">
            انتخاب شهر
            </p>
          <div className="border px-2 w-full rounded-md mt-3 py-4 md:py-3 ">
             <p className="text-[#BFBFBF] text-xs yekanBold"> انتخاب شهر</p>
          </div>
          </div>
          <button className="bg-[#0096f5] rounded-lg w-full text-white text-xs py-4 md:py-3 mt-10">
            ورود
          </button>
        </form>
        <div className="text-xs mt-10 flex items-center gap-2">
          <p>آیا حسابی ندارید؟</p>
          <p className=" text-[#0096f5]">ایجاد حساب</p>
        </div>
      </div>
    </div>
  );
};

export default editprofile;
