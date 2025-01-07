import { NextApiRequest, NextApiResponse } from 'next';
import { sendNotification } from '../service/OneSignalService';

export const sendNotificationHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { title, message, playerIds } = req.body;

    if (!title || !message || !playerIds || !Array.isArray(playerIds)) {
        return res.status(400).json({ error: 'Faltan parámetros requeridos' });
    }

    try {
        const response = await sendNotification(title, message, playerIds);
        return res.status(200).json(response); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};