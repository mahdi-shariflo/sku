import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "../../public/image/logo_sku.jpg";
import { MenuItems } from "../../utils/data";
import { Filter } from "../Filter";
import Header from "../Header";
interface Props {
  children: React.ReactNode;
}
const LayoutBublic = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
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
                <Link    key={menu.id} href={`/${menu.route}`}>
                  <div
                 
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
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          {/* header */}
          <Header setOpen={setOpen} />
          {children}
        </div>
      </div>

      <Filter open={open} setOpen={setOpen} />
    </>
  );
};

export default LayoutBublic;
