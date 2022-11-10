import React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { MuiRtl, StyledBadge } from "../../utils/Mui";
import { useRecoilState } from "recoil";
import { selectChat } from "../../atom/atom";
import { useRouter } from "next/router";

interface props {
  user: any;
}
const CardPv = ({ user }: props) => {
  const [select, setSelect] = useRecoilState(selectChat);
  const router = useRouter()
const selectPv = ()=>{
  setSelect(user)
  router.push("/chat/1")
}
  return (
    <div
      onClick={selectPv}
      className={`cursor-pointer `}
    >
      <div className="flex items-center gap-2  px-2 py-4">
        <MuiRtl>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            // @ts-ignore
            variant={user.isOnline ? "dot" : "standard"}
          >
            <Avatar
              className="!w-16 !h-16 md:!w-14 md:!h-14"
              alt="Remy Sharp"
              src={user.profile.src}
            />
          </StyledBadge>
        </MuiRtl>

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex justify-between items-center">
            <p className="text-[14px] text-[#323232]">
              {user.fullname}
            </p>
            <p className="text-[10px] yekanBold text-[#323232]">
              {user.lastseen}
            </p>
          </div>
          <div className="flex justify-between items-center ml-3">
            <p className="text-[10px] text-[#B4B4B4]">
              {user.lastMessage}
            </p>
            {user.unreadMessages !== 0 && (
              <Badge
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: 10,
                    background: "#0096f5",
                  },
                }}
                badgeContent={user.unreadMessages}
                color="warning"
              ></Badge>
            )}
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-[#F8F8F8] mr-auto ml-2"></div>
    </div>
  );
};

export default CardPv;
