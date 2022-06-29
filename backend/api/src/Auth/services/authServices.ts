import { UserModel } from '../../User/entity/models/userModels';
import { RegisterService } from '../entity/types/authTypes';
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