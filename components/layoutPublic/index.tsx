import { Avatar, Button, IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { useRouter } from "next/router";
import {
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import AvatarProfile from "../AvatarProfile";
import Logo from "../Logo";

interface props {
  children: React.ReactNode;
}
const LayoutPublic = ({ children }: props) => {
  const session = useSession();
  const router = useRouter();
  const goToChat = () => {
    router.push("/chat");
  };

  return (
    <div>
      <header className="header">
        {/* header right */}
        <div className="header-right">
          <IconButton
            onClick={goToChat}
            className="md:hidden"
          >
            <FiSend size={25} className="text-[#2c3e50]" />
          </IconButton>
          {/* avatar */}
          <Logo/>

          {/* search */}
          <div className="container-search hidden md:flex">
            <SearchIcon className="text-[#BEC6D1]" />
            <input
              className="input-search"
              placeholder="جستجو"
            />
          </div>
        </div>
        {/* header left */}
        <div className="header-left">
          <div className="flex items-center gap-1 md:gap-5">
            <div className="hidden md:block">
              <Button
                sx={{
                  fontFamily: "sansBold",
                  borderRadius: 2,
                }}
                className="btn-create-post py-2"
                variant="contained"
              >
                <span>پست جدید</span>
                <AddBoxIcon
                  sx={{ fontSize: 19, margin: "0 4px" }}
                />
              </Button>
            </div>

            <AvatarProfile />
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default LayoutPublic;
