import { UserModel } from '../../User/entity/models/userModels';
import { LoginService, RegisterService } from '../entity/types/authTypes';
import { passwordManager } from '../utils/passwordManager';
import { tokenManager } from '../utils/tokenManager';

export const registerService = async (input: RegisterService): Promise<{ token: string }> => {
  try {
    if (input.password.length < 6) throw new Error('length');
    input.password = passwordManager.hashPassword(input.password);
    const user = new UserModel(input);
    const result = await user.save();
    if (!result) throw new Error('error');
    const { _id, name, email, image, role, provider } = result;
    return {
      token: tokenManager.generateToken({ _id, name, email, image, role, provider }),
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const loginService = async (input: LoginService): Promise<{ token: string }> => {
  try {
    const user = await UserModel.findOne({ email: input.email });
    if (user) {
      if (user.role === 'client') {
        const isValid = passwordManager.comparePassword(input.password, user.password);
        if (isValid) {
          const { _id, name, email, image, role, provider } = user;
          return {
            token: tokenManager.generateToken({ id: _id, name, email, image, role, provider }),
          }
        }
        throw new Error('invalid password');
      }
      throw new Error('not client');
    }
    throw new Error('email not found');
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const loginAdminService = async (input: LoginService): Promise<{ token: string }> => {
  try {
    const user = await UserModel.findOne({ email: input.email });
    if (user) {
      if (user.role === 'admin' || user.role === 'super') {
        const isValid = passwordManager.comparePassword(input.password, user.password);
        if (isValid) {
          const { _id, name, email, image, role, provider } = user;
          return {
            token: tokenManager.generateToken({ id: _id, name, email, image, role, provider }),
          }
        }
        throw new Error('invalid password');
      }
      throw new Error('not admin');
    }
    throw new Error('email not found');
  } catch (error: any) {
    throw new Error(error.message);
  }
}
