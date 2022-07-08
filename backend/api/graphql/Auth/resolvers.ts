import { Login, Register } from '../../src/Auth/entity/types/authTypes';
import { loginAdminService, loginService, registerService } from '../../src/Auth/services/authServices';

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
  login: async (_: any, { input }: Login) => {
    try {
      return await loginService(input);
    } catch (error: any) {
      return {
        errors: { message:  error.message }
      }
    }
  },
  loginAdmin: async (_: any, { input }: Login) => {
    try {
      return await loginAdminService(input);
    } catch (error: any) {
      return {
        errors: { message:  error.message }
      }
    }
  }
}

export const resolvers = { queries, mutations };
