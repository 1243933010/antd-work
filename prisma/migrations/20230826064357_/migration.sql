/*
  Warnings:

  - You are about to drop the column `label` on the `materiallibrary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `materiallibrary` DROP COLUMN `label`,
    ADD COLUMN `isShow` BOOLEAN NOT NULL DEFAULT true;
