/*
  Warnings:

  - You are about to drop the column `process_id` on the `Root` table. All the data in the column will be lost.
  - You are about to drop the `Child` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Process` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Signal` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[machine_id]` on the table `Expression` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[computer_id]` on the table `Root` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `machine_id` to the `Expression` table without a default value. This is not possible if the table is not empty.
  - Added the required column `computer_id` to the `Root` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Child" DROP CONSTRAINT "Child_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "Process" DROP CONSTRAINT "Process_computer_id_fkey";

-- DropForeignKey
ALTER TABLE "Root" DROP CONSTRAINT "Root_process_id_fkey";

-- DropForeignKey
ALTER TABLE "Signal" DROP CONSTRAINT "Signal_source_id_fkey";

-- DropForeignKey
ALTER TABLE "Signal" DROP CONSTRAINT "Signal_target_id_fkey";

-- DropForeignKey
ALTER TABLE "Signal" DROP CONSTRAINT "Signal_value_id_fkey";

-- DropIndex
DROP INDEX "Root_process_id_key";

-- AlterTable
ALTER TABLE "Expression" ADD COLUMN     "machine_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Root" DROP COLUMN "process_id",
ADD COLUMN     "computer_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Child";

-- DropTable
DROP TABLE "Process";

-- DropTable
DROP TABLE "Signal";

-- CreateIndex
CREATE UNIQUE INDEX "Expression_machine_id_key" ON "Expression"("machine_id");

-- CreateIndex
CREATE UNIQUE INDEX "Root_computer_id_key" ON "Root"("computer_id");

-- AddForeignKey
ALTER TABLE "Expression" ADD CONSTRAINT "Expression_machine_id_fkey" FOREIGN KEY ("machine_id") REFERENCES "Machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Root" ADD CONSTRAINT "Root_computer_id_fkey" FOREIGN KEY ("computer_id") REFERENCES "Computer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
