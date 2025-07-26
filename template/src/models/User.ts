import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  email: String,
  name: String,
  picture: String,
  accessToken: String,
  refreshToken: String,
  tokenExpiry: Date,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
