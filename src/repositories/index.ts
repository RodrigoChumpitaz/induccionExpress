import { ProductImplRepository } from "./impl/productsImplRepository";
import { IProductRepository } from './product.repository';

const productRepository = new ProductImplRepository();

export {
    productRepository,
    IProductRepository
}