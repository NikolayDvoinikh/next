import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

const User = models.User || model("User", UserSchema);

export default User;
