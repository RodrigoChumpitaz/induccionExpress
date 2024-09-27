export interface GetProductsResponseDto {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    createdAt: string | Date;
    updatedAt: string | Date;
}