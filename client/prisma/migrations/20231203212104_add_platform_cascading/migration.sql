-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_platformId_fkey";

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
