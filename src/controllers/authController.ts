import { Request, Response } from "express";
import oauth2Client from "../utils/googleClient";
import { google } from "googleapis";
import User from "../models/User";
import jwt from "jsonwebtoken";

export const googleAuth = (req: Request, res: Response) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "select_account",
    scope: [
      "https://www.googleapis.com/auth/youtube.readonly",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  });
  console.log(url)
  res.redirect(url);
};



export const googleCallback = async (req: Request, res: Response) => {
  const { code } = req.query;
  if (!code) return res.status(400).send("Missing auth code");

  const { tokens } = await oauth2Client.getToken(code as string);
  oauth2Client.setCredentials(tokens);

  const oauth2 = google.oauth2({ auth: oauth2Client, version: "v2" });
  const userInfo = await oauth2.userinfo.get();
  const { id, email, name, picture } = userInfo.data;

  const user = await User.findOneAndUpdate(
    { googleId: id },
    {
      googleId: id,
      email,
      name,
      picture,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      tokenExpiry: tokens.expiry_date,
    },
    { upsert: true, new: true }
  );

  // ✅ Sign JWT token with MongoDB _id
  const token = jwt.sign({ UserId: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  // ✅ Send token and user info (or set it in a cookie)
  res.json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
    },
  });
};
