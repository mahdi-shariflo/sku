import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Logo from "../../public/image/logo_sku.jpg";
import { MenuItems } from "../../utils/data";
import { BsSearch } from "react-icons/bs";
import { MdOutlineFilterList } from "react-icons/md";
interface Props {
  children: React.ReactNode;
}
const LayoutBublic = ({ children }: Props) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const closeSearchMenu = (e: any) => {
      if (e.path[0].tagName === "DIV") {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeSearchMenu);
    return document.body.removeEventListener(
      "click",
      closeSearchMenu
    );
  }, []);

  return (
    <div className="flex">
      <div className="w-[350px]  min-h-screen shadow-lg bg-white">
        <div className="w-[60%] drop-shadow-md h-14 mx-auto mt-5 relative ">
          <Image layout="fill" src={Logo} alt="" />
        </div>
        <div className=" mt-10">
          <p className="text-black pb-10 pr-7">
            دسترسی سریع
          </p>
          <div className="flex flex-col">
            {MenuItems.map((menu: any) => (
              <div
              key={menu.id}
                className={`py-4 ${
                  router.pathname === menu.route
                    ? "bg-gray-100/60"
                    : ""
                }`}
              >
                <div className="flex items-center gap-7 pr-7 cursor-pointer">
                  <menu.icon
                    size={22}
                    className={`${
                      router.pathname === menu.route
                        ? "text-[#096FA6]"
                        : "text-[#A4B6E1]"
                    }`}
                  />
                  <p
                    className={`text-sm font-sansLight ${
                      router.pathname === menu.route
                        ? "text-[#096FA6]"
                        : "text-[#A4B6E1]"
                    }`}
                  >
                    {menu.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* header */}
        <header className="flex w-[95%] mx-auto justify-between items-center pt-5 border-b border-[#D8E4F2] pb-10">
          <div className="flex gap-2 flex-1">
            <div
              onClick={() => setShowMenu(true)}
              className="flex-1 flex relative items-center bg-white h-11 rounded-xl border-2 border-[#D8E4F2] px-2"
            >
              <BsSearch className="text-black" />
              <input className="bg-transparent w-full outline-none px-2" />
              <div
                className={`w-full z-50  bg-white absolute shadow-sm h-[300px] top-12 left-0 overflow-auto rounded-xl font-reqularRobot text-black px-3 pt-2 text-[14px] transition-all duration-150 ${
                  showMenu ? "opacity-100" : "opacity-0"
                }`}
              >
                <div>tststststststststst</div>
              </div>
            </div>
            <div className="bg-blue-500 text-white h-10 w-10 flex justify-center items-center rounded-xl">
              <MdOutlineFilterList size={27} />
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-12 h-12 cursor-pointer rounded-full text-white bg-blue-500 flex justify-center items-center">
              <AiOutlineCloudUpload size={25} />
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};

export default LayoutBublic;
