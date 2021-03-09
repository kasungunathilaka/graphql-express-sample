import { Connection } from "typeorm";
import { Product } from "../models/product.model";

export class ProductRepository {

  public static async getAllProducts(connection: Connection) {
    return await connection
      .getRepository(Product)
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.brand", "brand")
      .getMany()
      .catch((error) => {
        throw error;
      });
  }

  public static async getProductById(connection: Connection, id: number) {
    return await connection
      .getRepository(Product)
      .findOne({
        where: { id: id },
        relations: ["brand"]
      })
      .catch((error) => {
        throw error;
      });
  }

  public static async createProduct(connection: Connection, product: Product) {
    return await connection
      .getRepository(Product)
      .save(product)
      .catch((error) => {
        throw error;
      });
  }

}