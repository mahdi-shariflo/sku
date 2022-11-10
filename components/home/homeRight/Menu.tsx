import { useRouter } from "next/router";
import React, { useState } from "react";
import { menuItemsDesktop } from "../../data";

const MenuHomeRight = () => {
  const router = useRouter();
  const [active, setActive] = useState<number>(0);
  const navigatePage = ( url: string) => {
    router.push(url);
  };
  return (
    <div className="container-card">
      {menuItemsDesktop.map((menu: any, index) => {
        return (
          <CardMenu
            key={index}
            Icon={menu.icon}
            active={router.pathname === menu.url}
            name={menu.name}
            onClick={() => navigatePage(menu.url)}
          />
        );
      })}
    </div>
  );
};

export default MenuHomeRight;

interface propsCardMenu {
  Icon: any;
  name: string;
  active: boolean;
  onClick: () => void;
}
const CardMenu = ({
  active,
  Icon,
  name,
  onClick,
}: propsCardMenu) => {
  return (
    <div
      onClick={onClick}
      className={`flex text-xs items-center gap-1 px-3 py-4 cursor-pointer border-b border-b-gray-100 ${
        active
          ? "border-r-[3.5px] border-[#1778F2] text-[#1778F2] bg-[#F8FCFF]"
          : "text-[#2c3e50]"
      }`}
    >
      <Icon sx={{ fontSize: 20 }} />
      <p className="mt-[0.10rem]">{name}</p>
    </div>
  );
};
