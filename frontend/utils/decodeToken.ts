import jwt_decode from 'jwt-decode';

type TokenType = {
  role: string;
}

const decodeToken = (token: string): TokenType => {
  return jwt_decode(token);
}

export default decodeToken;
