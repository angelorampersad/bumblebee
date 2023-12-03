/*
  Warnings:

  - You are about to drop the column `platformId` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the `Platform` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_platformId_fkey";

-- DropIndex
DROP INDEX "Plan_platformId_id_key";

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "platformId";

-- DropTable
DROP TABLE "Platform";
