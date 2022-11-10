import Image from "next/image";
import React from "react";
import CardRequest from "./CardRequest";
const Requests = () => {
  return (
    <div className="container-card">
      <TitleRequest/>
      <CardRequest />
      <CardRequest />
    </div>
  );
};

export default Requests;

const TitleRequest = () => {
  return (
    <div className="container-title-request border-b border-gray-100 pb-5">
      <p className="title-request">درخواست‌ها</p>
      <p className="count-request">
        ۲
      </p>
    </div>
  );
};
