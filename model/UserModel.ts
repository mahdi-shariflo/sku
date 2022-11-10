import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default:
        "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    },
    email: {
      type: String,
      unique: true,
    },
    bgImage: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
    },
    password: {
      type: String,
    },
    fullname: {
      type: String,
      default:""
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    bio: {
      type: String,
      default:""
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.user ||
  mongoose.model("user", UserSchema);

export default User;
