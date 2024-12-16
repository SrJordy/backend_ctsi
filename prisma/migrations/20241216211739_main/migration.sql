-- AddForeignKey
ALTER TABLE "medicamento" ADD CONSTRAINT "medicamento_receta_id_fkey" FOREIGN KEY ("receta_id") REFERENCES "receta"("cod_receta") ON DELETE RESTRICT ON UPDATE CASCADE;
