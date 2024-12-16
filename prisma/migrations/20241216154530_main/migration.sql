-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('CUIDADOR', 'PROFESIONAL');

-- CreateEnum
CREATE TYPE "TipoRecordatorio" AS ENUM ('MEDICAMENTO', 'CITA');

-- CreateTable
CREATE TABLE "usuario" (
    "cod_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "CID" INTEGER NOT NULL,
    "telefono" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,
    "password" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("cod_usuario")
);

-- CreateTable
CREATE TABLE "paciente" (
    "cod_paciente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "CID" INTEGER NOT NULL,
    "telefono" INTEGER NOT NULL,
    "fecha_nac" TIMESTAMP(3) NOT NULL,
    "genero" TEXT NOT NULL,
    "direccion" TEXT,
    "cuidador_id" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("cod_paciente")
);

-- CreateTable
CREATE TABLE "recordatorio" (
    "cod_recordatorio" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fechahora" TIMESTAMP(3) NOT NULL,
    "medicamento_id" INTEGER NOT NULL,
    "persona_id" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recordatorio_pkey" PRIMARY KEY ("cod_recordatorio")
);

-- CreateTable
CREATE TABLE "medicamento" (
    "cod_medicamento" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "dosis" TEXT NOT NULL,
    "frecuenciamin" INTEGER NOT NULL,
    "cantidadtotal" INTEGER NOT NULL,
    "receta_id" INTEGER NOT NULL,
    "pacienteCod_paciente" INTEGER,

    CONSTRAINT "medicamento_pkey" PRIMARY KEY ("cod_medicamento")
);

-- CreateTable
CREATE TABLE "receta" (
    "cod_receta" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "persona_id" INTEGER NOT NULL,
    "profesional_id" INTEGER NOT NULL,

    CONSTRAINT "receta_pkey" PRIMARY KEY ("cod_receta")
);

-- CreateTable
CREATE TABLE "citamedica" (
    "cod_cita" SERIAL NOT NULL,
    "fechahora" TIMESTAMP(3) NOT NULL,
    "lugar" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "profesional_id" INTEGER NOT NULL,
    "persona_id" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "citamedica_pkey" PRIMARY KEY ("cod_cita")
);

-- CreateTable
CREATE TABLE "historialmedico" (
    "cod_historial" SERIAL NOT NULL,
    "descripcion" TEXT,
    "presion_arterial" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "estatura" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "profesional_id" INTEGER NOT NULL,
    "persona_id" INTEGER NOT NULL,

    CONSTRAINT "historialmedico_pkey" PRIMARY KEY ("cod_historial")
);

-- CreateTable
CREATE TABLE "diagnostico" (
    "cod_diagnostico" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_diagnostico" TIMESTAMP(3) NOT NULL,
    "historial_id" INTEGER NOT NULL,

    CONSTRAINT "diagnostico_pkey" PRIMARY KEY ("cod_diagnostico")
);

-- CreateTable
CREATE TABLE "tratamiento" (
    "cod_tratamiento" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fechainicio" TIMESTAMP(3) NOT NULL,
    "fechafin" TIMESTAMP(3) NOT NULL,
    "historial_id" INTEGER NOT NULL,

    CONSTRAINT "tratamiento_pkey" PRIMARY KEY ("cod_tratamiento")
);

-- CreateTable
CREATE TABLE "examenes" (
    "cod_examen" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "resultados" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "historial_id" INTEGER NOT NULL,

    CONSTRAINT "examenes_pkey" PRIMARY KEY ("cod_examen")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_cuidador_id_fkey" FOREIGN KEY ("cuidador_id") REFERENCES "usuario"("cod_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recordatorio" ADD CONSTRAINT "recordatorio_medicamento_id_fkey" FOREIGN KEY ("medicamento_id") REFERENCES "medicamento"("cod_medicamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recordatorio" ADD CONSTRAINT "recordatorio_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "paciente"("cod_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medicamento" ADD CONSTRAINT "medicamento_pacienteCod_paciente_fkey" FOREIGN KEY ("pacienteCod_paciente") REFERENCES "paciente"("cod_paciente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receta" ADD CONSTRAINT "receta_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "paciente"("cod_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receta" ADD CONSTRAINT "receta_profesional_id_fkey" FOREIGN KEY ("profesional_id") REFERENCES "usuario"("cod_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citamedica" ADD CONSTRAINT "citamedica_profesional_id_fkey" FOREIGN KEY ("profesional_id") REFERENCES "usuario"("cod_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citamedica" ADD CONSTRAINT "citamedica_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "paciente"("cod_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historialmedico" ADD CONSTRAINT "historialmedico_profesional_id_fkey" FOREIGN KEY ("profesional_id") REFERENCES "usuario"("cod_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historialmedico" ADD CONSTRAINT "historialmedico_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "paciente"("cod_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diagnostico" ADD CONSTRAINT "diagnostico_historial_id_fkey" FOREIGN KEY ("historial_id") REFERENCES "historialmedico"("cod_historial") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tratamiento" ADD CONSTRAINT "tratamiento_historial_id_fkey" FOREIGN KEY ("historial_id") REFERENCES "historialmedico"("cod_historial") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "examenes" ADD CONSTRAINT "examenes_historial_id_fkey" FOREIGN KEY ("historial_id") REFERENCES "historialmedico"("cod_historial") ON DELETE RESTRICT ON UPDATE CASCADE;
