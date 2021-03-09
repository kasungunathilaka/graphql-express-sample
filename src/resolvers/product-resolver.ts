import { SqlConnectionManager } from "../utils/mysql.helper";
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Brand } from '../models/brand.model';


export const getAllProducts = async (args) => {
  const connection = SqlConnectionManager.createInstance();

  try {
    await SqlConnectionManager.initialiseInstance(connection);
    return await ProductService.getAllProducts(connection);

  } catch (error) {
    console.error(error);

  } finally {
    console.info('connection closed');
    await SqlConnectionManager.closeInstance(connection);
  }
}

export const getProductById = async (args) => {
  const connection = SqlConnectionManager.createInstance();

  try {
    const productId = parseInt(args.id);
    await SqlConnectionManager.initialiseInstance(connection);
    return await ProductService.getProductById(connection, productId);

  } catch (error) {
    console.error(error);

  } finally {
    console.info('connection closed');
    await SqlConnectionManager.closeInstance(connection);
  }
}

export const createProduct = async (args) => {
  const connection = SqlConnectionManager.createInstance();
  
  try {
    let resBody:Product = args as Product;
    if (args.brand) {
      let brand: Brand = new Brand();
      brand.id = (args.brand as Brand).id;
      resBody.brand = brand;
    }
    await SqlConnectionManager.initialiseInstance(connection);
    return await ProductService.createProduct(connection, resBody);

  } catch (error) {
    console.error(error);

  } finally {
    console.info('connection closed');
    await SqlConnectionManager.closeInstance(connection);
  }
}
