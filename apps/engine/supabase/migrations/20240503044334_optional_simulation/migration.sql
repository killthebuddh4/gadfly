-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_simulation_id_fkey";

-- AlterTable
ALTER TABLE "Value" ALTER COLUMN "simulation_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_simulation_id_fkey" FOREIGN KEY ("simulation_id") REFERENCES "Simulation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
