export const types = `
  type Category {
    id: ID!
    name: String!
    tag: String!
    status: String!
  }

  input AddCategoryInput {
    name: String!
    tag: String!
  }

  type AddCategoryOutput {
    category: Category
    errors: Error
  }

  type GetAllCategoriesOutput {
    categories: [Category]
    errors: Error
  }
`;