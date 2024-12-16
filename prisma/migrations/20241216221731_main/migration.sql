/*
  Warnings:

  - You are about to drop the column `pacienteCod_paciente` on the `medicamento` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "medicamento" DROP CONSTRAINT "medicamento_pacienteCod_paciente_fkey";

-- AlterTable
ALTER TABLE "medicamento" DROP COLUMN "pacienteCod_paciente";
