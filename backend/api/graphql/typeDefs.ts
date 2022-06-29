import { gql } from "apollo-server-express";
import { Auth } from "./Auth";

const typeDefs = gql`
  type Error {
    message: String
  }

  ${Auth.types}

  type Query {
    ${Auth.queries}
  }

  type Mutation {
    ${Auth.mutations}
  }
`;

export default typeDefs;
