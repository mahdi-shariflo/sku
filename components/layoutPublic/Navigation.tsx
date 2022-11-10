import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { menus } from "./../data";

interface props {
  children: React.ReactNode;
}
const Navigation = ({ children }: props) => {
  const router = useRouter();
useEffect(() => {
  // @ts-ignore
  if(router.pathname === "/chat/:id"){
    return 
  }
}, [router.pathname])

  return (
    <>
      {children}
      <div className={`container-navigation md:hidden`}>
        <ul className="container-items-li">
          {menus.map((menu: any, index: number) => {
            return (
              <li
                key={index}
                onClick={() => router.push(menu.url)}
                className={`li-navigation ${
                  router.pathname === menu.url &&
                  "activeMenuItem"
                }`}
              >
                <Card
                  styleB={`${
                    router.pathname === menu.url
                      ? "w-[0.3rem] h-[0.3rem] rounded-full bg-[#0096f5] mt-10"
                      : ""
                  }`}
                  className={` px-[0.7rem]  ${
                    router.pathname === menu.url
                      ? "  text-[#0096f5]"
                      : "text-[#2c3e50]"
                  }`}
                  icon={menu.icon}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navigation;

interface Card {
  icon: JSX.Element;
  className?: string;
  styleB?: string;
}
const Card = ({ icon, className, styleB }: Card) => {
  return (
    <div
      className={`flex flex-col justify-center items-center relative ${className}`}
    >
      {icon}
      <p className={styleB}></p>
    </div>
  );
};
