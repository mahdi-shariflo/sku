import React from "react";

interface props {
  me?: boolean;
  message: string;
}
const CardMessage = ({ me , message}: props) => {
  return (
    <div
      className={`m-3  flex items-center ${
        me ? "justify-end" : "justify-start"
      } `}
    >
      <p
        className={`p-2 !w-fit text-justify !max-w-[80%] md:!max-w-[40%] leading-5 yekanMedium bg-[#F5F7FB] border border-gray-100 text-xs text-[#888A8B] ${
          me
            ? "rounded-r-lg rounded-bl-lg"
            : "rounded-l-lg rounded-br-lg"
        }`}
      >
       {message}
      </p>
    </div>
  );
};

export default CardMessage;
