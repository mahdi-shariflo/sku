import { AiFillHome } from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { BsBookmarkDashFill } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";

export const MenuItems = [
  {
    id: 1,
    name: "خانه",
    icon: AiFillHome,
    route: "/",
  },
  {
    id: 2,
    name: "پروفایل",
    icon: HiUser,
    route: "/profile",
  },
  {
    id: 3,
    name: "پست های ذخیره شده",
    icon: BsBookmarkDashFill,
    route: "/profile",
  },
  {
    id: 4,
    name: "خروج",
    icon: RiLogoutBoxRFill,
    route: "/profile",
  },
];
export const TabMenu = [
  {
    id: 1,
    name: "همه پست‌ها",
  },
  {
    id: 2,
    name: "پست استاد‌ها",
  },
  {
    id: 3,
    name: "پست دانشجویان",
  },
];
