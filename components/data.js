import { FaUser } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import InsertCommentRoundedIcon from "@mui/icons-material/InsertCommentRounded";
import PersonIcon from "@mui/icons-material/Person";

// navigation data
export const menus = [
  {
    icon: <AiFillHome size={27} />,
    url: "/",
  },
  {
    icon: <FiSearch size={25} />,
    url: "/search",
  },
  {
    icon: <BiPlusCircle size={30} />,
    url: "/category",
  },
  {
    icon: <FaUser size={22} />,
    url: "/profile",
  },
];

export const menuItemsDesktop = [
  {
    icon: HomeIcon,
    name: "خانه",
    url: "/",
  },
  {
    icon: InsertCommentRoundedIcon,
    name: "پیام‌ها",
    url: "/chat",
  },
  {
    icon: PersonIcon,
    name: "پروفایل",
    url: "/profile",
  },
];
