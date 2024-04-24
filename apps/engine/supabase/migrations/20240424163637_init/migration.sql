/*
  Warnings:

  - You are about to drop the column `actor_id` on the `Variable` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Variable" DROP CONSTRAINT "Variable_actor_id_fkey";

-- AlterTable
ALTER TABLE "Variable" DROP COLUMN "actor_id";

-- CreateTable
CREATE TABLE "Input" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "variable_id" TEXT NOT NULL,
    "actor_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Input_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Output" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "variable_id" TEXT NOT NULL,
    "actor_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Output_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Input_variable_id_key" ON "Input"("variable_id");

-- CreateIndex
CREATE UNIQUE INDEX "Input_variable_id_actor_id_key" ON "Input"("variable_id", "actor_id");

-- CreateIndex
CREATE UNIQUE INDEX "Output_variable_id_key" ON "Output"("variable_id");

-- CreateIndex
CREATE UNIQUE INDEX "Output_variable_id_actor_id_key" ON "Output"("variable_id", "actor_id");

-- AddForeignKey
ALTER TABLE "Input" ADD CONSTRAINT "Input_variable_id_fkey" FOREIGN KEY ("variable_id") REFERENCES "Variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Input" ADD CONSTRAINT "Input_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Output" ADD CONSTRAINT "Output_variable_id_fkey" FOREIGN KEY ("variable_id") REFERENCES "Variable"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Output" ADD CONSTRAINT "Output_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
