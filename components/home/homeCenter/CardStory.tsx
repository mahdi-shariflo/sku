import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Logo from "./../../../assest/image/test.jpg";
interface props {
  children?: React.ReactNode;
  name?: string;
  onClick:()=>void;
}
const CardStory = ({ children, name ,onClick }: props) => {
  return (
    <li onClick={onClick} className="li-card-story cursor-pointer">
      <div className="border-gradient-story">
        <div className="border-white-story">
          <div className="img-story">
            {/* <Image src={Logo} layout="fill" /> */}
          </div>
        </div>
        {children}
      </div>

      <p className="text-xs text-[#A4AABD] mt-1">
        {name ? name : "mahdi"}
      </p>
    </li>
  );
};

export default CardStory;
