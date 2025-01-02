/*
  Warnings:

  - Made the column `nivel_glucosa` on table `historialmedico` required. This step will fail if there are existing NULL values in that column.
  - Made the column `temperatura` on table `historialmedico` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo_sangre` on table `historialmedico` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "historialmedico" ALTER COLUMN "nivel_glucosa" SET NOT NULL,
ALTER COLUMN "temperatura" SET NOT NULL,
ALTER COLUMN "tipo_sangre" SET NOT NULL;
