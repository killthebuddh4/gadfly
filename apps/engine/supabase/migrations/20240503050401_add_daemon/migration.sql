-- CreateTable
CREATE TABLE "Daemon" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "computer_id" TEXT NOT NULL,
    "network_id" TEXT NOT NULL,

    CONSTRAINT "Daemon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Daemon_computer_id_key" ON "Daemon"("computer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Daemon_network_id_key" ON "Daemon"("network_id");

-- AddForeignKey
ALTER TABLE "Daemon" ADD CONSTRAINT "Daemon_computer_id_fkey" FOREIGN KEY ("computer_id") REFERENCES "Computer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Daemon" ADD CONSTRAINT "Daemon_network_id_fkey" FOREIGN KEY ("network_id") REFERENCES "Network"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
