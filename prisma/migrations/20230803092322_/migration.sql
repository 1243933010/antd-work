/*
  Warnings:

  - You are about to drop the `_worktoworktag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `_worktoworktag`;

-- CreateIndex
CREATE INDEX `WorkToWorkTag_workId_idx` ON `WorkToWorkTag`(`workId`);
