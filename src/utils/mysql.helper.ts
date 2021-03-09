import "mysql";
import "reflect-metadata";
import { getConnectionManager, Connection, createConnection, ConnectionOptions } from "typeorm";

import { Product } from "../models/product.model";
import { Brand } from "../models/brand.model";

export class SqlConnectionManager {
  /**
   *
   *
   * @static
   * @type {ConnectionOptions}
   * @memberof SqlConnectionManager
   */
  public static options: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'otriumuser',
    password: 'otrium@123',
    database: 'otrium_db',
    synchronize: false,
    timezone: "local",
    logging: true,
    entities: [
      Product,
      Brand
    ]
  };

  public static async getInstance() {
    return await createConnection(this.options);
  }

  public static createInstance() {
    const connectionManager = getConnectionManager();
    return connectionManager.create(this.options);
  }

  public static async initialiseInstance(connection: Connection) {
    if (connection && !connection.isConnected) {
      await connection.connect();
    }
  }

  public static async closeInstance(connection: Connection) {
    if (connection && connection.isConnected) {
      await connection.close();
    }
  }
}
