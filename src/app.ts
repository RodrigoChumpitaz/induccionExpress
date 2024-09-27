import express from 'express';
import productRoutes from './services/product.service';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", productRoutes)



export default app;