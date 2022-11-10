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
        <div className="w-4 h-4 md:w-8 md:h-8 bg-[#5195ea] rounded-full shadow-md"></div>
        <Logo />
      </div>
      <div>
        <ul className="flex !gap-8 items-center text-[#9c9da2] font-sansMedium text-sm md:text-xs">
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
