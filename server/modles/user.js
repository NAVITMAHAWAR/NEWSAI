import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  preferences: [String],
  bookmarks: [{ Object }],
  readingHistory: [{ Object }],
});

const user = mongoose.model("user", UserSchema);

export default user;
