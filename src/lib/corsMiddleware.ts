import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true, 
});


function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: Error | void) => {
      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });
}

export default async function corsMiddleware(req: NextApiRequest, res: NextApiResponse) {
  try {
    await runMiddleware(req, res, cors);
  } catch (error) {
    console.error('Error en CORS middleware:', error);
    res.status(500).json({ error: 'Error en el manejo de CORS' });
  }
}

