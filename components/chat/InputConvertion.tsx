import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Emoji from "./Emoji";
import { IconButton } from "@mui/material";
// @ts-ignore
import InputEmoji from "react-input-emoji";

const InputConvertion = () => {
  const [text, setText] = useState("");
  return (
    <div className=" w-[92%] md:w-[97%] relative mx-auto rounded-lg flex text-gray-500 !mb-4  bg-[#F5F7FB]">
      <IconButton>
        <SendIcon color="primary" />
      </IconButton>
      <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      placeholder="پیامی بنویسید"
    />
    </div>
  );
};

export default InputConvertion;
