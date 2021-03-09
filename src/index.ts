import express, { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { createProduct, getAllProducts, getProductById } from "./resolvers/product-resolver";

const port: string | number = process.env.PORT || 4000;

// GraphQL schema
const schema = buildSchema(`
  # Custom type definitions
  type Product {
    id: ID!
    name: String!
    slug: String
    sku: String
    brand: Brand
    createdDate: String
    modifiedDate: String
  }

  type Brand {
    id: ID!
    name: String!
    logoUrl: String
    createdDate: String
    modifiedDate: String
  }

  # Input
  input BrandInput {
    id: ID!
  }

  # Query
  type Query {
    products: [Product]
    product(id: Int!): Product
  }

  # Mutation
  type Mutation {
    createProduct(
      name: String!
      slug: String
      sku: String
      brand: BrandInput
      createdDate: String
      modifiedDate: String
    ): Product
  }

`);

// Root resolvers
const root = {
  products: getAllProducts,
  product: getProductById,
  createProduct: createProduct
};

// Create an express server and a GraphQL endpoint
const app: Express = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(port, () => {
  console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`);
});