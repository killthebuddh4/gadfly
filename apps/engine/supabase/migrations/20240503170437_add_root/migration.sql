/*
  Warnings:

  - You are about to drop the `Daemon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Daemon" DROP CONSTRAINT "Daemon_computer_id_fkey";

-- DropForeignKey
ALTER TABLE "Daemon" DROP CONSTRAINT "Daemon_network_id_fkey";

-- DropTable
DROP TABLE "Daemon";

-- CreateTable
CREATE TABLE "Root" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "process_id" TEXT NOT NULL,
    "network_id" TEXT NOT NULL,

    CONSTRAINT "Root_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Root_process_id_key" ON "Root"("process_id");

-- CreateIndex
CREATE UNIQUE INDEX "Root_network_id_key" ON "Root"("network_id");

-- AddForeignKey
ALTER TABLE "Root" ADD CONSTRAINT "Root_process_id_fkey" FOREIGN KEY ("process_id") REFERENCES "Process"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Root" ADD CONSTRAINT "Root_network_id_fkey" FOREIGN KEY ("network_id") REFERENCES "Network"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
