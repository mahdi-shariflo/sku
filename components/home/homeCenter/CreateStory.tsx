import Image from "next/image";
import React from "react";
import CardStory from "./CardStory";
const CreateStory = () => {
  return (
    <CardStory name="شما">
      <button className="btn-create-story">
       <p className="mt-1"> +</p>
      </button>
    </CardStory>
  );
};

export default CreateStory;
