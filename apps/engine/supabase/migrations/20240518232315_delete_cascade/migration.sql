-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_from_id_fkey";

-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_graph_id_fkey";

-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_to_id_fkey";

-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_value_id_fkey";

-- DropForeignKey
ALTER TABLE "Graph" DROP CONSTRAINT "Graph_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Graph" DROP CONSTRAINT "Graph_value_id_fkey";

-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_graph_id_fkey";

-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_value_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_from_edge_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_from_graph_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_from_node_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_from_pointer_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_from_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_from_value_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_to_edge_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_to_graph_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_to_node_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_to_pointer_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_to_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_to_value_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Pointer" DROP CONSTRAINT "Pointer_value_id_fkey";

-- DropForeignKey
ALTER TABLE "Value" DROP CONSTRAINT "Value_type_id_fkey";

-- AddForeignKey
ALTER TABLE "Value" ADD CONSTRAINT "Value_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Graph" ADD CONSTRAINT "Graph_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Graph" ADD CONSTRAINT "Graph_value_id_fkey" FOREIGN KEY ("value_id") REFERENCES "Value"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_graph_id_fkey" FOREIGN KEY ("graph_id") REFERENCES "Graph"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_value_id_fkey" FOREIGN KEY ("value_id") REFERENCES "Value"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_graph_id_fkey" FOREIGN KEY ("graph_id") REFERENCES "Graph"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_value_id_fkey" FOREIGN KEY ("value_id") REFERENCES "Value"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Edge" ADD CONSTRAINT "Edge_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_value_id_fkey" FOREIGN KEY ("value_id") REFERENCES "Value"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_node_id_fkey" FOREIGN KEY ("from_node_id") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_value_id_fkey" FOREIGN KEY ("from_value_id") REFERENCES "Value"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_graph_id_fkey" FOREIGN KEY ("from_graph_id") REFERENCES "Graph"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_edge_id_fkey" FOREIGN KEY ("from_edge_id") REFERENCES "Edge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_pointer_id_fkey" FOREIGN KEY ("from_pointer_id") REFERENCES "Pointer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_from_type_id_fkey" FOREIGN KEY ("from_type_id") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_to_value_id_fkey" FOREIGN KEY ("to_value_id") REFERENCES "Value"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_to_node_id_fkey" FOREIGN KEY ("to_node_id") REFERENCES "Node"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_to_graph_id_fkey" FOREIGN KEY ("to_graph_id") REFERENCES "Graph"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_to_edge_id_fkey" FOREIGN KEY ("to_edge_id") REFERENCES "Edge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_to_pointer_id_fkey" FOREIGN KEY ("to_pointer_id") REFERENCES "Pointer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pointer" ADD CONSTRAINT "Pointer_to_type_id_fkey" FOREIGN KEY ("to_type_id") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
