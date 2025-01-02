import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

const cors = Cors({
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    origin: '*', 
    credentials: true,
    optionsSuccessStatus: 200,
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

const corsMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res, cors);
};

export default corsMiddleware;