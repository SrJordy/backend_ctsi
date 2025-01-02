export interface ICreatePacienteInput {
    nombre: string;
    apellido: string;
    CID: number;
    telefono: string;
    fecha_nac: Date | string;
    genero: string;
    direccion?: string;
    cuidador_id: number;
}

export interface IUpdatePacienteInput extends Partial<ICreatePacienteInput> {}

export interface IPacienteSearch {
    id?: number;
    CID?: number;
    nombre?: string;
    apellido?: string;
    cuidador_id?: number;
}

export class PacienteServiceError extends Error {
    constructor(
        public message: string,
        public code: string,
        public statusCode: number = 400
    ) {
        super(message);
        this.name = 'PacienteServiceError';
    }
}