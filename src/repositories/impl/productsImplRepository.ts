import { Model } from "mongoose";
import { IProductRepository } from "../product.repository";
import { ProductModel } from "../../db/mongo.schema";

export class ProductImplRepository implements IProductRepository {
    private productModel: Model<any>

    constructor(){
        this.productModel = ProductModel;
    }

    async getProducts(): Promise<any> {
        try {
            return await this.productModel.find();
        } catch (error) {
            throw new Error(error);
        }
    }
}