import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MuiRtl } from "../../../utils/Mui";
import SendIcon from "@mui/icons-material/Send";
import { FiBookmark } from "react-icons/fi";
import { TiMessage } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { getRecoil, setRecoil } from "recoil-nexus";
import { commentsState } from "../../../atom/atom";
// import Logo from "../../../public/image/test.jpg";
import { useRouter } from "next/router";
import Link from "next/link";
interface props {
  src: any;
}
export default function CardPost({ src }: props) {
  const openModalComments = () => {
    const stateModalComments = getRecoil(commentsState);
    setRecoil(commentsState, !stateModalComments);
  };
  return (
    <MuiRtl>
      <Card
        sx={{
          boxShadow: "none",
        }}
        className="py-1"
      >
        <div className="flex justify-between p-3">
          <Link href="/profile">
            <div className="flex gap-2 items-center cursor-pointer">
              {/* <Avatar
                src={Logo.src}
                sx={{ width: 50, height: 50 }}
              /> */}
              <div className="space-y-1">
                <p className="text-sm text-[#2c3e50]">
                  مهدی شریفلو
                </p>
                <p className="text-[10px] text-[#A4AABD]">
                  خوی
                </p>
              </div>
            </div>
          </Link>
          <IconButton>
            <MoreVertIcon
              sx={{ fontSize: 22, color: "#2c3e50" }}
            />
          </IconButton>
        </div>

        <CardMedia
          component="img"
          className="min-h-[250px] max-h-[400px]"
          image={src}
          alt="Paella dish"
        />

        <div className="flex space-x-10 items-center ltr p-4 text-[#7D8599]">
          <div className="flex space-x-1 items-center">
            <FiHeart size={22} />
            <p className="text-[12px] mt-2">112</p>
          </div>
          <div
            onClick={openModalComments}
            className="flex space-x-1 items-center"
          >
            <TiMessage
              size={27}
              className="text-gray-500 cursor-pointer"
            />
            <p className="text-[12px] mt-2">112</p>
          </div>

          <FiBookmark
            size={21}
            className="text-[#7D8599]"
          />
        </div>
        <div className="flex text-[#2c3e50] mt-4 mx-3 rounded-lg !mb-3 bg-[#f7f7f7] h-[47px] md:h-[40px]">
          <IconButton>
            <SendIcon color="primary" />
          </IconButton>
          <input className="w-full bg-transparent outline-none text-xs" />
        </div>
      </Card>
    </MuiRtl>
  );
}
