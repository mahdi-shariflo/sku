import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { commentsState } from "../../../atom/atom";
import Modal from "../../Modal";
import UserInfo from "../homeRight/UserInfo";
import { MdOutlineClose } from "react-icons/md";
const Comments = () => {
  const [open, setOpen] = useRecoilState(commentsState);
  return (
    <Modal maxWidth="sm" setOpen={setOpen} open={open}>
      <div>
        <div className="flex justify-center items-center px-4 text-gray-600">
          <h1 className="text-center text-xl py-3 yekanBold flex-1">
            نظرات کاربران
          </h1>
          <MdOutlineClose
          className="cursor-pointer"
            onClick={() => setOpen(!open)}
            size={23}
          />
        </div>
        <div className="my-2">
          <UserInfo>
            <p className="text-xs text-gray-600 pt-2 leading-5 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              از صنعت چاپ و با استفاده از طراحان گرافیک است.
              چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است و برای شرایط فعلی
              تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
              بهبوددنیای موجود طراحی اساسا مورد استفاده قرار
              گیرد.
            </p>
          </UserInfo>
        </div>
      </div>
    </Modal>
  );
};

export default Comments;
