/*
  Warnings:

  - Added the required column `type_id` to the `Edge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `Graph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `Node` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `Pointer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `Value` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Edge" ADD COLUMN     "type_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Graph" ADD COLUMN     "type_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Node" ADD COLUMN     "type_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pointer" ADD COLUMN     "from_type_id" TEXT,
ADD COLUMN     "to_type_id" TEXT,
ADD COLUMN     "type_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Value" ADD COLUMN     "type_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Graph" ADD CONSTRAINT "Graph_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_type_id_fkey" FOREIGN KEY ("from_type_id") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_to_type_id_fkey" FOREIGN KEY ("to_type_id") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
