import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js"; // Import user routes
import path from "path";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// serve static files from uploads directory
const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, 'uploads')));

// api endpoints
app.use("/api/product", productRouter);
app.use("/api/user", userRouter); // Add user routes

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
