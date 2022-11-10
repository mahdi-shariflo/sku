import mongoose from "mongoose";

const connnectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");

    return;
  }

  mongoose
    // @ts-ignore
    .connect("mongodb://localhost:27017/social_media")
    .then(() => {
      console.log("connected DB");
    })
    .catch((err) => console.log(err));
};

export default connnectDB;
