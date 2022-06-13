import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';

dotenv.config();

const app: Application = express();

export async function start(): Promise<void> {
  const apolloServer = new ApolloServer({});

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/api' });

  app.use(express.json());

  app.use(cors());

  app.use(function (error: any, req: Request, res: Response, next: NextFunction) {
    res.status(error.status || 500).send({ message: error.message, type: error.type });
  });

  app.listen(`${process.env.PORT}`, async () => {
    console.log(`Server started on port http://localhost:${process.env.PORT}/api`);
  });
}

export default app;
