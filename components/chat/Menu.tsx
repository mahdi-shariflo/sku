import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import PersonIcon from "@mui/icons-material/Person";
import { menuItemsDesktop } from "../data";
import { useRouter } from "next/router";
const Menu = () => {
  const router = useRouter();
  const navigatePage = (url: string) => {
    router.push(url);
  };
  return (
    <div className="container-menu-chat">
      {menuItemsDesktop.map((menu, index) => {
        return (
          <div>
            <div
              key={index}
              onClick={()=>navigatePage(menu.url)}
              className={`flex text-xs items-center gap-1 px-3 py-4 cursor-pointer border-b border-b-gray-100 ${
                menu.url === router.pathname
                  ? "border-r-2 border-[#1778F2] text-[#1778F2] bg-gray-50"
                  : "text-[#2c3e50]"
              }`}
            >
              <menu.icon sx={{ fontSize: 20 }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
