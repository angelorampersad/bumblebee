/*
  Warnings:

  - A unique constraint covering the columns `[platformId,id]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Platform" ADD CONSTRAINT "Platform_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_platformId_id_key" ON "Plan"("platformId", "id");
