/*
  Warnings:

  - You are about to drop the `Stimulus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stimulus" DROP CONSTRAINT "Stimulus_signal_id_fkey";

-- DropTable
DROP TABLE "Stimulus";
