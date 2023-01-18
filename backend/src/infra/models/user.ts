import { Schema, model } from "mongoose";

export default () => {
  const User = model(
    "User",
    new Schema({
      email: {
        required: true,
        type: String,
      },
      password: {
        required: true,
        type: String,
      },
      createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
      updatedAt: {
        type: Date,
        default: () => Date.now(),
      },
    })
  );
  return User;
};
