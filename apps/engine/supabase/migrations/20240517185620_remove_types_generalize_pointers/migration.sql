/*
  Warnings:

  - You are about to drop the column `type_id` on the `Edge` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `Graph` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `Node` table. All the data in the column will be lost.
  - You are about to drop the column `from_id` on the `Pointer` table. All the data in the column will be lost.
  - You are about to drop the column `to_type_id` on the `Pointer` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `Pointer` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `Value` table. All the data in the column will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[value_id]` on the table `Pointer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `value_id` to the `Pointer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Graph" DROP CONSTRAINT "Graph_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_from_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_to_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_type_id_fkey";

-- DropIndex
DROP INDEX "Pointer_from_id_key";

-- AlterTable
ALTER TABLE "Edge" DROP COLUMN "type_id";

-- AlterTable
ALTER TABLE "Graph" DROP COLUMN "type_id";

-- AlterTable
ALTER TABLE "Node" DROP COLUMN "type_id";

-- AlterTable
ALTER TABLE "Pointer" DROP COLUMN "from_id",
DROP COLUMN "to_type_id",
DROP COLUMN "type_id",
ADD COLUMN     "from_edge_id" TEXT,
ADD COLUMN     "from_graph_id" TEXT,
ADD COLUMN     "from_node_id" TEXT,
ADD COLUMN     "from_pointer_id" TEXT,
ADD COLUMN     "from_value_id" TEXT,
ADD COLUMN     "to_pointer_id" TEXT,
ADD COLUMN     "value_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Value" DROP COLUMN "type_id";

-- DropTable
DROP TABLE "Type";

-- CreateIndex
CREATE UNIQUE INDEX "Pointer_value_id_key" ON "Pointer"("value_id");

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_value_id_fkey" FOREIGN KEY ("value_id") REFERENCES "Value"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_node_id_fkey" FOREIGN KEY ("from_node_id") REFERENCES "Node"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_value_id_fkey" FOREIGN KEY ("from_value_id") REFERENCES "Value"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_graph_id_fkey" FOREIGN KEY ("from_graph_id") REFERENCES "Graph"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_edge_id_fkey" FOREIGN KEY ("from_edge_id") REFERENCES "Edge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_pointer_id_fkey" FOREIGN KEY ("from_pointer_id") REFERENCES "Pointer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_to_pointer_id_fkey" FOREIGN KEY ("to_pointer_id") REFERENCES "Pointer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
