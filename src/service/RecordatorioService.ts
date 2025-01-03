import { PrismaClient } from '@prisma/client';
import { RecordatorioServiceError } from '@/lib/RecordatorioServiceError';

const prisma = new PrismaClient();

export interface CreateRecordatorioInput {
    medicamento_id: number;
    fechahora: Date;
    persona_id: number;
}

export interface UpdateRecordatorioInput {
    medicamento_id?: number;
    fechahora?: Date;
    persona_id?: number;
    estado?: boolean;
}

export class RecordatorioService {
    async createRecordatorio(data: CreateRecordatorioInput) {
        try {
            // Validar que el medicamento existe
            const medicamento = await prisma.medicamento.findUnique({
                where: { cod_medicamento: data.medicamento_id }
            });
            if (!medicamento) {
                throw new RecordatorioServiceError('MEDICAMENTO_NOT_FOUND', 'El medicamento no existe');
            }

            // Validar que el paciente existe
            const paciente = await prisma.paciente.findUnique({
                where: { cod_paciente: data.persona_id }
            });
            if (!paciente) {
                throw new RecordatorioServiceError('PACIENTE_NOT_FOUND', 'El paciente no existe');
            }

            const recordatorio = await prisma.recordatorioMedicamento.create({
                data: {
                    medicamento_id: data.medicamento_id,
                    fechahora: new Date(data.fechahora),
                    persona_id: data.persona_id,
                    estado: true
                },
                include: {
                    medicina: true,
                    persona: true
                }
            });

            return recordatorio;
        } catch (error) {
            console.error('Error en createRecordatorio:', error);
            if (error instanceof RecordatorioServiceError) {
                throw error;
            }
            throw new RecordatorioServiceError('CREATE_ERROR', 'Error al crear el recordatorio');
        }
    }

    async getRecordatorios() {
        try {
            return await prisma.recordatorioMedicamento.findMany({
                include: {
                    medicina: true,
                    persona: true
                }
            });
        } catch (error) {
            console.error('Error en getRecordatorios:', error);
            throw new RecordatorioServiceError('FETCH_ERROR', 'Error al obtener los recordatorios');
        }
    }

    async getRecordatorio(id: number) {
        try {
            const recordatorio = await prisma.recordatorioMedicamento.findUnique({
                where: { cod_recordatorio: id },
                include: {
                    medicina: true,
                    persona: true
                }
            });

            if (!recordatorio) {
                throw new RecordatorioServiceError('NOT_FOUND', 'Recordatorio no encontrado');
            }

            return recordatorio;
        } catch (error) {
            console.error('Error en getRecordatorio:', error);
            if (error instanceof RecordatorioServiceError) {
                throw error;
            }
            throw new RecordatorioServiceError('FETCH_ERROR', 'Error al obtener el recordatorio');
        }
    }

    async updateRecordatorio(id: number, data: UpdateRecordatorioInput) {
        try {
            // Verificar si el recordatorio existe
            const existingRecordatorio = await prisma.recordatorioMedicamento.findUnique({
                where: { cod_recordatorio: id }
            });

            if (!existingRecordatorio) {
                throw new RecordatorioServiceError('NOT_FOUND', 'Recordatorio no encontrado');
            }

            // Si se actualiza el medicamento, verificar que existe
            if (data.medicamento_id) {
                const medicamento = await prisma.medicamento.findUnique({
                    where: { cod_medicamento: data.medicamento_id }
                });
                if (!medicamento) {
                    throw new RecordatorioServiceError('MEDICAMENTO_NOT_FOUND', 'El medicamento no existe');
                }
            }

            // Si se actualiza el paciente, verificar que existe
            if (data.persona_id) {
                const paciente = await prisma.paciente.findUnique({
                    where: { cod_paciente: data.persona_id }
                });
                if (!paciente) {
                    throw new RecordatorioServiceError('PACIENTE_NOT_FOUND', 'El paciente no existe');
                }
            }

            return await prisma.recordatorioMedicamento.update({
                where: { cod_recordatorio: id },
                data: {
                    ...data,
                    fechahora: data.fechahora ? new Date(data.fechahora) : undefined
                },
                include: {
                    medicina: true,
                    persona: true
                }
            });
        } catch (error) {
            console.error('Error en updateRecordatorio:', error);
            if (error instanceof RecordatorioServiceError) {
                throw error;
            }
            throw new RecordatorioServiceError('UPDATE_ERROR', 'Error al actualizar el recordatorio');
        }
    }

    async deleteRecordatorio(id: number) {
        try {
            // Verificar si el recordatorio existe
            const recordatorio = await prisma.recordatorioMedicamento.findUnique({
                where: { cod_recordatorio: id }
            });

            if (!recordatorio) {
                throw new RecordatorioServiceError('NOT_FOUND', 'Recordatorio no encontrado');
            }

            // Realizar un soft delete actualizando el estado
            return await prisma.recordatorioMedicamento.update({
                where: { cod_recordatorio: id },
                data: { estado: false }
            });
        } catch (error) {
            console.error('Error en deleteRecordatorio:', error);
            if (error instanceof RecordatorioServiceError) {
                throw error;
            }
            throw new RecordatorioServiceError('DELETE_ERROR', 'Error al eliminar el recordatorio');
        }
    }
}