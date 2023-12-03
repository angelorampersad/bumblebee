/*
  Warnings:

  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Made the column `priority` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
ALTER COLUMN "priority" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_key" ON "Task"("id");
