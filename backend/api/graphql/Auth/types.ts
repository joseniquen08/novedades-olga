export const types = `
  input RegisterInput {
    name: String!
    email: String!
    password: String!
    role: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type RegisterOutput {
    token: String
    errors: Error
  }

  type LoginOutput {
    token: String
    errors: Error
  }
`;
