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
        "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png",
    },
    password: {
      type: String,
    },
    fullname: {
      type: String,
    },
    followers: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.user ||
  mongoose.model("user", UserSchema);

export default User;
