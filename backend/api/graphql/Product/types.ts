export const types = `
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    image: String!
    category: String!
    stock: Int!
  }

  input AddProductInput {
    name: String!
    description: String!
    price: Float!
    image: String!
    category: String!
    stock: Int!
  }

  type AddProductOutput {
    product: Product
    errors: Error
  }

  type GetAllProductsOutput {
    products: [Product]
    errors: Error
  }
`;
