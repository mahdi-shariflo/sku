import { useRouter } from "next/router";
import React from "react";
import CardStory from "./CardStory";
import CreateStory from "./CreateStory";

const Storys = () => {
  const storys = [0, 1, , 2, 3, 4, 5, 6, 7, 8];
  const router = useRouter();
  const navigateStory = () => {
    router.push("/stories");
  };
  return (
    <div className="flex space-x-2 ltr overflow-y-hidden w-full hide-scroll bg-white p-2 rounded-lg">
      <CreateStory />
      {storys.map((story, index) => {
        return (
          <CardStory onClick={navigateStory} key={index} />
        );
      })}
    </div>
  );
};

export default Storys;
