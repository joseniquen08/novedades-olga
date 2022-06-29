import dotenv from 'dotenv';

dotenv.config();

const tokenConfig = {
  secret: `${process.env.TOKEN_SECRET}`,
  expires: `${process.env.TOKEN_EXPIRES}`,
}

export default tokenConfig;
