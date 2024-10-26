import express from "express";
import { connectDb } from "./config/dbConenction.js";
import cors from "cors"
// *********** All-Routes *************
import auth from "./routes/auth.route.js";
import user from "./routes/user.route.js";
import "dotenv/config";
// *********** All-Routes *************

import cookieParser from "cookie-parser";
const port = process.env.PORT || 7000;

const app = express();
connectDb();
// Use cors middleware
app.use(cors());
app.use(
  cors({
    origin: "https://assessment-frontend-psi.vercel.app", // Replace with the frontend's URL (React app)
    methods: "GET,POST,PUT,DELETE,PATCH", // Allowed methods
  })
);


//middle wares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// *********** All-Routes *************

app.get("/", (req, res) => {
  res.json("I'm coming from backend");
});
app.use("/api/auth/v1", auth);
app.use("/api/user/v1", user);

// for wrong apis
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found. Please check the URL and try again.",
  });
});

// Error handling middleware (optional, for other server errors)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal server error.",
    error: err.message,
  });
});

app.listen(port, async () => {
  console.log("Server is running on port 7000");
});
