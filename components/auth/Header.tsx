import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Logo from "../Logo";
const Header = () => {
  const router = useRouter();
  return (
    <header className="flex items-center gap-12 md:gap-32">
      <div className="flex items-center gap-2 md:gap-5">
        <div
          className={`lg:pt-2 flex flex-row-reverse gap-1 cursor-pointer  font-sansBlack text-sm md:text-lg lg:text-2xl border-b border-[#0096f5] text-[#0096f5]`}
        >
          <span className="-rotate-12">S</span>
          <span className="-rotate-12">K</span>
          <span>U</span>
        </div>
        <Logo />
      </div>
      <div>
        <ul className="flex !gap-8 items-center text-black font-sansMedium text-sm md:text-xs">
          <li>
            <Link
              href={
                router.pathname === "/auth/signin"
                  ? "/auth/signup"
                  : "/auth/signin"
              }
            >
              <a className="flex gap-1 items-center">
                <FaUser size={18} />
                <span className="lg:pt-1">
                  {router.pathname === "/auth/signin"
                    ? "ثبت نام"
                    : "ورود"}
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
