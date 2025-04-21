import express from "express";
import { addProduct, listProduct, removeProduct } from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Add product
productRouter.post("/add", upload.single("image"), addProduct);

// List all products
productRouter.get("/list", listProduct);

// Remove product by ID
productRouter.delete("/delete/:id", removeProduct);

export default productRouter;
