import { Auth } from "./Auth";
import { Category } from "./Category";
import { Product } from "./Product";

const resolvers = {
  Query: {
    ...Auth.resolvers.queries,
    ...Product.resolvers.queries,
    ...Category.resolvers.queries,
  },
  Mutation: {
    ...Auth.resolvers.mutations,
    ...Product.resolvers.mutations,
    ...Category.resolvers.mutations,
  },
};

export default resolvers;
