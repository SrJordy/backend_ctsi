/*
  Warnings:

  - You are about to drop the column `nombre` on the `medicamento` table. All the data in the column will be lost.
  - Added the required column `descripcion` to the `medicamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medicamento" DROP COLUMN "nombre",
ADD COLUMN     "descripcion" TEXT NOT NULL;
