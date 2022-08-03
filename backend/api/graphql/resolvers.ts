import { Auth } from "./Auth";
import { Product } from "./Product";

const resolvers = {
  Query: {
    ...Auth.resolvers.queries,
    ...Product.resolvers.queries,
  },
  Mutation: {
    ...Auth.resolvers.mutations,
    ...Product.resolvers.mutations,
  },
};

export default resolvers;
