import { Request, Response } from "express";
import { getProducts } from "../usesCases/product/getProducts";

export class ProductController {
    async getProducts(req: Request, res: Response): Promise<any> {
        try {
            const result = await getProducts.execute();
            if(result instanceof Error) {
                return res.status(400).json({ message: result.message });
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}