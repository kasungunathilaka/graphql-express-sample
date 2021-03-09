import { Connection } from "typeorm";
import { Product } from "../models/product.model";
import { ProductRepository } from "../repository/product.repository";

export class ProductService {

  public static async getAllProducts(connection: Connection) {
    return await ProductRepository.getAllProducts(connection);
  }

  public static async getProductById(connection: Connection, id: number) {
    return await ProductRepository.getProductById(connection, id);
  }

  public static async createProduct(connection: Connection, product: Product) {
    const createdProduct = await ProductRepository.createProduct(connection, product);
    return await ProductRepository.getProductById(connection, createdProduct.id);
  }

}