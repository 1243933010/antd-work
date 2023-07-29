/*
  Warnings:

  - You are about to drop the `userlabel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `userlabel` DROP FOREIGN KEY `UserLabel_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `labels` JSON NULL;

-- DropTable
DROP TABLE `userlabel`;
