/*
  Warnings:

  - You are about to drop the `recordatorio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "recordatorio" DROP CONSTRAINT "recordatorio_medicamento_id_fkey";

-- DropForeignKey
ALTER TABLE "recordatorio" DROP CONSTRAINT "recordatorio_persona_id_fkey";

-- DropTable
DROP TABLE "recordatorio";

-- DropEnum
DROP TYPE "TipoRecordatorio";

-- CreateTable
CREATE TABLE "recordatorioMedicamento" (
    "cod_recordatorio" SERIAL NOT NULL,
    "medicamento_id" INTEGER NOT NULL,
    "fechahora" TIMESTAMP(3) NOT NULL,
    "persona_id" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recordatorioMedicamento_pkey" PRIMARY KEY ("cod_recordatorio")
);

-- AddForeignKey
ALTER TABLE "recordatorioMedicamento" ADD CONSTRAINT "recordatorioMedicamento_medicamento_id_fkey" FOREIGN KEY ("medicamento_id") REFERENCES "medicamento"("cod_medicamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recordatorioMedicamento" ADD CONSTRAINT "recordatorioMedicamento_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "paciente"("cod_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;
