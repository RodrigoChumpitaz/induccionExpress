import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const productRoutes = Router();
const productController = new ProductController();

productRoutes.get("/products", productController.getProducts);

export default productRoutes;