/*
  Warnings:

  - You are about to drop the column `horario` on the `Medicamento` table. All the data in the column will be lost.
  - You are about to drop the column `personaId` on the `Medicamento` table. All the data in the column will be lost.
  - You are about to drop the column `dosis` on the `RecetaMedica` table. All the data in the column will be lost.
  - You are about to drop the column `duracion` on the `RecetaMedica` table. All the data in the column will be lost.
  - You are about to drop the column `historialId` on the `RecetaMedica` table. All the data in the column will be lost.
  - You are about to drop the column `medicamento` on the `RecetaMedica` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Recordatorio` table. All the data in the column will be lost.
  - Added the required column `cantidadTotal` to the `Medicamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frecuenciaMin` to the `Medicamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personaId` to the `RecetaMedica` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profesionalId` to the `RecetaMedica` table without a default value. This is not possible if the table is not empty.
  - Made the column `medicamentoId` on table `Recordatorio` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Medicamento" DROP CONSTRAINT "Medicamento_personaId_fkey";

-- DropForeignKey
ALTER TABLE "RecetaMedica" DROP CONSTRAINT "RecetaMedica_historialId_fkey";

-- DropForeignKey
ALTER TABLE "Recordatorio" DROP CONSTRAINT "Recordatorio_medicamentoId_fkey";

-- AlterTable
ALTER TABLE "Medicamento" DROP COLUMN "horario",
DROP COLUMN "personaId",
ADD COLUMN     "cantidadTotal" INTEGER NOT NULL,
ADD COLUMN     "frecuenciaMin" INTEGER NOT NULL,
ADD COLUMN     "personaMayorId" INTEGER,
ADD COLUMN     "recetaId" INTEGER;

-- AlterTable
ALTER TABLE "RecetaMedica" DROP COLUMN "dosis",
DROP COLUMN "duracion",
DROP COLUMN "historialId",
DROP COLUMN "medicamento",
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "historialMedicoId" INTEGER,
ADD COLUMN     "personaId" INTEGER NOT NULL,
ADD COLUMN     "profesionalId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Recordatorio" DROP COLUMN "tipo",
ALTER COLUMN "medicamentoId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Recordatorio" ADD CONSTRAINT "Recordatorio_medicamentoId_fkey" FOREIGN KEY ("medicamentoId") REFERENCES "Medicamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicamento" ADD CONSTRAINT "Medicamento_recetaId_fkey" FOREIGN KEY ("recetaId") REFERENCES "RecetaMedica"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicamento" ADD CONSTRAINT "Medicamento_personaMayorId_fkey" FOREIGN KEY ("personaMayorId") REFERENCES "PersonaMayor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecetaMedica" ADD CONSTRAINT "RecetaMedica_profesionalId_fkey" FOREIGN KEY ("profesionalId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecetaMedica" ADD CONSTRAINT "RecetaMedica_personaId_fkey" FOREIGN KEY ("personaId") REFERENCES "PersonaMayor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecetaMedica" ADD CONSTRAINT "RecetaMedica_historialMedicoId_fkey" FOREIGN KEY ("historialMedicoId") REFERENCES "HistorialMedico"("id") ON DELETE SET NULL ON UPDATE CASCADE;
