import { gql } from "apollo-server-express";
import { Auth } from "./Auth";
import { Category } from "./Category";
import { Product } from "./Product";

const typeDefs = gql`
  type Error {
    message: String
  }

  ${Auth.types}
  ${Product.types}
  ${Category.types}

  type Query {
    ${Auth.queries}
    ${Product.queries}
    ${Category.queries}
  }

  type Mutation {
    ${Auth.mutations}
    ${Product.mutations}
    ${Category.mutations}
  }
`;

export default typeDefs;
