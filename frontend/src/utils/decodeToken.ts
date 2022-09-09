import { TokenType } from '@custom-types/auth';
import jwt_decode from 'jwt-decode';

const decodeToken = (token: string): TokenType => {
  return jwt_decode(token);
}

export default decodeToken;
