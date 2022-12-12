import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoSku from "../public/image/logo_sku.jpg"
const Logo = ({
  className = "text-white",
}: {
  className?: string;
}) => {
  return (
    <Link href="/">
     <Image width={200} height={50} src={LogoSku} alt=""/>
    </Link>
  );
};

export default Logo;
