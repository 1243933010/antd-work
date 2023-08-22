/*
  Warnings:

  - Added the required column `userId` to the `EchartTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `echarttable` ADD COLUMN `userId` INTEGER NOT NULL;
