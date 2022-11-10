import React from "react";
import Comments from "./Comments";
import Posts from "./Posts";
import Storys from "./Storys";

const HomeCenter = () => {
  return (
    <>
      <div className="overflow-hidden max-w-[600px]">
        <Storys />
        <Posts />
      </div>
      {/* modal comments */}
      <Comments/>
    </>
  );
};

export default HomeCenter;
