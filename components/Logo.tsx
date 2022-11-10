import Link from "next/link";
import React from "react";

const Logo = ({
  className = "text-white",
}: {
  className?: string;
}) => {
  return (
    <Link href="/">
      <div
        className={`lg:pt-2 flex flex-row-reverse gap-1 cursor-pointer  font-sansBlack text-sm md:text-lg lg:text-2xl border-b ${className}`}
      >
        <span className="-rotate-12">H</span>
        <span>a</span>
        <span className="-rotate-12">m</span>
        <span>s</span>
        <span className="rotate-12">h</span>
        <span>a</span>
        <span>b</span>
      </div>
    </Link>
  );
};

export default Logo;
