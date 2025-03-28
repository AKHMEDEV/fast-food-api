import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
      match: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    phoneNumber: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
      minLength: 9,
      maxLength: 9,
      match:
        /^(9[012345789]|6[125679]|7[0123456789]|3[3]|8[8]|2[0]|5[05])[0-9]{7}$/,
    },
    role: {
      type: mongoose.SchemaTypes.String,
      enum: ["USER", "OWNER", "ADMIN"],
      default: "USER",
    },
    imageUrl: {
      type: mongoose.SchemaTypes.String,
      required: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("User", userSchema);
