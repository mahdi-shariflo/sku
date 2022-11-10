import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Logo from "../../public/image/test.jpg";
import { userType } from "../../typing";

const ProfileImage = ({user}:userType) => {
  const router = useRouter();
  const navigateBack = () => {
    router.back();
  };
  return (
    <div className="relative">
      {/* back btn */}
      <div
        onClick={navigateBack}
        className="btn-back-profile cursor-pointer"
      >
        <MdOutlineArrowBackIos size={20} />
      </div>
      {/* background image */}
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
      <Image layout="fill" src={user.bgImage} />
      </div>
      {/* <img src={user.bgImage} className="background-profile" /> */}
      {/*  image profile */}
      <div className="container-img-profile">
        <img src={user.image} className="img-profile" />
      </div>
    </div>
  );
};

export default ProfileImage;
