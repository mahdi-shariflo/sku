import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Logo from "../../public/image/test.jpg";

const ProfileImage = () => {
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
      <img src={Logo.src} className="background-profile" />
      {/*  image profile */}
      <div className="container-img-profile">
        <img src={Logo.src} className="img-profile" />
      </div>
    </div>
  );
};

export default ProfileImage;
