import { IProductRepository } from "../../../repositories";
import { UseCase } from "../../../utils/UseCase";
import { GetProductRequestDto } from "./getProductsRequestDto";
import { GetProductsResponseDto } from "./getProductsResponseDto";

type Response = GetProductsResponseDto | Error;

class GetProducts implements UseCase<GetProductRequestDto, Response>{
    private productRepository: IProductRepository;

    constructor(productRepository: IProductRepository){
        this.productRepository = productRepository;
    }

    async execute(request?: GetProductRequestDto): Promise<Response> {
        try {
            const result = await this.productRepository.getProducts();
            return result;
        } catch (error) {
            return new Error(error);
        }
    }
}

export default GetProducts;