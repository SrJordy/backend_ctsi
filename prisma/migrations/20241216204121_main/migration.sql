/*
  Warnings:

  - A unique constraint covering the columns `[CID]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "usuario_CID_key" ON "usuario"("CID");
