import { Request } from 'express';

const context = ({ req }: { req: Request }) => {
  const token = req.headers.authorization || '';
}

export default context;
