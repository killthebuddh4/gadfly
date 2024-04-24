/*
  Warnings:

  - You are about to drop the column `signal_id` on the `Operation` table. All the data in the column will be lost.
  - You are about to drop the column `value_id` on the `Operation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Operation" DROP CONSTRAINT "Operation_signal_id_fkey";

-- DropForeignKey
ALTER TABLE "Operation" DROP CONSTRAINT "Operation_value_id_fkey";

-- DropIndex
DROP INDEX "Operation_signal_id_key";

-- DropIndex
DROP INDEX "Operation_value_id_key";

-- AlterTable
ALTER TABLE "Operation" DROP COLUMN "signal_id",
DROP COLUMN "value_id";

-- AlterTable
ALTER TABLE "Signal" ALTER COLUMN "value_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Mutation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "operation_id" TEXT NOT NULL,
    "signal_id" TEXT NOT NULL,

    CONSTRAINT "Mutation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Argument" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "operation_id" TEXT NOT NULL,
    "value_id" TEXT NOT NULL,

    CONSTRAINT "Argument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "operation_id" TEXT NOT NULL,
    "value_id" TEXT NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mutation_operation_id_key" ON "Mutation"("operation_id");

-- CreateIndex
CREATE UNIQUE INDEX "Mutation_signal_id_key" ON "Mutation"("signal_id");

-- CreateIndex
CREATE UNIQUE INDEX "Argument_operation_id_key" ON "Argument"("operation_id");

-- CreateIndex
CREATE UNIQUE INDEX "Result_operation_id_key" ON "Result"("operation_id");

-- AddForeignKey
ALTER TABLE "Mutation" ADD CONSTRAINT "Mutation_operation_id_fkey" FOREIGN KEY ("operation_id") REFERENCES "Operation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mutation" ADD CONSTRAINT "Mutation_signal_id_fkey" FOREIGN KEY ("signal_id") REFERENCES "Signal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Argument" ADD CONSTRAINT "Argument_operation_id_fkey" FOREIGN KEY ("operation_id") REFERENCES "Operation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Argument" ADD CONSTRAINT "Argument_value_id_fkey" FOREIGN KEY ("value_id") REFERENCES "Value"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_operation_id_fkey" FOREIGN KEY ("operation_id") REFERENCES "Operation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_value_id_fkey" FOREIGN KEY ("value_id") REFERENCES "Value"("id") ON DELETE CASCADE ON UPDATE CASCADE;
