import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  preferences: [{ type: String }],
  bookmarks: [{ type: String }],
});

const user = mongoose.model("user", UserSchema);

export default user;
