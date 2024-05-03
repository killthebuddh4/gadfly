-- DropForeignKey
ALTER TABLE "Computer" DROP CONSTRAINT "Computer_simulation_id_fkey";

-- AlterTable
ALTER TABLE "Computer" ALTER COLUMN "simulation_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Computer" ADD CONSTRAINT "Computer_simulation_id_fkey" FOREIGN KEY ("simulation_id") REFERENCES "Simulation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
