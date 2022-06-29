import jwt from 'jsonwebtoken';
import tokenConfig from '../../../config/token.config';

export const tokenManager = {
  generateToken: (payload: {}): string => {
    return jwt.sign(payload, tokenConfig.secret, { algorithm: 'HS256', expiresIn: tokenConfig.expires });
  },
  verifyToken: (token: string): any => {
    try {
      return jwt.verify(token, tokenConfig.secret);
    } catch (error: any) {
      throw new Error('invalid token');
    }
  }
}
