import { Register } from '../../src/Auth/entity/types/authTypes';
import { registerService } from '../../src/Auth/services/authServices';

const queries = {
  hello: () => 'Hello world!',
};

const mutations = {
  register: async (_: any, { input }: Register) => {
    try {
      return await registerService(input);
    } catch (error: any) {
      return {
        errors: { message:  error.message }
      }
    }
  },
}

export const resolvers = { queries, mutations };
