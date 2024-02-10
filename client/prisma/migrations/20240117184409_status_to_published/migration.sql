/*
  Warnings:

  - You are about to drop the column `status` on the `Plan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "status",
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
