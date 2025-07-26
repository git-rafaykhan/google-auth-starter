import express from "express";
import connectToDB from "./utils/db";
import authRoutes from "./routes/authRoute";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<a href='/auth/google'> Sign in with Google </a>");
});

app.use("/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`✅ App is listening on http://localhost:${port}`);
  connectToDB();
});
