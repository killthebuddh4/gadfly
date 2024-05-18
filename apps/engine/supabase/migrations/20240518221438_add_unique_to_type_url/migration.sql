/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Type_url_key" ON "Type"("url");
