/*
  Warnings:

  - You are about to drop the column `dosis` on the `medicamento` table. All the data in the column will be lost.
  - Added the required column `nombre` to the `medicamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medicamento" DROP COLUMN "dosis",
ADD COLUMN     "nombre" TEXT NOT NULL;
