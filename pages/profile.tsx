import Image from "next/image";
import React from "react";
import { RiEdit2Fill } from "react-icons/ri";
import LayoutBublic from "../components/layout/LayoutBublic";
import ProfileTab from "../components/ProfileTabs";

const profile = () => {
  return (
    <LayoutBublic>
      <div className="p-10 !z-[9999999] overflow-auto">
        <div className=" flex justify-start items-center">
          <div className="relative">
            <div className="relative w-28 h-28 overflow-hidden rounded-full ">
              <Image
                layout="fill"
                src="https://i1.delgarm.com/i/798/0011/04/61eec0ac1c792.jpeg"
                alt=""
              />
            </div>
            <div className="w-7 h-7 shadow-lg flex justify-center items-center rounded-full absolute left-3 text-[#0096f5] transition-all cursor-pointer -bottom-1 hover:bg-[#0096f5] hover:text-white z-50 bg-white">
              <RiEdit2Fill />
            </div>
          </div>
        </div>
        <p className="text-black mt-4 font-sansMedium pr-4">
          پگاه نوروزی
        </p>

        <ProfileTab/>
      </div>
    </LayoutBublic>
  );
};

export default profile;
