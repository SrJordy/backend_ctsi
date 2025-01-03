import { NextApiRequest, NextApiResponse } from 'next';
import { RecordatorioService } from '@/service/RecordatorioService';
import { RecordatorioServiceError } from '@/lib/RecordatorioServiceError';

const recordatorioService = new RecordatorioService();

export async function createRecordatorio(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log('Datos recibidos en createRecordatorio:', req.body);
        const recordatorio = await recordatorioService.createRecordatorio(req.body);
        console.log('Recordatorio creado:', recordatorio);
        return res.status(201).json(recordatorio);
    } catch (error) {
        console.error('Error en createRecordatorio controller:', error);
        if (error instanceof RecordatorioServiceError) {
            return res.status(400).json({ 
                error: error.message,
                code: error.code 
            });
        }
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}

export async function getRecordatorios(req: NextApiRequest, res: NextApiResponse) {
    try {
        const recordatorios = await recordatorioService.getRecordatorios();
        return res.status(200).json(recordatorios);
    } catch (error) {
        console.error('Error en getRecordatorios controller:', error);
        if (error instanceof RecordatorioServiceError) {
            return res.status(400).json({ 
                error: error.message,
                code: error.code 
            });
        }
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}

export async function getRecordatorio(req: NextApiRequest, res: NextApiResponse) {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            return res.status(400).json({ 
                error: 'ID inválido',
                code: 'INVALID_ID'
            });
        }

        const recordatorio = await recordatorioService.getRecordatorio(id);
        return res.status(200).json(recordatorio);
    } catch (error) {
        console.error('Error en getRecordatorio controller:', error);
        if (error instanceof RecordatorioServiceError) {
            return res.status(400).json({ 
                error: error.message,
                code: error.code 
            });
        }
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}

export async function updateRecordatorio(req: NextApiRequest, res: NextApiResponse) {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            return res.status(400).json({ 
                error: 'ID inválido',
                code: 'INVALID_ID'
            });
        }

        console.log('Datos recibidos en updateRecordatorio:', { id, data: req.body });
        const recordatorio = await recordatorioService.updateRecordatorio(id, req.body);
        console.log('Recordatorio actualizado:', recordatorio);
        return res.status(200).json(recordatorio);
    } catch (error) {
        console.error('Error en updateRecordatorio controller:', error);
        if (error instanceof RecordatorioServiceError) {
            return res.status(400).json({ 
                error: error.message,
                code: error.code 
            });
        }
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}

export async function deleteRecordatorio(req: NextApiRequest, res: NextApiResponse) {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            return res.status(400).json({ 
                error: 'ID inválido',
                code: 'INVALID_ID'
            });
        }

        await recordatorioService.deleteRecordatorio(id);
        return res.status(200).json({ 
            message: 'Recordatorio eliminado correctamente'
        });
    } catch (error) {
        console.error('Error en deleteRecordatorio controller:', error);
        if (error instanceof RecordatorioServiceError) {
            return res.status(400).json({ 
                error: error.message,
                code: error.code 
            });
        }
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}