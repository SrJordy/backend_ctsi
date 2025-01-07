import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { JWT } from 'google-auth-library';

const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID; // Obtener el App ID desde las variables de entorno
const ONESIGNAL_SERVICE_ACCOUNT_PATH = path.resolve(__dirname, process.env.ONESIGNAL_SERVICE_ACCOUNT_PATH || ''); // Usar ruta absoluta

console.log(`Ruta del archivo de cuenta de servicio: ${ONESIGNAL_SERVICE_ACCOUNT_PATH}`); // Imprimir la ruta generada

async function getAccessToken() {
    // Verificar si el archivo existe antes de intentar abrirlo
    if (!fs.existsSync(ONESIGNAL_SERVICE_ACCOUNT_PATH)) {
        throw new Error(`El archivo de cuenta de servicio no se encuentra en la ruta: ${ONESIGNAL_SERVICE_ACCOUNT_PATH}`);
    }

    const serviceAccount = JSON.parse(fs.readFileSync(ONESIGNAL_SERVICE_ACCOUNT_PATH, 'utf8'));
    const client = new JWT({
        email: serviceAccount.client_email,
        key: serviceAccount.private_key,
        scopes: ['https://onesignal.com/api/v1/notifications'],
    });

    const tokens = await client.authorize();
    return tokens.access_token;
}

export async function sendNotification(title: string, message: string, playerIds: string[]) {
    const accessToken = await getAccessToken();

    const notification = {
        app_id: ONESIGNAL_APP_ID,
        headings: { en: title },
        contents: { en: message },
        include_player_ids: playerIds,
    };

    try {
        const response = await axios.post('https://onesignal.com/api/v1/notifications', notification, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data; // Retorna la respuesta de OneSignal
    } catch (error) {
        console.error('Error al enviar la notificación:', error);
        throw new Error('Error al enviar la notificación');
    }
}