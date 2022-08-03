import { gql } from "apollo-server-express";
import { Auth } from "./Auth";
import { Product } from "./Product";

const typeDefs = gql`
  type Error {
    message: String
  }

  ${Auth.types}
  ${Product.types}

  type Query {
    ${Auth.queries}
    ${Product.queries}
  }

  type Mutation {
    ${Auth.mutations}
    ${Product.mutations}
  }
`;

export default typeDefs;
