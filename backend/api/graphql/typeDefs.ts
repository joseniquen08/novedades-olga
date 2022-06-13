import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Error {
    message: String
  }

  type Query {}

  type Mutation {}
`;

export default typeDefs;
